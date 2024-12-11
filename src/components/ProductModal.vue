<template>
  <div class="modal">
    <div class="modal-overlay" @click.self="$emit('close')">
      <div class="modal-content">
        <button class="close-btn" @click="$emit('close')">&times;</button>
        <img :src="product.image" alt="Product Image" />
        <h2>{{ product.name }}</h2>
        <br />
        <strong>
          <p>₱ {{ product.price }}</p>
        </strong>
        <br />
        <p>{{ product.description || 'No description available.' }}</p>

        <div class="option-group" v-if="product.hasDrinkType">
          <h3>Options (Required)</h3>
          <label v-for="type in drinkTypeOptions" :key="type" :for="`type-${type}`">
            <input id="type-{{ type }}" type="radio" v-model="selectedDrinkType" :value="type" />
            {{ type }}
          </label>
        </div>

        <div class="option-group" v-if="product.hasShot">
          <h3>Choice of Shot (Required)</h3>
          <label v-for="shot in shotOptions" :key="shot.name" :for="`shot-${shot.name}`">
            <input
              id="shot-{{ shot.name  }}"
              type="radio"
              v-model="selectedShot"
              :value="shot"
              @change="updateTotal"
            />
            {{ shot.name }} ({{ shot.price === 0 ? 'Free' : `+ ₱${shot.price}` }})
          </label>
        </div>

        <div class="option-group" v-if="product.hasDrinkExtras">
          <h3>Drink Extras</h3>
          <h4>Select up to 7 (optional)</h4>
          <br />
          <label v-for="extra in extraOptions" :key="extra.name" :for="`extra-${extra.name}`">
            <input
              id="extra-{{ extra.name }}"
              type="checkbox"
              :value="extra"
              v-model="extras"
              @change="updateTotal"
            />
            {{ extra.name }} (+ ₱{{ extra.price }})
          </label>
        </div>

        <div class="option-group" v-if="product.hasSize">
          <h3>Size</h3>
          <p>Select up to 1 (optional)</p>
          <br />
          <label v-for="size in sizeOptions" :key="size.name" :for="`size-${size.name}`">
            <input
              id="size-{{ size.name }}"
              type="radio"
              v-model="selectedSize"
              :value="size"
              @change="updateTotal"
            />
            {{ size.name }} ({{ size.price > 0 ? `+ ₱${size.price}` : 'Free' }})
          </label>
        </div>

        <!-- Special Instructions Group -->
        <div class="option-group" v-if="product.hasSpecialInstructions">
          <h3>Special Instructions</h3>
          <textarea
            v-model="instructions"
            placeholder="Write your Special Requests here"
            rows="4"
          ></textarea>
        </div>

        <!-- Modal Footer -->
        <div class="modal-footer">
          <div class="total-price">Total: ₱{{ totalPrice }}</div>
          <button
            class="add-to-cart"
            @click="addToCart"
            :disabled="!canAddToCart"
            :style="{ cursor: canAddToCart ? 'pointer' : 'not-allowed' }"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Kanit', sans-serif;
}

body.modal-open {
  overflow: hidden;
}

:root {
  --primary-color: #ff6347;
  --primary-hover: #e5533f;
  --text-color: #000000;
  --overlay-color: rgba(0, 0, 0, 0.5);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5); /* Background overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  width: 90%;
  max-width: 500px;
  max-height: 90%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  position: relative;
}

.modal-content img {
  width: 100%;
  margin: 0 auto 20px;
  height: auto;
  object-fit: cover;
  max-height: 80vh;
  max-width: 100%;
  display: block;
  align-self: flex-start;
  margin-bottom: 20px;
  border-radius: 5px;
}

.close-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 2.5rem;
  cursor: pointer;
  color: var(--text-color);
  z-index: 1001;
}

.close-btn:hover {
  color: var(--primary-color);
}

.option-group {
  margin-top: 20px;
}

.option-group h3 {
  margin-bottom: 10px;
  font-size: 1rem;
}

.option-group label {
  display: block;
  margin-bottom: 12px;
  font-size: 0.9rem;
}

textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
}

.total-price {
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  margin: 16px 0;
}

.modal-footer {
  padding: 20px 0;
  border-radius: 1px solid #ddd;
  background-color: #f9f9f9;
  text-align: center;
}

.add-to-cart {
  background: #828282;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.add-to-cart:hover {
  background: #000000;
}

.add-to-cart:disabled {
  background: #d3d3d3;
  color: #888888;
  cursor: not-allowed;
}
</style>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      basePrice: this.product.price || 0,
      totalPrice: this.product.price || 0,
      selectedShot: null,
      extras: [],
      selectedSize: null,
      instructions: '',
      selectedDrinkType: null,
      drinkTypeOptions: ['Hot', 'Cold'],
      shotOptions: [
        { name: 'Single Shot', price: 0 },
        { name: 'Double Shot', price: 0 },
        { name: 'Triple Shot', price: 80 },
      ],
      extraOptions: [
        { name: 'Stevia Drops', price: 80 },
        { name: 'Syrup', price: 40 },
        { name: 'Sugar Syrup', price: 10 },
        { name: 'Oatmilk', price: 60 },
        { name: 'Sweetcream', price: 60 },
        { name: 'Seasalt Foam', price: 60 },
        { name: 'Half & Half', price: 60 },
      ],
      sizeOptions: [
        { name: 'Tall', price: 0 },
        { name: 'Grande', price: 20 },
      ],
    }
  },
  computed: {
    canAddToCart() {
      const hasRequiredShot = this.product.hasShot ? this.selectedShot !== null : true
      return hasRequiredShot
    },
  },
  methods: {
    updateTotal() {
      let total = this.basePrice

      // Add shot price if a shot is selected
      if (this.selectedShot) {
        total += this.selectedSnhot.price
      }

      // Add size price if a size is selected
      if (this.selectedSize) {
        total += this.selectedSize.price
      }

      // Add extra prices for selected extras
      if (this.extras.length > 0) {
        this.extras.forEach((extra) => {
          total += extra.price
        })
      }

      // Update the total price
      this.totalPrice = total
    },
    addToCart() {
      alert(`Added to cart:
        - Drink Type: ${this.selectedDrinkType || 'None'}
        - Shot: ${this.selectedShot ? this.selectedShot.name : 'None'}
        - Extras: ${this.extras.length > 0 ? this.extras.map((e) => e.name).join(', ') : 'None'}
        - Size: ${this.selectedSize ? this.selectedSize.name : 'None'}
        - Special Instructions: ${this.instructions || 'None'}
        - Total Price: ₱${this.totalPrice}
      `)
      // Emit close event to close the modal
      this.$emit('close')
    },
  },

  mounted() {
    document.body.classList.add('modal-open')
  },

  beforeUnmount() {
    document.body.classList.remove('modal-open')
  },
}
</script>

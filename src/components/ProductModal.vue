<template>
  <div class="iced-not-today">
    <div class="modal-overlay" @click.self="$emit('close')">
      <!-- Modal Content -->
      <div class="modal-content">
        <button class="close-btn" @click="$emit('close')">&times;</button>
        <img src="../assets/iced not today latte.png" alt="Iced not today latte" />
        <h2>Iced Not Today Latte</h2>
        <br />
        <strong><p>₱ 190</p></strong>
        <br />
        <p>Most ordered. Our own signature Spanish latte</p>

        <div class="option-group">
          <h3>Choice of Shot (Select 1)</h3>
          <label>
            <input
              type="radio"
              v-model="selectedShot"
              :value="{ name: 'Single Shot', price: 0 }"
              @change="UpdateTotal"
            />
            Single Shot (Free)
          </label>
          <label>
            <input
              type="radio"
              v-model="selectedShot"
              :value="{ name: 'Double Shot', price: 0 }"
              @change="UpdateTotal"
            />
            Double Shot (Free)
          </label>
          <label>
            <input
              type="radio"
              v-model="selectedShot"
              :value="{ name: 'Triple Shot', price: 80 }"
              @change="UpdateTotal"
            />
            Triple Shot (+ ₱80)
          </label>
        </div>

        <div class="option-group">
          <h3>Drink Extras</h3>
          <h4>Select up to 7 (optional)</h4>
          <br />
          <label>
            <input
              type="checkbox"
              :value="{ name: 'Stevia Drops', price: 80 }"
              v-model="extras"
              @change="UpdateTotal"
            />
            Stevia Drops (+ ₱80)
          </label>
          <label>
            <input
              type="checkbox"
              :value="{ name: 'Syrup', price: 40 }"
              v-model="extras"
              @change="UpdateTotal"
            />
            Syrup (+ ₱40)
          </label>
          <label>
            <input
              type="checkbox"
              :value="{ name: 'Sugar Syrup', price: 10 }"
              v-model="extras"
              @change="UpdateTotal"
            />
            Sugar Syrup (+ ₱10)
          </label>
          <label>
            <input
              type="checkbox"
              :value="{ name: 'Oatmilk', price: 60 }"
              v-model="extras"
              @change="UpdateTotal"
            />
            Oatmilk (+ ₱60)
          </label>
          <label>
            <input
              type="checkbox"
              :value="{ name: 'Sweertcream', price: 60 }"
              v-model="extras"
              @change="UpdateTotal"
            />
            Sweertcream (+ ₱60)
          </label>
          <label>
            <input
              type="checkbox"
              :value="{ name: 'Seasalt foam', price: 60 }"
              v-model="extras"
              @change="UpdateTotal"
            />
            Seasalt foam (+ ₱60)
          </label>
          <label>
            <input
              type="checkbox"
              :value="{ name: 'Half & Half', price: 60 }"
              v-model="extras"
              @change="UpdateTotal"
            />
            Half & Half (+ ₱60)
          </label>
        </div>

        <div class="option-group">
          <h3>Special Instructions</h3>
          <textarea
            v-model="instructions"
            placeholder="Write your Special Requests here"
            rows="4"
          ></textarea>
        </div>

        <div class="modal-footer">
          <div class="total-price">Total: ₱{{ totalPrice }}</div>
          <button class="add-to-cart" @click="addToCart" :disabled="!selectedShot">
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
  background: var(--overlay-color);
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
  display: block;
  align-self: flex-start;
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
  data() {
    return {
      isModalOpen: false,
      basePrice: 190,
      totalPrice: 190,
      selectedShot: null,
      extras: [],
      selectedSize: null,
      specialInstructions: '',
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    updateTotal() {
      let total = this.basePrice

      if (this.selectedShot) {
        total += this.selectedShot.price
      }

      if (this.selectedSize) {
        total += this.selectedSize.price
      }

      if (this.extras.length > 0) {
        this.extras.forEach((extra) => {
          total += extra.price
        })
      }

      this.totalPrice = total
    },
    addToCart() {
      alert(`Added to cart:
        - Shot: ${this.selectedShot ? this.selectedShot.name : 'None'}
        - Extras: ${this.extras.length > 0 ? this.extras.map((e) => e.name).join(', ') : 'None'}
        - Size: ${this.selectedSize ? this.selectedSize.name : 'None'}
        - Special Instructions: ${this.specialInstructions || 'None'}
        - Total Price: ₱${this.totalPrice}
      `)
      this.closeModal()
    },
  },
}
</script>

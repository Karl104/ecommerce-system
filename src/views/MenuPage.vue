<template>
  <div class="menu-all">
    <div class="menu-body">
      <header class="header-menu">
        <div class="head">
          <router-link to="/" class="logo">
            <img src="../assets/logo-lazy.png" alt="logo" class="logo" />
          </router-link>

          <ul class="navbar">
            <li><a href="#">Menu</a></li>
            <li><router-link :to="{ path: '/', hash: '#about' }">About</router-link></li>
            <!-- <li><a href="#">Member+</a></li> -->
          </ul>
        </div>

        <div class="main">
          <!-- Cart Icon -->
          <a href="#" class="icon cart">
            <img src="../assets/cart.png" alt="cart" />
          </a>

          <!-- Profile Icon -->
          <span class="navigation__group">
            <img
              class="profile"
              src="../assets/avatar.jpg"
              alt="User Picture"
              @click="toggleDropdown"
              ref="profile"
            />
          </span>

          <!-- Dropdown -->
          <div
            class="dropdown__wrapper"
            :class="{ hide: dropdownHidden, 'dropdown__wrapper--fade-in': !dropdownHidden }"
            ref="dropdown"
          >
            <!-- User Name -->
            <div class="dropdown__group">
              <div class="user-name">
                {{ userName || 'Guest' }}
              </div>
            </div>
            <hr class="divider" />

            <nav>
              <ul>
                <li>
                  <img src="../assets/profile.svg" alt="Profile" />
                  <a href="#" @click.prevent="goToProfile">Profile</a>
                </li>
                <hr class="divider" />
                <li v-if="!isGuest">
                  <img src="../assets/settings.svg" alt="Settings" />
                  <router-link to="/orders">Orders</router-link>
                </li>
              </ul>
              <hr class="divider" />
              <ul>
                <li>
                  <img src="../assets/premium.svg" alt="Premium" />
                  <a href="#" @click="handleMemberClick">Member+</a>
                </li>
                <hr class="divider" />
                <li style="color: #e3452f">
                  <img src="../assets/logout.svg" alt="Log Out" v-if="!isGuest" />
                  <a href="#" @click.prevent="isGuest ? goToLogin() : signOut()">
                    {{ isGuest ? 'Sign In' : 'Log Out' }}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <section class="menu-section">
        <div class="hot-coffees">
          <h2>Hot Coffee</h2>
          <div class="product-container">
            <div
              v-for="product in hotCoffees"
              :key="product.id"
              class="product-card"
              @click="openProductModal(product)"
            >
              <img :src="product.image" :alt="product.name" />
              <h3>{{ product.name }}</h3>
              <div>
                <p>₱ {{ product.price }}</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="menu-section">
        <div class="iced-coffees">
          <h2>Iced Coffee</h2>
          <div class="product-container">
            <div
              v-for="product in icedCoffees"
              :key="product.id"
              class="product-card"
              @click="openProductModal(product)"
            >
              <img :src="product.image" :alt="product.name" />
              <h3>{{ product.name }}</h3>
              <div>
                <p>₱ {{ product.price }}</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="menu-section">
        <div class="brunch">
          <h2>Brunch & Pasta</h2>
          <div class="product-container">
            <div
              v-for="product in brunches"
              :key="product.id"
              class="product-card"
              @click="openProductModal(product)"
            >
              <img :src="product.image" :alt="product.name" />
              <h3>{{ product.name }}</h3>
              <div>
                <p>₱ {{ product.price }}</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="menu-section">
        <div class="frappe">
          <h2>Frappe</h2>
          <div class="product-container">
            <div
              v-for="product in frappe"
              :key="product.id"
              class="product-card"
              @click="openProductModal(product)"
            >
              <img :src="product.image" :alt="product.name" />
              <h3>{{ product.name }}</h3>
              <div>
                <p>₱ {{ product.price }}</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="menu-section">
        <div class="tea">
          <h2>Teas</h2>
          <div class="product-container">
            <div
              v-for="product in tea"
              :key="product.id"
              class="product-card"
              @click="openProductModal(product)"
            >
              <img :src="product.image" :alt="product.name" />
              <h3>{{ product.name }}</h3>
              <div>
                <p>₱ {{ product.price }}</p>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <ProductModal v-if="showModal" :product="selectedProduct" @close="closeModal" />
</template>

<script>
import ProductModal from '../components/ProductModal.vue'

export default {
  components: {
    ProductModal,
  },
  data() {
    return {
      showModal: false,
      selectedProduct: null,
      dropdownHidden: true,
      userName: '',
      hotCoffees: [
        {
          id: 1,
          name: 'Hot Not Today Latte',
          price: 190,
          image: new URL('@/assets/Hot Not Today Latte.jpg', import.meta.url).href,
          description: 'Our own signature spanish latte',
          hasDrinkType: true,
          hasDrinkExtras: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },
        {
          id: 2,
          name: 'Hot Americano',
          price: 150,
          image: new URL('@/assets/Hot Americano.jpg', import.meta.url).href,
          description: 'Shot of espresso mixed with water',
          hasDrinkExtras: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },
        {
          id: 3,
          name: 'Hot Caramel Latte',
          price: 190,
          image: new URL('@/assets/50265348.jpg', import.meta.url).href,
          description: 'Espresso with steamed milk & house made caramel sauce',
          hasDrinkExtras: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },
        {
          id: 4,
          name: 'Hot Latte',
          price: 180,
          image: new URL('@/assets/50265348.jpg', import.meta.url).href,
          description: 'Espresso with steamed milk',
          hasDrinkExtras: true,
          hasSize: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },
        {
          id: 5,
          name: 'Cortado',
          price: 190,
          image: new URL('@/assets/Cortado.jpg', import.meta.url).href,
          description: 'Doubleshot of espresso with milk. 1:1 ratio',
          hasDrinkType: true,
          hasDrinkExtras: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },
      ],

      icedCoffees: [
        {
          id: 1,
          name: 'Iced Not Today Latte',
          price: 190,
          image: new URL('@/assets/iced not today latte.jpg', import.meta.url).href,
          description: 'Most ordered. Our own signature Spanish latte.',
          hasDrinkExtras: true,
          hasSize: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },
        {
          id: 2,
          name: 'Iced Affogato Latte',
          price: 210,
          image: new URL('@/assets/Iced Affogato Latte.jpg', import.meta.url).href,
          description: 'Espresso with milk & vanilla ice cream on top',
          hasDrinkExtras: true,
          hasSize: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },
        {
          id: 3,
          name: 'Iced Shaken Espresso',
          price: 250,
          image: new URL('@/assets/Iced Shaken Espresso.png', import.meta.url).href,
          description: 'Espresso with brown sugar, oat milk & cinnamon',
          hasDrinkExtras: true,
          hasSize: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },
        {
          id: 4,
          name: 'Iced Hojicha Latte',
          price: 230,
          image: new URL('@/assets/Iced-Hojicha-Latte.jpg', import.meta.url).href,
          description: 'S grade roasted matcha with milk.',
          hasDrinkExtras: true,
          hasSpecialInstructions: true,
        },
        {
          id: 5,
          name: 'Iced Orange Americano',
          price: 160,
          image: new URL('@/assets/iced-orange-americano.jpg', import.meta.url).href,
          description: 'Orange juice with double shot of espresso',
          hasDrinkExtras: true,
          hasSize: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },

        {
          id: 6,
          name: 'Einspanner',
          price: 230,
          image: new URL('@/assets/Einspanner.jpg', import.meta.url).href,
          description: 'Strong & creamy',
          hasDrinkExtras: true,
          hasDrinkType: true,
          hasShot: true,
          hasSpecialInstructions: true,
        },
      ],

      brunches: [
        {
          id: 1,
          name: 'Beef Salpicao',
          price: 240,
          image: new URL('@/assets/Beef Salpicao.jpg', import.meta.url).href,
          description:
            'For reference only: Savor the tender and flavorful Beef Salpicao, a satisfying meaty dish.',
          hasSpecialInstructions: true,
        },
        {
          id: 2,
          name: 'Bacon & Eggs',
          price: 210,
          image: new URL('@/assets/Bacon-Eggs.jpg', import.meta.url).href,
          description: 'For reference: Classic bacon and eggs breakfast.',
          hasSpecialInstructions: true,
        },
        {
          id: 3,
          name: 'Carbonara',
          price: 360,
          image: new URL('@/assets/Carbonara.jpg', import.meta.url).href,
          description:
            'Spaghetti pasta with bacon & a creamy sauce made from eggs, parmesan & black pepper',
          hasSpecialInstructions: true,
        },
        {
          id: 4,
          name: 'Omelette',
          price: 150,
          image: new URL('@/assets/Omelette.jpg', import.meta.url).href,
          description: 'For reference: A classic omelette.',
          hasSpecialInstructions: true,
        },
        {
          id: 5,
          name: 'Tuna Pesto',
          price: 340,
          image: new URL('@/assets/Tuna Pesto.jpg', import.meta.url).href,
          description:
            'A surprisingly delicious dinner made from pesto, pasta, onion & canned tuna in olive oil',
          hasSpecialInstructions: true,
        },

        {
          id: 6,
          name: 'Pork Tocino',
          price: 170,
          image: new URL('@/assets/Pork Tocino.jpg', import.meta.url).href,
          description:
            'Delight in the mouthwatering goodness of this Pork Tocino, a perfect blend of sweet and savory flavors.',
          hasSpecialInstructions: true,
        },
      ],

      frappe: [
        {
          id: 1,
          name: 'Vanilla Bean Frappe',
          price: 200,
          image: new URL('@/assets/Vanilla Bean Frappe.jpg', import.meta.url).href,
          description: 'Blended vanilla ice cream and vanilla syrup',
          hasSpecialInstructions: true,
          hasDrinkExtras: true,
        },
        {
          id: 2,
          name: 'Matcha Cream Frappe',
          price: 200,
          image: new URL('@/assets/Matcha Cream Frappe.jpg', import.meta.url).href,
          description: 'For reference: Classic bacon and eggs breakfast.',
          hasSpecialInstructions: true,
          hasDrinkExtras: true,
        },
        {
          id: 3,
          name: 'Espresso Frappe',
          price: 200,
          image: new URL('@/assets/Espresso-Frappe.jpg', import.meta.url).href,
          description: 'Blended espresso with milk.',
          hasDrinkExtras: true,
          hasSpecialInstructions: true,
        },
        {
          id: 4,
          name: 'Dark Chocolate Frappe',
          price: 200,
          image: new URL('@/assets/frappe.jpg', import.meta.url).href,
          description: 'Blended dark chocolate.',
          hasSpecialInstructions: true,
          hasDrinkExtras: true,
        },
      ],

      tea: [
        {
          id: 1,
          name: 'English Breakfast Tea',
          price: 140,
          image: new URL('@/assets/English Breakfast Tea.jpg', import.meta.url).href,
          description:
            'A black tea that boasts a full body with rich undertones and hints of malty, bitter, and mildly sweet notes.',
          hasDrinkType: true,
          hasSpecialInstructions: true,
        },
        {
          id: 2,
          name: 'Signature Tea',
          price: 140,
          image: new URL('@/assets/Earl Grey Tea.jpg', import.meta.url).href,
          description: 'Our specialty blend of tea. Earl grey tea with hibiscus.',
          hasDrinkType: true,
          hasSpecialInstructions: true,
        },
        {
          id: 3,
          name: 'Chamomile Tea',
          price: 140,
          image: new URL('@/assets/Chamomile Tea.jpg', import.meta.url).href,
          description: 'Chamomile has gentle apple notes and a honey-like sweetness.',
          hasDrinkType: true,
          hasSpecialInstructions: true,
        },
        {
          id: 4,
          name: 'Green Tea With Jasmine',
          price: 140,
          image: new URL('@/assets/Green Tea With Jasmine.jpg', import.meta.url).href,
          description:
            'Green tea has a light, delicate taste with fresh, vegetal and grassy notes. Its flavor can vary from sweet and smooth to slightly bitter and astringent.',
          hasDrinkType: true,
          hasSpecialInstructions: true,
        },
        {
          id: 5,
          name: 'Peppermint Tea',
          price: 140,
          image: new URL('@/assets/Peppermint Tea.jpg', import.meta.url).href,
          description:
            'For reference only: Fragrant tea infused with peppermint leaves, soothing and aromatic.',
          hasDrinkType: true,
          hasSpecialInstructions: true,
        },

        {
          id: 6,
          name: 'Fresh Honey & Ginger Tea',
          price: 220,
          image: new URL('@/assets/Fresh Honey & Ginger Tea.jpg', import.meta.url).href,
          description: 'Freshly crushed ginger mixed with lemon juice & honey.',
          hasDrinkType: true,
          hasSpecialInstructions: true,
        },
      ],
    }
  },
  computed: {
    isGuest() {
      return !this.userName // Determines if the user is a guest
    },
  },
  mounted() {
    // Fetch user information from localStorage after login or account creation
    const loggedInUser = JSON.parse(localStorage.getItem('currentUser')) || null
    if (loggedInUser && loggedInUser.userName) {
      this.userName = loggedInUser.userName // Use userName from logged-in user
    }
    document.addEventListener('click', this.handleOutsideClick)
  },
  beforeUnmount() {
    document.removeEventListener('click', this.handleOutsideClick)
  },
  methods: {
    toggleDropdown() {
      this.dropdownHidden = !this.dropdownHidden
    },
    handleOutsideClick(event) {
      const dropdownElement = this.$refs.dropdown
      const profileElement = this.$refs.profile
      if (
        dropdownElement &&
        !dropdownElement.contains(event.target) &&
        profileElement &&
        !profileElement.contains(event.target)
      ) {
        this.dropdownHidden = true
      }
    },
    goToLogin() {
      this.$router.push('/login')
    },
    goToProfile() {
      if (this.isGuest) {
        this.goToLogin()
      } else {
        this.$router.push('/profile')
      }
    },
    signOut() {
      localStorage.removeItem('currentUser') // Remove user data
      this.userName = '' // Reset userName
      alert('You have been signed out.')
      this.$router.push('/') // Redirect to the homepage
    },
    goToSignUp() {
      this.$router.push('/signup')
    },
    goToMenu() {
      this.$router.push('/menu')
    },
    openModal() {
      this.showModal = true
      document.body.classList.add('no-scroll') // Disable scrolling
    },
    closeModal() {
      this.showModal = false
      this.selectedProduct = null
      document.body.classList.remove('no-scroll') // Re-enable scrolling
    },
    openProductModal(product) {
      if (this.isGuest) {
        alert('You must be logged in to view product details.')
        this.goToLogin()
        return
      }
      this.selectedProduct = product
      this.openModal()
    },
    addToCart(product) {
      if (this.isGuest) {
        alert('You must be logged in to add items to the cart.')
        this.goToLogin()
        return
      }
      console.log(`Added ${product.name} to cart`)
      // Implement your cart functionality here
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

.menu-all {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  font-family: 'Kanit', sans-serif;
  overflow-x: hidden;
}

.no-scroll {
  overflow: hidden;
}

:root {
  --bg-color: #ffffff;
  --text-color: #000000;
  --main-color: #828282;
}

.menu-body {
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--text-color);
}

.header-menu {
  position: fixed;
  width: 100%;
  top: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 1%;
  background-color: #ffffff;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  /* transition: all 0.5s ease; */
}

.logo {
  display: flex;
  width: 85px;
  align-items: center;
  height: auto;
}

span {
  font-size: 25px;
  font-weight: 600;
  margin-right: 6px;
}
.navbar {
  display: flex;
}

.navbar a {
  color: var(--text-color);
  font-size: 1.1rem;
  font-weight: 500;
  padding: 5px 0;
  margin: 0px 30px;
  text-decoration: none;
}

.navbar a:hover {
  color: var(--main-color);
}

.main {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
}

.main .icon {
  cursor: pointer;
  width: 36px;
  height: 36px;
  transition: all 0.2s ease-in-out;
}

.main .icon:hover {
  transform: scale(1.1);
}

/* Profile Icon */
.profile {
  width: 50px;
  height: 50px;
  cursor: pointer;
  border-radius: 50%;
  border: 3px solid #f7f7f7;
  filter: drop-shadow(-20px 0 10px rgba(0, 0, 0, 0.1));
}

.profile:hover {
  transform: scale(1.05);
  transition: all 0.2s ease-in-out;
}

.head {
  display: flex;
  align-items: center;
  margin-left: 20px;
  text-transform: uppercase;
}

.dropdown__wrapper {
  width: 240px;
  top: 88px;
  right: 16px;
  position: absolute;
  border-radius: 8px;
  border: 1px solid var(--text-gray);
  display: flex;
  flex-direction: column;
  gap: 4px;
  animation: fadeOutAnimation ease-in-out 0.3s forwards;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 10px;
  visibility: hidden;
  opacity: 0;
}

.dropdown__wrapper--fade-in {
  visibility: visible;
  opacity: 1;
  animation: fadeInAnimation ease-in-out 0.3s forwards;
}

/* Dropdown Content */
.dropdown__group {
  padding: 12px;
}

.divider {
  width: 100%;
  height: 1px;
  background-color: var(--text-gray);
  margin: 8px 0;
}

/* Dropdown Navigation */
nav > ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  gap: 4px;
}

nav > ul > li {
  height: 40px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding-left: 8px;
  cursor: pointer;
  transition: background-color 0.3s;
}

nav > ul > li:hover {
  background-color: var(--main-color-light);
  color: var(--main-color);
  text-decoration: underline;
}

nav > ul > li img {
  height: 24px;
  width: 24px;
}

.dropdown__wrapper li {
  display: flex;
  align-items: center;
}

/* Animations */
@keyframes fadeInAnimation {
  0% {
    opacity: 0;
    visibility: hidden;
  }
  100% {
    opacity: 1;
    visibility: visible;
  }
}

@keyframes fadeOutAnimation {
  0% {
    opacity: 1;
    visibility: visible;
  }
  100% {
    opacity: 0;
    visibility: hidden;
  }
}

li {
  list-style-type: none;
}

.icon {
  margin-right: 30px;
  margin-left: 30px;
}

#check {
  display: none;
}

.checkbtn img {
  cursor: pointer;
  width: 30px;
}

.menu-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: auto;
  background-color: #c3ffc8;
  margin-top: 100px;
  min-height: 80vh;
}

.hot-coffees {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.hot-coffees h2 {
  font-size: 2.5rem;
  font-family: 'Kanit';
  color: #000000;
  margin: 0;
  padding: 20px 0;
  text-align: center;
}

.iced-coffees {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.iced-coffees h2 {
  font-size: 2.5rem;
  font-family: 'Kanit';
  color: #000000;
  margin: 0;
  padding: 20px 0;
  text-align: center;
}

.brunch {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.brunch h2 {
  font-size: 2.5rem;
  font-family: 'Kanit';
  color: #000000;
  margin: 0;
  padding: 20px 0;
  text-align: center;
}

.frappe {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.frappe h2 {
  font-size: 2.5rem;
  font-family: 'Kanit';
  color: #000000;
  margin: 0;
  padding: 20px 0;
  text-align: center;
}

.tea {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.tea h2 {
  font-size: 2.5rem;
  font-family: 'Kanit';
  color: #000000;
  margin: 0;
  padding: 20px 0;
  text-align: center;
}

.product-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  padding: 20px;
}

.product-card {
  max-width: 12rem;
  width: 90%;
  background-color: rgb(255, 255, 255);
  padding: 1rem;
  box-shadow: 0 5px 5px #000000;
  font-family: Arial, Helvetica, sans-serif;
  cursor: pointer;
  border-radius: 8px;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
}

.product-card:hover {
  background-color: lightgray;
}

.product-card img {
  max-width: 100%;
  border-radius: 8px;
}

.product-card h3 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
  font-weight: bold;
}

.product-card div {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-card p {
  font-size: 1rem;
  color: #000000;
  margin-bottom: 1rem;
}

.product-card button {
  background-color: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 25px;
  height: 25px;
  font-size: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card button:hover {
  color: #fff;
  background-color: rgb(179, 179, 179);
}

.product-card:hover button {
  color: #000;
  background-color: #fff;
}
</style>

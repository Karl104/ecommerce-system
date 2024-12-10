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
            <li><a href="#about">About</a></li>
            <li><a href="#">Member+</a></li>
          </ul>
        </div>

        <div class="main-menu">
          <button class="signIn" @click="goToLogin">Sign In</button>
          <button class="signUp" @click="goToSignUp">Sign Up</button>

          <a href="#" class="icon">
            <img src="../assets/cart.png" alt="cart" />
          </a>

          <input type="checkbox" id="check" />
          <label for="check" class="checkbtn">
            <img src="../assets/menu.png" alt="menu" style="width: 30px" />
          </label>
        </div>
      </header>

      <section class="menu-section">
        <div class="hot-coffees">
          <h2>Hot Coffee</h2>
          <div class="product-container">
            <div
              v-for="product in bestProducts"
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
</template>

<script>
// import ProductModal from '../components/ProductModal.vue'

// export default {
//   components: {
//     ProductModal,
//   },
//   data() {
//     return {
//       showModal: false,
//       selectedProduct: null,
//       icedNotTodayLatte: {
//         id: 4,
//         name: 'Iced Not Today Latte',
//         price: 190,
//         image: new URL('@/assets/iced not today latte.jpg', import.meta.url).href,
//         description: 'Most ordered. Our own signature Spanish latte.',
//         hasDrinkExtras: true,
//         hasSize: true,
//         hasShot: true,
//         hasSpecialInstructions: true,
//       },
//       bestProducts: [
//         {
//           id: 1,
//           name: 'Berry Matcha',
//           price: 240,
//           image: new URL('@/assets/berry-matcha.jpg', import.meta.url).href,
//           description: 'Ceremonial grade matcha latte with strawberry jam',
//           hasDrinkExtras: false,
//           hasSize: false,
//           hasShot: false,
//           hasSpecialInstructions: true,
//         },
//         {
//           id: 2,
//           name: 'Espresso Frappe',
//           price: 200,
//           image: new URL('@/assets/Espresso-Frappe.jpg', import.meta.url).href,
//           description: 'Blended espresso with milk.',
//           hasDrinkExtras: true,
//           hasSize: false,
//           hasShot: false,
//           hasSpecialInstructions: true,
//         },
//         {
//           id: 3,
//           name: 'Iced Hojicha Latte',
//           price: 230,
//           image: new URL('@/assets/Iced-Hojicha-Latte.jpg', import.meta.url).href,
//           description: 'S grade roasted matcha with milk.',
//           hasDrinkExtras: true,
//           hasSize: false,
//           hasShot: false,
//           hasSpecialInstructions: true,
//         },
//         {
//           id: 5,
//           name: 'Iced Orange Americano',
//           price: 160,
//           image: new URL('@/assets/iced-orange-americano.jpg', import.meta.url).href,
//           description: 'Orange juice with double shot of espresso',
//           hasDrinkExtras: true,
//           hasSize: true,
//           hasShot: true,
//           hasSpecialInstructions: true,
//         },
//       ],
//     }
//   },
//   methods: {
//     goToLogin() {
//       this.$router.push('/login')
//     },
//     goToSignUp() {
//       this.$router.push('/signup')
//     },
//     goToMenu() {
//       this.$router.push('/menu')
//     },
//     openModal() {
//       this.showModal = true
//       document.body.classList.add('no-scroll') // Disable scrolling
//     },
//     closeModal() {
//       this.showModal = false
//       this.selectedProduct = null
//       document.body.classList.remove('no-scroll') // Re-enable scrolling
//     },
//     openProductModal(product) {
//       this.selectedProduct = product
//       this.openModal()
//     },
//     addToCart(product) {
//       console.log(`Added ${product.name} to cart`)
//       // Implement your cart functionality
//     },
//   },
// }
</script>

<style>
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
}

.head {
  display: flex;
  align-items: center;
  margin-left: 20px;
  text-transform: uppercase;
}

.main-menu .signIn,
.main-menu .signUp {
  margin-right: 15px;
  padding: 8px 20px;
  font-size: 1rem;
  font-weight: 600;
  color: var(--text-color);
  border: 2px solid var(--text-color);
  border-radius: 5px;
  background-color: transparent;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.main-menu .signIn:hover,
.main-menu .signUp:hover {
  background-color: var(--text-color);
  color: #ffffff;
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

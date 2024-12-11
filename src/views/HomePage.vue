<template>
  <div class="all">
    <div class="body-home">
      <header class="header-home">
        <div class="head">
          <a href="#" class="logo">
            <img src="../assets/logo-lazy.png" alt=" logo" class="logo" />
          </a>

          <!-- <span><strong>The not Today Cafe</strong></span> -->

          <ul class="navbar">
            <li><router-link to="/menu">Menu</router-link></li>
            <li><a href="#about">About</a></li>
            <li><a href="#">Member+</a></li>
          </ul>
        </div>

        <div class="main">
          <!-- <a href="#" class="user" @click="goToLogin">Sign In</a> -->
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

      <section class="home-section">
        <div class="home-text">
          <h1>Beat the Laziness with Our Signature Iced Spanish Latte</h1>
          <p>The ultimate iced coffee to beat the "Not Today" blues and energize your day.</p>
          <button class="home-order" @click="openProductModal(icedNotTodayLatte)">Buy Now</button>
        </div>
        <div class="home-image-wrapper">
          <img src="../assets/heyy.png" alt="Iced Not Today" class="home-image" />
        </div>
      </section>

      <section id="about" class="about-section">
        <div class="about-image">
          <img src="../assets/view.jpg" alt="view" />
        </div>

        <div class="about-text">
          <h1>About Us</h1>
          <p>
            Ever get the feeling of not doing anything? Yes, we get it. We all have those days where
            laziness kicks in and you think, "If I can just have coffee, then I can do what I have
            to do today". That's what we call 'The Not Today' feeling, and that's where we came up
            with the tagline 'A Laziness Antidote.
          </p>
        </div>
      </section>
      <section class="menu-section">
        <div class="best-product">
          <h2>Best Selling Products</h2>
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
          <button class="view-btn" @click="goToMenu">
            View More <i class="bx bx-arrow-back bx-rotate-180"></i>
          </button>
        </div>
      </section>

      <section class="rating-section">
        <h1>Ratings</h1>
        <div class="rating-all">
          <div class="rating-container">
            <div class="ratings">
              <div class="user">
                <img src="../assets/noze.jpg" alt="" />
                <div class="user-info">
                  <h3>Noze</h3>
                  <div class="stars">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star-half"></i>
                    <i class="bx bx-star"></i>
                  </div>
                </div>
              </div>
              <p class="text">
                The ambiance is cozy and inviting, making it the perfect spot to catch up with
                friends or work on your laptop. Overall, this coffee shop should be on everyone's
                must-visit list.
              </p>
            </div>
          </div>

          <div class="rating-container">
            <div class="ratings">
              <div class="user">
                <img src="../assets/avatar.jpg" alt="" />
                <div class="user-info">
                  <h3>John Doe</h3>
                  <div class="member">
                    <h4>Member+</h4>
                  </div>
                  <div class="stars-member">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                </div>
              </div>
              <p class="text">
                My order always arrives on time, and the coffee is consistently great. Love how
                simple and efficient the whole system is—highly recommend!
              </p>
            </div>
          </div>

          <div class="rating-container">
            <div class="ratings">
              <div class="user">
                <img src="../assets/sophia.jpg" alt="" />
                <div class="user-info">
                  <h3>Pyang</h3>
                  <div class="member">
                    <h4>Member+</h4>
                  </div>
                  <div class="stars-member">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </div>
                </div>
              </div>
              <p class="text">Best Coffee Shop ever! Highly Recommend</p>
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
      icedNotTodayLatte: {
        id: 4,
        name: 'Iced Not Today Latte',
        price: 190,
        image: new URL('@/assets/iced not today latte.jpg', import.meta.url).href,
        description: 'Most ordered. Our own signature Spanish latte.',
        hasDrinkExtras: true,
        hasSize: true,
        hasShot: true,
        hasSpecialInstructions: true,
      },
      bestProducts: [
        {
          id: 1,
          name: 'Berry Matcha',
          price: 240,
          image: new URL('@/assets/berry-matcha.jpg', import.meta.url).href,
          description: 'Ceremonial grade matcha latte with strawberry jam',
          hasSpecialInstructions: true,
        },
        {
          id: 2,
          name: 'Espresso Frappe',
          price: 200,
          image: new URL('@/assets/Espresso-Frappe.jpg', import.meta.url).href,
          description: 'Blended espresso with milk.',
          hasDrinkExtras: true,
          hasSpecialInstructions: true,
        },
        {
          id: 3,
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
      ],
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
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
      this.selectedProduct = product
      this.openModal()
    },
    addToCart(product) {
      console.log(`Added ${product.name} to cart`)
      // Implement your cart functionality
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

.all {
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

.body-home {
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--text-color);
}

.header-home {
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

.main .signIn,
.main .signUp {
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

.main .signIn:hover,
.main .signUp:hover {
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

.home-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 75px;
  width: 100%;
  height: 100vh;
  background-color: #edffff;
}

.home-text {
  flex: 1;
  padding-right: 20px;
}

.home-text h1 {
  font-size: 3rem;
  font-family: 'Quicksand', sans-serif;
  color: #000000;
  margin-bottom: 20px;
}

.home-text p {
  font-size: 1.2rem;
  font-family: 'Kanit', sans-serif;
  color: rgb(46, 46, 46);
  margin-bottom: 30px;
}

.home-order {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  padding: 8px 20px;
  font-size: 1rem;
  font-weight: 600;
  color: rgb(0, 0, 0);
  border: 2px solid var(--text-color);
  border-radius: 5px;
  background-color: transparent;
  transition:
    background-color 0.3s,
    color 0.3s;
}

.home-order:hover {
  background-color: #000;
  color: #fff;
}

.home-order:active {
  background-color: #555;
}

.home-image-wrapper {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.home-image {
  max-width: 80%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.about-section {
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 99vh;
  background-color: #b8b8b8;
  margin-top: 100px; /*add spacing to top of page */
}

.about-text {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 40px;
  color: #232323;
}

.about-text p {
  font-size: 1.6rem;
  margin-bottom: 20px;
}

.about-text h1 {
  font-family: 'Kanit';
  font-size: 4.5rem;
  margin-bottom: 60px;
}

.about-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.about-image img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
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

.best-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.view-btn {
  background-color: transparent;
  border: 2px solid black;
  color: black;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
}

.view-btn:hover {
  background-color: black;
  color: white;
}

.best-product h2 {
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

.rating-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 75px;
  width: 100%;
  height: auto;
  background-color: #edffff;
  min-height: 70px;
  justify-content: center;
  margin-top: 100px;
  min-height: 90vh;
}

.rating-all {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
}

.rating-section h1 {
  font-size: 4rem;
  font-family: 'Kanit';
  color: #000000;
  margin: 0;
  padding: 0 0 20px 0;
  padding-bottom: 85px;
  text-align: center;
  width: 100%;
}

.rating-container {
  position: relative;
  perspective: 1000px;
}

.rating-container .ratings {
  border-radius: 5px;
  background: #fff;
  box-shadow: 0 5px 10px #3337;
  padding: 20px;
  width: 450px;
  margin: 10px;
  position: relative;
}

.rating-container .ratings img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 10px;
}

.rating-container .ratings .user {
  display: flex;
  align-items: center;
}

.rating-container .ratings .user .user-info h3 {
  color: #333;
  font-size: 20px;
}

.rating-container .ratings .user .user-info .member h4 {
  color: #b637ff;
  font-size: 13px;
}

.rating-container .ratings .user .user-info .stars {
  color: #000000;
  font-size: 15px;
}

.rating-container .ratings .user .user-info .stars-member {
  color: #000000;
  font-size: 15px;
  margin-top: 10px;
}

.rating-container .ratings .text {
  color: #333;
  font-size: 14px;
  padding-top: 15px;
  font-style: italic;
  /* text-transform: capitalize; */
}
</style>

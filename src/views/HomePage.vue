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
            <li><a href="#">Menu</a></li>
            <li><a href="#about">About</a></li>
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
          <p>
            Our signature Spanish Latte. The ultimate iced coffee to beat the "Not Today" blues and
            energize your day.
          </p>
          <button class="home-order" @click="openModal">Buy Now</button>
        </div>
        <div class="home-image-wrapper">
          <img src="../assets/heyy.png" alt="iced not today" class="home-image" />
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
      <section id="menu" class="menu-section">
        <div class="best-product">
          <h1>Best Selling Products</h1>
          <div class="product-container">
            <div class="product-card">
              <img src="../assets/berry-matcha.jpg" alt="berry-matcha" />
              <h4>Berry Matcha</h4>
              <div>
                <span> ₱ 240</span>
                <button>+</button>
              </div>
            </div>
            <div class="product-card">
              <img src="../assets/Espresso-Frappe.jpg" alt="espresso-frappe" />
              <h4>Espresso Frappe</h4>
              <div>
                <span> ₱ 200</span>
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <ProductModal v-if="showModal" @close="closeModal" />
</template>

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
  height: 90vh;
  background-color: #deffe1;
  margin-top: 100px;
  min-height: 90vh;
}

.best-product {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
}

.best-product h1 {
  font-size: 3rem;
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
}

.product-card img {
  max-width: 100%;
  border-radius: 8px;
}

.product-card h4 {
  font-size: 1.3rem;
  margin: 0.5rem 0;
  font-weight: bold;
}

.product-card div {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
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

.product-card:hover {
  color: #fff;
  background-color: lightslategray;
}

.product-card:hover button {
  color: #000;
  background-color: #fff;
}
</style>

<script>
import ProductModal from '../components/ProductModal.vue'

export default {
  components: {
    ProductModal,
  },
  data() {
    return {
      showModal: false,
    }
  },
  methods: {
    goToLogin() {
      this.$router.push('/login')
      console.log('Navigating to login page')
    },
    goToSignUp() {
      this.$router.push('/signup')
      console.log('Navigating to signup page')
    },

    openModal() {
      this.showModal = true
      console.log('Modal opened:', this.showModal)
    },
    closeModal() {
      this.showModal = false
      console.log('Modal closed:', this.showModal)
    },
  },
}
</script>

<template>
  <div class="login-body">
    <div class="container">
      <div class="logo-section">
        <img src="../assets/logo-lazy.png" alt="logo" class="logo-image" />
      </div>

      <div class="login-box">
        <div class="login-header">
          <header>Login</header>
        </div>
        <div class="input-box">
          <input
            type="text"
            class="input-field"
            placeholder="Username"
            autocomplete="off"
            required
            v-model="userName"
          />
        </div>

        <div class="input-box">
          <input
            type="password"
            class="input-field"
            placeholder="Password"
            autocomplete="off"
            required
            v-model="password"
          />
        </div>

        <div class="forgot">
          <section>
            <router-link to="/forget-password">Forgot your Password?</router-link>
          </section>
        </div>

        <div class="input-submit">
          <button class="submit-btn" id="submit" @click="handleLogin"></button>
          <label for="submit">Sign in</label>
        </div>

        <div class="sign-up-link">
          <p>Don't Have an Account? <router-link to="/signup">Sign Up</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
  data() {
    return {
      userName: '',
      password: '',
    }
  },
  methods: {
    handleLogin() {
      // Validate input fields
      if (!this.userName || !this.password) {
        alert('Both username and password are required.')
        return
      }

      // Retrieve existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || []

      // Find the user in the stored users array
      const loggedInUser = existingUsers.find(
        (user) => user.userName === this.userName && user.password === this.password,
      )

      if (loggedInUser) {
        // Login successful
        alert('Login successful!')
        localStorage.setItem('currentUser', JSON.stringify(loggedInUser)) // Save logged-in user
        this.$router.push('/') // Redirect to the homepage
      } else {
        // Login failed
        alert('Invalid username or password.')
      }
    },
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@300..700&display=swap');

* {
  margin: 0;
  padding: 0%;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.login-body {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #dcd9d9;
  padding: 20px;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1200px;
  gap: 20px;
}

.logo-section {
  flex: 1;
  text-align: center;
}

.logo-image {
  max-width: 130%;
  height: auto;
}

.login-box {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  height: 480px;
  padding: 30px;
}

.login-header header {
  color: #333;
  font-size: 40px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 40px;
}

.input-box .input-field {
  width: 100%;
  height: 60px;
  font-size: 15px;
  padding: 15px;
  margin-bottom: 15px;
  border-radius: 30px;
  border: none;
  box-shadow: 0px, 5px, 10px, 1px, rgba(0, 0, 0, 0.05);
  outline: none;
  transition: 0.3s;
}

::placeholder {
  font-weight: 500;
  color: #222;
}

.input-field:focus {
  width: 105%;
}

.forgot {
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
}

section {
  display: flex;
  align-items: center;
  font-size: 14px;
  color: #555;
}

#check {
  margin-right: 10px;
}

a:hover {
  text-decoration: underline;
}

section a {
  color: #555;
}

.input-submit {
  position: relative;
}

.submit-btn {
  width: 100%;
  height: 60px;
  background: #000;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: 0.3s;
}

.input-submit label {
  position: absolute;
  top: 45%;
  left: 50%;
  color: #fff;
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.submit-btn:hover {
  background: #222;
  transform: scale(1.05, 1);
}

.sign-up-link {
  text-align: center;
  font-size: 15px;
  margin-top: 20px;
}
.sign-up-link a {
  color: #353535;
  font-weight: 600;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
    align-items: center;
  }

  .logo-image {
    width: 200px;
    margin-bottom: 20px;
  }

  .login-box {
    width: 100%;
    max-width: 400px;
  }
}
</style>

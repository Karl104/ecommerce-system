<template>
  <div class="login-body">
    <div class="login-box">
      <div class="login-header">
        <header>Login</header>
      </div>
      <div class="input-box">
        <input type="text" class="input-field" placeholder="Email" autocomplete="off" required />
      </div>

      <div class="input-box">
        <input
          type="password"
          class="input-field"
          placeholder="Password"
          autocomplete="off"
          required
        />
      </div>

      <div class="forgot">
        <section>
          <a href="#">Forgot Password</a>
        </section>
      </div>

      <div class="input-submit">
        <button class="submit-btn" id="submit"></button>
        <label for="submit">Sign in</label>
      </div>

      <div class="sign-up-link">
        <p>Don't Have Account? <a href="#">Sign Up</a></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
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
  font-size: 30px;
  font-weight: 600;
}
</style>

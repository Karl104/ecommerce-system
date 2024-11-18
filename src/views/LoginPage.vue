<template>
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
      <label for="submit">Submit</label>
    </div>

    <div class="sign-up-link">
      <p>Don't Have Account? <a href="#">Sign Up</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginPage',
}
</script>

<style></style>

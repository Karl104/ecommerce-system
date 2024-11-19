<template>
  <div class="body-signup">
    <section class="container-signup">
      <header><h1>Create an Account</h1></header>
      <form action="#" class="form">
        <div class="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your Full Name" />
        </div>

        <div class="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter your Email Address" />

          <div class="column">
            <div class="input-box">
              <label>Phone Number</label>
              <input type="text" placeholder="Enter your Full Name" />
            </div>

            <div class="input-box">
              <label>Phone Number</label>
              <input type="text" placeholder="Type your Phone Number" />
            </div>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.body-signup {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #dcd9d9;
}

.container-signup {
  position: relative;
  max-width: 700px;
  width: 100%;
  background: #fff;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.container-signup header {
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  text-align: center;
}

.container-signup .form {
  margin-top: 30px;
}

.form .input-box {
  width: 100%;
  margin-top: 20px;
}

.input-box label {
  color: #333;
}

.form .input-box input {
  position: relative;
  height: 50px;
  width: 100%;
  outline: none;
  font-size: 1rem;
  color: #707070;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
}

.form .column {
  display: flex;
  column-gap: 15px;
}
/* Responsive */

@media screen and (max-width: 500) {
  .form .column {
    flex-wrap: wrap;
  }
}
</style>

<script></script>

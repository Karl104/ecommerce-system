<template>
  <div class="body-signup">
    <div class="boxLog">
      <button class="back-btn" @click="goToLogin">Back to Login</button>
    </div>
    <section class="container-signup">
      <header><h1>Create an Account</h1></header>
      <form action="#" class="form" @submit.prevent="handleSignUp">
        <div class="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter your Full Name" v-model="fullName" />
        </div>

        <div class="input-box">
          <label>User Name</label>
          <input type="text" placeholder="Enter your User Name" v-model="userName" />
        </div>

        <!-- <div class="input-box">
          <label>Address</label>
          <input type="text" placeholder="Enter your Address" v-model="address" />
        </div> -->

        <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter your Phone Number" v-model="phoneNumber" />
          </div>

          <div class="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Type your Birth Date" v-model="birthDate" />
          </div>
        </div>

        <div class="gender-box">
          <h3>Gender</h3>
          <div class="gender-option">
            <div class="gender">
              <input type="radio" id="check-male" name="gender" v-model="gender" value="male" />
              <label for="check-male">Male</label>
            </div>

            <div class="gender">
              <input
                type="radio"
                id="c heck-female"
                name="gender"
                v-model="gender"
                value="female"
              />
              <label for="check-female">Female</label>
            </div>
          </div>
        </div>

        <div class="input-box">
          <label>Email</label>
          <input type="text" placeholder="Email Address" v-model="email" />
        </div>

        <div class="input-box">
          <label>Password</label>
          <input type="password" placeholder="Password" v-model="password" />
        </div>

        <button type="submit">Create Account</button>
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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: #dcd9d9;
}

.boxLog {
  width: 100%;
  text-align: left;
  margin-bottom: 20px;
}

.back-btn {
  background-color: transparent;
  border: 2px solid black;
  color: black;
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-align: center;
}

.back-btn:hover {
  background-color: black;
  color: white;
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
  color: #000000;
  margin-top: 8px;
  border: 1px solid #ddd;
  border-radius: 6px;
  padding: 0 15px;
}

.form .gender-box {
  margin-top: 20px;
}

.gender-box h3 {
  color: #333;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 8px;
}

.form :where(.gender-option, .gender) {
  display: flex;
  align-items: center;
  column-gap: 30px;
}

.form .gender {
  column-gap: 5px;
}

.form :where(.gender, input, .gender label) {
  cursor: pointer;
}

.form .column {
  display: flex;
  column-gap: 15px;
}

.form button {
  height: 55px;
  width: 100%;
  color: #fff;
  font-size: 1rem;
  border: none;
  margin-top: 30px;
  cursor: pointer;
  border-radius: 6px;
  font-weight: 400;
  transition: all 0.2s ease;
  background-color: rgb(0, 0, 0);
}

.form button:hover {
  background-color: rgb(0, 0, 0);
  color: white;
}

@media screen and (max-width: 500px) {
  .form .column {
    flex-wrap: wrap;
  }
}
</style>

<script>
export default {
  data() {
    return {
      fullName: '',
      userName: '',
      address: '',
      phoneNumber: '',
      birthDate: '',
      gender: '',
      email: '',
      password: '',
    }
  },
  methods: {
    handleSignUp() {
      if (
        !this.fullName ||
        !this.userName ||
        !this.address ||
        !this.phoneNumber ||
        !this.birthDate ||
        !this.email ||
        !this.password
      ) {
        alert('Please fill in all the fields')
      } else {
        console.log('Signing up with:', {
          fullName: this.fullName,
          userName: this.userName,
          address: this.address,
          phoneNumber: this.phoneNumber,
          birthDate: this.birthDate,
          gender: this.gender,
          email: this.email,
          password: this.password,
        })

        // this.goToLogin() //kuan uncomment koni kung naa nay database
      }
    },
    goToLogin() {
      this.$router.push('/login')
      console.log('Navigating to login page')
    },
  },
}
</script>

  <template>
    <div class="forget-pass">
      <div class="boxLog">
        <button class="back-btn" @click="goToLogin">Back to Login</button>
      </div>

      <section class="container-forgetPass">
        <header><h1>Forgot Password</h1></header>

        <form @submit.prevent="resetPassword" class="form">
          <div class="form-group">
            <label for="current-password">Current Password</label>
            <input
              type="password"
              id="current-password"
              v-model="currentPassword"
              placeholder="Enter current password"
              required
            />
          </div>

          <div class="form-group">
            <label for="new-password">New Password</label>
            <input
              type="password"
              id="new-password"
              v-model="newPassword"
              placeholder="Enter new password"
              required
            />
          </div>

          <div class="form-group">
            <label for="confirm-password">Confirm New Password</label>
            <input
              type="password"
              id="confirm-password"
              v-model="confirmPassword"
              placeholder="Confirm new password"
              required
            />
          </div>

          <button type="submit" class="reset-btn">Reset Password</button>
        </form>
      </section>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
        errorMessage: '',
      }
    },
    methods: {
      goToLogin() {
        // Navigate back to the login page
        this.$router.push('/login')
      },
      resetPassword() {
        // Clear previous error message
        this.errorMessage = ''

        // Validate form input
        if (this.newPassword !== this.confirmPassword) {
          this.errorMessage = 'New password and confirm password do not match.'
          return
        }

        // Check password length (example validation)
        if (this.newPassword.length < 6) {
          this.errorMessage = 'New password must be at least 6 characters long.'
          return
        }

        // Mock API call or logic to reset the password
        alert(
          `Password reset successfully!\n- Current Password: ${this.currentPassword}\n- New Password: ${this.newPassword}`,
        )

        // Optionally navigate back to the login page
        this.$router.push('/login')
      },
    },
  }
  </script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Montserrat', sans-serif;
}

.forget-pass {
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
  margin-bottom: 80px;
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

.container-forgetPass {
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

.container-forgetPass header {
  font-size: 1.5rem;
  color: #333;
  font-weight: 500;
  text-align: center;
}

.container-forgetPass .form {
  margin-top: 30px;
}

.form .form-group {
  width: 100%;
  margin-top: 20px;
}

.form-group label {
  color: #333;
}

.form .form-group input {
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
</style>

<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
        <button type="submit">Login</button>
      </form>
      <p v-if="loginError" class="error-message">{{ loginError }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginAdmin',
    data() {
      return {
        username: '',
        password: '',
        loginError: ''
      };
    },
    methods: {
      login() {
        // Simulated login logic (replace with actual logic)
        if (this.username === 'admin' && this.password === 'password') {
          // Emit event to parent component (AdminPage.vue) indicating successful login
          this.$emit('login-successful');
        } else {
          this.loginError = 'Invalid username or password.';
        }
      }
    }
  }
  </script>
  
  <style scoped>
  .login-form {
    max-width: 300px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }
  
  .login-form h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .login-form label {
    display: block;
    margin-bottom: 10px;
  }
  
  .login-form input[type="text"],
  .login-form input[type="password"] {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
    border: 1px solid #ccc;
    border-radius: 3px;
  }
  
  .login-form button {
    width: 100%;
    padding: 10px;
    background-color: #3498db;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
  }
  
  .login-form button:hover {
    background-color: #2980b9;
  }
  
  .error-message {
    color: #e74c3c;
    margin-top: 10px;
  }
  </style>
  
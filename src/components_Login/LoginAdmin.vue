<template>
    <div class="login-form">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
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
        email: '',
        password: '',
        loginError: ''
      };
    },
    methods: {
      async login() {
        try {
          const response = await fetch('http://localhost:5000/api/auth/login', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              email: this.email,
              password: this.password
            })
          });
  
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || 'Login failed.');
          }
  
          const responseData = await response.json();
          const {token}  = responseData;
  
          localStorage.setItem('token', token);
          console.log('Token in localStorage:', localStorage.getItem('token')); // Debug
          console.log('Login war erfolgreich')

          this.$emit('login-successful');

        } catch (error) {
          console.error('Login error:', error.message);
          this.loginError = 'Invalid email or password.';
        }
      }
    }
  };
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
  
  .login-form input[type="email"], /* Änderung von "text" zu "email" für das E-Mail-Feld */
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
  
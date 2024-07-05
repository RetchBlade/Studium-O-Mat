<template>
  <div class="admin-container">
    <aside v-if="loggedIn && isAdmin" class="sidebar">
      <div class="sidebar-header">
        <h2 class="sidebar-title">{{ pageTitle }}</h2>
        <p v-if="loggedIn && isAdmin">{{ userEmail }}</p>
      </div>
      <nav>
        <ul>
          <li><router-link to="/admin/dashboard">Dashboard</router-link></li>
          <li><router-link to="/admin/users">Benutzer</router-link></li>
          <li><router-link to="/admin/fragen">Frage Pool</router-link></li>
        </ul>
        <button @click="logout" class="logout-button">Logout</button>
      </nav>
    </aside>
    <main v-if="loggedIn && isAdmin" class="main-content">
      <router-view></router-view>
    </main>
    <div v-else-if="loginFailed" class="login-failed-message">
      <p>Login fehlgeschlagen. Sie haben keine Admin-Rechte.</p>
      <button @click="retryLogin" class="retry-button">Erneut versuchen</button>
    </div>
    <div v-else-if="userNotFound" class="user-not-found-message">
      <p>Benutzer existiert nicht.</p>
      <button @click="retryLogin" class="retry-button">Erneut versuchen</button>
    </div>
    <div v-else class="login-wrapper">
      <login-admin @login-successful="handleSuccessfulLogin" @user-not-found="handleUserNotFound" />
    </div>
  </div>
</template>

<script>
const { jwtDecode } = require('jwt-decode');
import LoginAdmin from '../components_Login/LoginAdmin.vue';

export default {
  name: 'AdminPage',
  data() {
    return {
      loggedIn: false,
      isAdmin: false,
      userEmail: '',
      pageTitle: 'Admin Page',
      loginFailed: false,
      userNotFound: false
    };
  },
  components: {
    LoginAdmin
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem('token'); 
      console.log('Token nehmen:', localStorage.getItem('token')); // Debug
      if (token) {
        console.log('Token vorhanden');
        try {
          const decoded = jwtDecode(token);
          console.log('Decoded token:', decoded); // Zum Debuggen
          this.loggedIn = true;
          this.isAdmin = decoded.isAdmin;
          this.userEmail = decoded.email;
          if (!this.isAdmin) {
            this.loginFailed = true;
            this.logout();
          }
        } catch (error) {
          console.error('Error decoding token:', error);
          this.logout(); // Token entfernen und Status zurücksetzen
        }
      } else {
        this.logout();
      }
    },
    handleSuccessfulLogin() {
      console.log('handleSuccessfulLogin called'); // Zum Debuggen
      this.checkLoginStatus();
      if (this.isAdmin) {
        this.$router.replace('/admin/dashboard'); // Weiterleitung nach erfolgreichem Login
      }
    },
    handleUserNotFound() {
      console.log('handleUserNotFound called'); // Zum Debuggen
      this.userNotFound = true;
    },
    logout() {
      this.loggedIn = false;
      this.isAdmin = false;
      this.userEmail = '';
      localStorage.removeItem('token');
    },
    retryLogin() {
      this.loginFailed = false;
      this.userNotFound = false;
      this.$router.replace('/admin'); // Optional: Redirect to login page or reload the component
    }
  }
};
</script>

<style scoped>
.admin-container {
  display: flex;
  height: 100vh;
}

.sidebar {
  width: 240px;
  background-color: #34495e;
  color: #ecf0f1;
  padding-top: 20px;
  height: 100vh;
  position: fixed;
  overflow-y: auto;
}

.sidebar-header {
  text-align: center;
  margin-bottom: 20px;
}

.sidebar-title {
  font-size: 1.5rem;
}

.sidebar nav ul {
  list-style: none;
  padding: 0;
}

.sidebar nav ul li {
  margin-bottom: 10px;
}

.sidebar nav ul li a {
  color: #ecf0f1;
  text-decoration: none;
  display: block;
  padding: 10px;
  transition: background-color 0.3s ease;
}

.sidebar nav ul li a:hover {
  background-color: #2c3e50;
}

.main-content {
  margin-left: 260px;
  padding: 20px;
  width: 100%;
}

.logout-button {
  width: 100%;
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 20px;
}

.logout-button:hover {
  background-color: #c0392b;
}

.login-failed-message, .user-not-found-message, .login-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.login-failed-message, .user-not-found-message {
  background-color: #e74c3c;
  color: white;
  border-radius: 3px;
  text-align: center;
}

.retry-button {
  padding: 10px;
  background-color: #3498db;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin-top: 10px;
}

.retry-button:hover {
  background-color: #2980b9;
}
</style>

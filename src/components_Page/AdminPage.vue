<template>
  <div class="admin-container">
    <aside v-if="loggedIn" class="sidebar">
      <div class="sidebar-header">
        <h2 class="sidebar-title">{{ pageTitle }}</h2>
        <p v-if="loggedIn">{{ userEmail }}</p>
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
    <main v-if="loggedIn" class="main-content">
      <router-view></router-view>
    </main>
    <login-admin v-else @login-successful="handleSuccessfulLogin" />
  </div>
</template>

<script>
import jwt_decode from 'jwt-decode';
import LoginAdmin from '../components_Login/LoginAdmin.vue';

export default {
  name: 'AdminPage',
  data() {
    return {
      loggedIn: false,
      isAdmin: false,
      userEmail: '',
      pageTitle: 'Admin Page'
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
        console.log('Token vorhanden')
        try {
          const decoded = jwt_decode(token);
          console.log('Decoded token:', decoded); // Zum Debuggen
            this.loggedIn = true;
            this.isAdmin = true;
            this.userEmail = decoded.email;
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
      this.$router.replace('/admin/dashboard');   // Weiterleitung nach erfolgreichem Login
    },
    logout() {
      this.loggedIn = false;
      this.isAdmin = false;
      this.userEmail = '';
      localStorage.removeItem('token');
    }
  }
};
</script>

<style scoped>
.admin-container {
  display: flex;
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
</style>

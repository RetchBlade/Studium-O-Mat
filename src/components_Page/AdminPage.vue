<template>
  <div class="admin-container">
    <SidebarComponent
      v-if="loggedIn && isAdmin"
      :loggedIn="loggedIn"
      :isAdmin="isAdmin"
      :userEmail="userEmail"
      :pageTitle="pageTitle"
      @logout="logout"
    />
    <main v-if="loggedIn && isAdmin" class="main-content">
      <router-view></router-view>
    </main>
    <div v-else-if="loginFailed" class="login-failed-message">
      <p>Login fehlgeschlagen. Sie haben keine Admin-Rechte.</p>
      <button @click="retryLogin" class="btn btn-primary retry-button">Erneut versuchen</button>
    </div>
    <div v-else-if="userNotFound" class="user-not-found-message">
      <p>Benutzer existiert nicht.</p>
      <button @click="retryLogin" class="btn btn-primary retry-button">Erneut versuchen</button>
    </div>
    <div v-else class="login-wrapper">
      <login-admin @login-successful="handleSuccessfulLogin" @user-not-found="handleUserNotFound" />
    </div>
  </div>
</template>

<script>
import SidebarComponent from '../components_admin/SidebarComponent.vue';
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
    SidebarComponent,
    LoginAdmin
  },
  created() {
    this.checkLoginStatus();
  },
  methods: {
    checkLoginStatus() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          const decoded = jwtDecode(token);
          this.loggedIn = true;
          this.isAdmin = decoded.isAdmin;
          this.userEmail = decoded.email;
          if (!this.isAdmin) {
            this.loginFailed = true;
            this.logout();
          }
        } catch (error) {
          console.error('Error decoding token:', error);
          this.logout();
        }
      } else {
        this.logout();
      }
    },
    handleSuccessfulLogin() {
      this.checkLoginStatus();
      if (this.isAdmin) {
        this.$router.replace('/admin/dashboard');
      }
    },
    handleUserNotFound() {
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

.main-content {
  margin-left: 260px;
  padding: 20px;
  width: 100%;
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
  margin-top: 10px;
}
</style>

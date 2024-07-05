<template>
    <aside class="sidebar">
      <div class="sidebar-header">
        <h2 class="sidebar-title">{{ pageTitle }}</h2>
        <p v-if="loggedIn && isAdmin">{{ userEmail }}</p>
      </div>
      <nav>
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/dashboard">Dashboard</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/users">Benutzer</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/admin/fragen">Frage Pool</router-link>
          </li>
        </ul>
        <button @click="logout" class="btn btn-danger btn-block logout-button">Logout</button>
      </nav>
    </aside>
  </template>
  
  <script>
  export default {
    name: 'SidebarComponent',
    props: {
      loggedIn: Boolean,
      isAdmin: Boolean,
      userEmail: String,
      pageTitle: String
    },
    methods: {
      logout() {
        this.$emit('logout');
      }
    }
  };
  </script>
  
  <style scoped>
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
  
  .nav-link {
    color: #ecf0f1;
    text-decoration: none;
    padding: 10px;
    transition: background-color 0.3s ease;
  }
  
  .nav-link:hover {
    background-color: #2c3e50;
  }
  
  .logout-button {
    margin-top: 20px;
  }
  </style>
  
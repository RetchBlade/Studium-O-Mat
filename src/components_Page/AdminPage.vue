<template>
    <div class="admin-container">
      <aside class="sidebar">
        <nav>
          <ul>
            <li>
              <router-link to="/admin/dashboard">Dashboard</router-link>
            </li>
            <li>
              <router-link to="/admin/users">Users</router-link>
            </li>
            <li>
              <router-link to="/admin/settings">Settings</router-link>
            </li>
          </ul>
        </nav>
      </aside>
      <main class="main-content">
        <router-view></router-view>
      </main>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AdminPage',
  }
  </script>
  
  <style scoped>
  .admin-container {
    display: flex;
  }
  
  .sidebar {
    width: 200px;
    background-color: #2c3e50;
    color: white;
    padding: 20px;
    height: 100vh;
    position: fixed;
  }
  
  .sidebar nav ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar nav ul li {
    margin-bottom: 10px;
  }
  
  .sidebar nav ul li a {
    color: white;
    text-decoration: none;
  }
  
  .main-content {
    margin-left: 220px;
    padding: 20px;
    width: 100%;
  }
  </style>
  
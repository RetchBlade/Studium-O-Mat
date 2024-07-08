<template>
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <li class="navbar-brand">
          <img src="@/assets/logo_ohneHintergrund.png" alt="Logo" class="logo">
          
          <!-- Anpassung für den Studium-O-Mat Link -->
          <span class="navbar-brand-text"><RouterLink to="/" class="nav-link study-link">Studium-O-Mat</RouterLink></span>
        </li>
        <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="['collapse', 'navbar-collapse', { 'show': isMenuOpen }]" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">Über uns</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/studiumOMat" class="nav-link">Studium-O-Mat</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/MajorsPage" class="nav-link">Studiengänge</RouterLink>
            </li>
          </ul>
          <div class="user_option ml-auto"> <!-- ml-auto für rechtsbündige Ausrichtung des Logins -->
            <button class="login-button" @mouseover="startMotion" @mouseleave="endMotion" @click="openLoginModal">
              <span class="login-text">Login</span>
              <div class="motion-line" v-show="motionActive"></div>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      motionActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
      document.body.classList.toggle('nav-open', this.isMenuOpen); 
    },
    openLoginModal() {
      this.$emit('open-login-modal');
    },
    startMotion() {
      this.motionActive = true;
    },
    endMotion() {
      this.motionActive = false;
    },
  },
};
</script>

<style scoped>
.header_section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  overflow-x: hidden;
  background: linear-gradient(to right, #34396E, #726FB2);
  padding: 10px 0;
}

.navbar-brand {
  display: flex;
  align-items: center;
}

.logo {
  width: 50px;
  margin-right: 10px;
}

.navbar-brand .navbar-brand-text {
  font-weight: bold;
  font-size: 24px;
  color: #ffffff; /* Farbe für den Text neben dem Logo */
}

.custom_nav-container.navbar-expand-lg .navbar-nav .nav-item .nav-link {
  padding: 10px 15px;
  color: #ffffff;
  text-align: center;
  transition: color 0.3s ease-in-out;
}

.custom_nav-container.navbar-expand-lg .navbar-nav .nav-item .nav-link:hover {
  color: #9d97d8; /* Farbwechsel bei Hover */
}

/* Anpassung für den Studium-O-Mat Link */
.custom_nav-container.navbar-expand-lg .navbar-nav .nav-item .study-link {
  color: #ffffff; /* Farbe Weiß für normalen Zustand */
}

.custom_nav-container.navbar-expand-lg .navbar-nav .nav-item .study-link:hover {
  color: #9d97d8; /* Farbwechsel bei Hover, wie die anderen Links */
}

.login-button {
  background-color: #4d4787;
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s, color 0.3s ease-in-out;
}

.login-button:hover {
  background-color: #766faf;
  color: white;
}

.motion-line {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: #4d4787;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

.motionActive {
  transform: scaleX(1);
}

.navbar-toggler {
  border: none;
  background-color: transparent;
  color: #ffffff;
}

.navbar-toggler:focus,
.navbar-toggler:hover {
  outline: none;
  color: #4d4787;
}

.navbar-toggler-icon {
  background-color: #ffffff;
  width: 25px;
  height: 2px;
  display: inline-block;
  position: relative;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: "";
  width: 100%;
  height: 100%;
  background-color: inherit;
  position: absolute;
  left: 0;
  transition: transform 0.2s ease;
}

.navbar-toggler-icon::before {
  top: -8px;
}

.navbar-toggler-icon::after {
  bottom: -8px;
}

.navbar-toggler.open .navbar-toggler-icon::before {
  transform: translateY(8px) rotate(-45deg);
}

.navbar-toggler.open .navbar-toggler-icon::after {
  transform: translateY(-8px) rotate(45deg);
}

@media (max-width: 1000px) {
  .navbar-collapse {
    display: none;
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    max-height: calc(100vh - 70px);
    background-color: #d3cbf7;
    transition: transform 0.3s ease-in-out;
    z-index: 9999;
    transform: translateY(-100%);
    overflow-y: auto;
  }

  .navbar-collapse.show {
    display: block;
    transform: translateY(0);
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-top: 20px;
  }

  .nav-item {
    margin: 10px 0;
  }

  .user_option {
    display: flex;
    align-items: center;
  }

  .login-button {
    margin: auto;
  }

  .custom_nav-container .navbar-toggler {
    display: block;
  }
}

body.nav-open {
  overflow: hidden;
}
</style>

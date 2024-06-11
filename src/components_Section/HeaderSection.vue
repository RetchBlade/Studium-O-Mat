<template>
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand">
          <img src="@/assets/logo_ohneHintergrund.png" alt="" />
          <span>Studium-O-Mat</span>
        </a>
        <button class="navbar-toggler" type="button" @click="toggleMenu" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="['collapse', 'navbar-collapse', { 'show': isMenuOpen }]" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">Über uns</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/studiumOMat" class="nav-link">Studium-O-Mat</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/category" class="nav-link">Kategorien</RouterLink>
            </li>
          </ul>
          <div class="user_option">
            <button class="login-button" @mouseover="startMotion" @mouseleave="endMotion" @click="openLoginModal">
              <span class="login-text">Login</span>
              <div class="motion-line" v-show="motionActive"></div>
            </button>
          </div>
        </div>
        <div>
          <div class="custom_menu-btn">
            <button @click="toggleMenu">
              <span class="s-1"></span>
              <span class="s-2"></span>
              <span class="s-3"></span>
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
      document.body.classList.toggle('nav-open', this.isMenuOpen); // Menü açıkken sayfa kaydırmasını engelle
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
.login-button:hover {
  background-color: #726FB2;
}

.active {
  color: white;
}

.hero_area {
  height: calc(100vh - 30px);
  background: linear-gradient(to right, #1a2e35 55%, #1cbbb4 55%);
  display: flex;
  flex-direction: column;
  position: relative;
}

.sub_page .hero_area {
  height: auto;
  background: none;
  background-color: #1a2e35;
}

.header_section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999;
  overflow-x: hidden;
  background-color: #34396E;
}

.header_section .container-fluid {
  padding-right: 25px;
  padding-left: 25px;
}

.header_section .nav_container {
  margin: 0 auto;
}

.header_section .user_option {
  display: flex;
  align-items: center;
  margin-left: auto; /* Butonu sağ tarafa yerleştir */
}

.header_section .user_option a {
  display: flex;
  color: #ffffff;
  align-items: center;
}

.header_section .user_option a img {
  min-width: 20px;
  height: 20px;
  margin-right: 5px;
}

.custom_nav-container.navbar-expand-lg .navbar-nav .nav-item .nav-link {
  padding: 10px 15px;
  color: #ffffff;
  text-align: center;
}

a,
a:hover,
a:focus {
  text-decoration: none;
}

a:hover,
a:focus {
  color: initial;
}

.btn,
.btn:focus {
  outline: none !important;
  box-shadow: none;
}

.custom_nav-container form {
  padding-top: 7px;
}

.navbar-brand {
  margin-right: 5%;
  display: flex;
  align-items: center;
}

.navbar-brand img {
  width: 35px;
  margin-right: 5px;
}

.navbar-brand span {
  font-weight: bold;
  color: #ffffff;
  font-size: 24px;
}

.custom_nav-container {
  z-index: 99999;
  padding: 0;
  height: 70px;
}

.custom_nav-container .navbar-toggler {
  outline: none;
}

.custom_nav-container .navbar-toggler .navbar-toggler-icon {
  background-image: url('@/assets/menu.png');
  background-size: 30px;
  width: 32px;
  height: 32px;
}

.lg_toggl-btn {
  background-color: transparent;
  border: none;
  outline: none;
  width: 56px;
  height: 40px;
  cursor: pointer;
}

.lg_toggl-btn:focus {
  outline: none;
}

.login-button {
  background-color: #726FB2;
  color: white;
  border: none;
  padding: 0.5rem 2rem;
  border-radius: 25px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  overflow: hidden;
  transition: color 0.3s ease-in-out;
}

.nav-link {
  color: #ffffff !important;
  text-decoration: none;
}

.login-button:hover {
  color: #4d4787;
}

.login-text {
  position: relative;
  z-index: 1;
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

#navbarSupportedContent {
  transform: translateX(100vw);
  opacity: 0;
  transition: all 0.3s ease-in;
  justify-content: space-between;
  align-items: center;
}

#navbarSupportedContent.show {
  transform: translateX(0);
  opacity: 1;
}

.custom_menu-btn button {
  margin-top: 12px;
  outline: none;
  border: none;
  background-color: transparent;
}

.custom_menu-btn button span {
  display: block;
  width: 34px;
  height: 4px;
  background-color: #fff;
  margin: 7px 0;
  transition: all 0.3s;
  border-radius: 10px;
}

.custom_menu-btn .s-2 {
  transition: all 0.1s;
  width: 17px;
  margin-left: auto;
}

.menu_btn-style button .s-1 {
  transform: rotate(45deg) translate(8px, 8px);
}

.menu_btn-style button .s-2 {
  transform: translateX(100px);
}

.menu_btn-style button .s-3 {
  transform: rotate(-45deg) translate(8px, -8px);
}

.navbar-brand img {
  width: auto;
  height: 60px;
  margin-right: 10px;
}

@media (max-width: 1000px) {
  .navbar-collapse {
    display: none; 
    position: fixed;
    top: 70px;
    left: 0;
    width: 100%;
    max-height: calc(100vh - 70px); 
    background-color: #d3cbf7;;
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

}



body.nav-open {
  overflow: hidden; 
}
</style>
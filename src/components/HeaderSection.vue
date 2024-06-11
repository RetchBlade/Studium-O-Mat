<template>
  <header class="header_section">
    <div class="container-fluid">
      <nav class="navbar navbar-expand-lg custom_nav-container">
        <a class="navbar-brand">
          <img src="@/assets/logo_ohneHintergrund.png" alt="" />
          <span>Studium-O-Mat</span>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item active">
              <RouterLink to="/" class="nav-link">Home</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/about" class="nav-link">Über uns</RouterLink>
            </li>
            <li class="nav-item">
              <RouterLink to="/work" class="nav-link">Arbeit</RouterLink>
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
            <button>
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
      nav: "#navbarSupportedContent",
      btn: ".custom_menu-btn"
    };
  },
  mounted() {
    document.querySelector(this.btn).addEventListener('click', this.toggleMenu);
  },
  methods: {
    toggleMenu(event) {
      event.preventDefault();
      document.querySelector(this.nav).classList.toggle("lg_nav-toggle");
      document.querySelector(this.btn).classList.toggle("menu_btn-style");
    },
    openLoginModal() {
        this.$emit('open-login-modal')
      }
  }
  
};
</script>

<style scoped>
.login-button:hover {
  background-color: #726FB2;
}

/* Aktuelle Seite wird im Navbar angesprochen*/
.active{
  color: white;
}

.hero_area {
  height: calc(100vh - 30px);
  background: -webkit-gradient(linear, left top, right top, color-stop(55%, #1a2e35), color-stop(55%, #1cbbb4));
  background: linear-gradient(to right, #1a2e35 55%, #1cbbb4 55%);
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  position: relative;
}

.sub_page .hero_area {
  height: auto;
  background: none;
  background-color: #1a2e35;
}

.hero_area.sub_pages {
  height: auto;
}

.header_section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9999; /* Stellt sicher, dass die Navbar über dem Inhalt liegt */
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
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

.header_section .user_option a {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  color: #ffffff;
  -webkit-box-align: center;
      -ms-flex-align: center;
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
  -webkit-box-shadow: none;
          box-shadow: none;
}

.custom_nav-container .nav_search-btn {
  background-image: url('@/assets/search-icon.png');
  background-size: 17px;
  background-repeat: no-repeat;
  background-position-y: 7px;
  width: 35px;
  height: 35px;
  padding: 0;
  border: none;
}

.custom_nav-container form {
  padding-top: 7px;
}

.navbar-brand {
  margin-right: 5%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
      -ms-flex-align: center;
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
  
}.login-button {
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
  color: #4d4787; /* Ändere die Textfarbe beim Hover-Effekt */
}

.login-text {
  position: relative;
  z-index: 1; /* Stelle sicher, dass der Text über dem Linien-Element liegt */
}

.motion-line {
  position: absolute;
  left: 0;
  bottom: 0;
  height: 2px;
  width: 100%;
  background-color: #4d4787; /* Farbe des Linien-Elements */
  transform: scaleX(0); /* Initial versteckt */
  transition: transform 0.3s ease-in-out;
}

.motionActive {
  transform: scaleX(1); /* Linie sichtbar machen */
}





#navbarSupportedContent {
  -webkit-transform: translateX(100vw);
          transform: translateX(100vw);
  opacity: 0;
  -webkit-transition: all 0.3s ease-in;
  transition: all 0.3s ease-in;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}

#navbarSupportedContent.lg_nav-toggle {
  -webkit-transform: translateX(0);
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
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border-radius: 10px;
}

.custom_menu-btn .s-2 {
  -webkit-transition: all 0.1s;
  transition: all 0.1s;
  width: 17px;
  margin-left: auto;
}

.menu_btn-style button .s-1 {
  -webkit-transform: rotate(45deg) translate(8px, 8px);
          transform: rotate(45deg) translate(8px, 8px);
}

.menu_btn-style button .s-2 {
  -webkit-transform: translateX(100px);
          transform: translateX(100px);
}

.menu_btn-style button .s-3 {
  -webkit-transform: rotate(-45deg) translate(8px, -8px);
          transform: rotate(-45deg) translate(8px, -8px);
}

.navbar-brand img {
  width: auto;
  height: 60px; /* Hier kannst du die Höhe des Logos anpassen */
  margin-right: 10px;
}

</style>

<template>
  <div id="app">
    <template v-if="!isAdminRoute">
      <!-- HeaderSection-Komponente wird gerendert, und beim Auslösen des Ereignisses 'open-login-modal' wird showLoginModal auf true gesetzt -->
      <HeaderSection @open-login-modal="showLoginModal = true"/>
      
      <!-- Die LoginModal-Komponente wird gerendert und ist sichtbar, wenn showLoginModal true ist. Durch das Schließen des Modals wird showLoginModal auf false gesetzt -->
      <LoginModal :isVisible="showLoginModal" @close-modal="showLoginModal = false" />
    </template>

    <!-- Die router-view-Komponente wird immer gerendert, um dynamisch verschiedene Ansichten basierend auf der aktuellen URL zu laden -->
    <router-view></router-view>

    <template v-if="!isAdminRoute">
      <!-- InfoSection-Komponente wird gerendert -->
      <InfoSection/>
      
      <!-- FooterSection-Komponente wird gerendert -->
      <FooterSection/>
    </template>
  </div>
</template>

<script>
import HeaderSection from '@/components_Section/HeaderSection.vue' // Importiere HeaderSection-Komponente
import LoginModal from '@/components_Login/LoginModal.vue' // Importiere LoginModal-Komponente
import InfoSection from '@/components_Section/InfoSection.vue' // Importiere InfoSection-Komponente
import FooterSection from '@/components_Section/FooterSection.vue' // Importiere FooterSection-Komponente

export default {
  name: 'App', // Name der Hauptkomponente

  components: { // Registriere die importierten Komponenten
      HeaderSection,
      LoginModal,
      InfoSection,
      FooterSection,
  },

  data() { // Datenobjekt für die Hauptkomponente
      return {
          showLoginModal: false, // Initial ist das Login-Modal nicht sichtbar
      }
  },

  computed: {
    isAdminRoute() {
      // Überprüfe, ob der aktuelle Pfad mit "/admin" beginnt
      return this.$route.path.startsWith('/admin');
    }
  }
}
</script>

<style>
  @import '../public/css/bootstrap.css';
  @import '../public/css/responsive.css';
  @import '../public/css/style.scss';

  html {
      scroll-behavior: smooth;
    }

  body {
  font-family: 'Poppins', sans-serif;
  color: #0c0c0c;
  background-color: #ffffff;
}

.layout_padding {
  padding-top: 90px;
  padding-bottom: 90px;
}

.layout_padding2 {
  padding: 45px 0;
}

.layout_padding2-top {
  padding-top: 45px;
  padding-bottom: 45px;
}

.layout_padding2-bottom {
  padding-bottom: 45px;
}

.layout_padding-top {
  padding-top: 90px;
}

.layout_padding-bottom {
  padding-bottom: 90px;
}

.heading_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}

.heading_container h2 {
  font-weight: bold;
  text-transform: uppercase;
}
</style>

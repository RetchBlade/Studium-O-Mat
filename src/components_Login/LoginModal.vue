<template>
  <!-- Modales Popup -->
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <!-- Schließen-Schaltfläche -->
      <span class="close-button" @click="closeModal">&times;</span>
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <!-- Bild -->
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid" alt="Beispielfoto">
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <!-- Login-Formular -->
            <form v-if="!isRegistering" @submit.prevent="login">
              <!-- Email-Eingabefeld -->
              <div class="form-outline mb-4">
                <label class="form-label">Email Adresse</label>
                <input type="email" v-model="username" class="form-control form-control-lg"
                  placeholder="Adresse eingeben" required />
              </div>
              <!-- Passwort-Eingabefeld -->
              <div class="form-outline mb-3">               
                <label class="form-label">Passwort</label>
                <input type="password" v-model="password" class="form-control form-control-lg"
                  placeholder="Passwort" required />
              </div>
              <!-- Checkbox für "Benutzerdaten merken" -->
              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <input class="form-check-input me-2" type="checkbox" v-model="rememberMe" />
                  <label class="form-check-label">
                    Benutzerdaten merken
                  </label>
                </div>
                <!-- Link für "Passwort vergessen" -->
                <a href="#!" class="text-body">Passwort vergessen?</a>
              </div>
              <!-- Login-Schaltfläche -->
              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="submit" class="btn btn-primary btn-lg"
                  style="width: 200px; padding-left: 2.5rem; padding-right: 2.5rem;"
                  @mouseover="startMotion" @mouseleave="endMotion">Login
                  <!-- Bewegungslinie -->
                  <div class="motion-line" v-show="motionActive"></div>
                </button>
                <!-- Link zur Registrierung -->
                <p class="small fw-bold mt-2 pt-1 mb-0">Noch keinen Account? <a href="#!"
                    class="link-danger" @click.prevent="showRegister">Registrieren</a></p>
              </div>
            </form>
            <!-- Registrierungsformular -->
            <form v-else @submit.prevent="register">
              <!-- Email-Eingabefeld -->
              <div class="form-outline mb-4">
                <label class="form-label">Email Adresse</label>
                <input type="email" v-model="username" class="form-control form-control-lg"
                  placeholder="Adresse eingeben" required />
              </div>
              <!-- Passwort-Eingabefeld -->
              <div class="form-outline mb-3">               
                <label class="form-label">Passwort</label>
                <input type="password" v-model="password" class="form-control form-control-lg"
                  placeholder="Passwort" required />
              </div>
              <!-- Passwort bestätigen Eingabefeld -->
              <div class="form-outline mb-3">               
                <label class="form-label">Passwort bestätigen</label>
                <input type="password" v-model="confirmPassword" class="form-control form-control-lg"
                  placeholder="Passwort bestätigen" required />
              </div>
              <!-- Registrieren-Schaltfläche -->
              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="submit" class="btn btn-primary btn-lg"
                  style="width: 200px; padding-left: 2.5rem; padding-right: 2.5rem;"
                  @mouseover="startMotion" @mouseleave="endMotion">Registrieren
                  <!-- Bewegungslinie -->
                  <div class="motion-line" v-show="motionActive"></div>
                </button>
                <!-- Link zum Login -->
                <p class="small fw-bold mt-2 pt-1 mb-0">Bereits einen Account? <a href="#!"
                    class="link-danger" @click.prevent="showLogin">Login</a></p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props: ['isVisible'], // Prop zur Steuerung der Sichtbarkeit des Modals
  data() {
    return {
      username: '', // Benutzername für Login/Registrierung
      password: '', // Passwort für Login/Registrierung
      confirmPassword: '', // Bestätigung des Passworts bei der Registrierung
      rememberMe: false, // Flag, um zu speichern, ob der Benutzer angemeldet bleiben möchte
      isRegistering: false, // Flag, um den Registrierungsmodus anzuzeigen
      motionActive: false // Flag zur Steuerung der Animation beim Hover über die Schaltfläche
    };
  },
  methods: {
    closeModal() {
      // Methode zum Schließen des Modals
      this.$emit('close-modal'); // Ereignisemitierung, um das Schließen des Modals auszulösen
    },
    async login() {
      // Methode für den Login-Vorgang
      try {
        const response = await fetch('http://localhost:5000/api/auth/login', {
          method: 'POST', // POST-Anfrage für den Login
          headers: { 'Content-Type': 'application/json' }, // Header für die JSON-Daten
          body: JSON.stringify({ email: this.username, password: this.password }) // Benutzerdaten als JSON senden
        });

        if (!response.ok) {
          // Überprüfung auf erfolgreiche Antwort
          const errorMessage = await response.text(); // Fehlermeldung aus der Antwort extrahieren
          alert(errorMessage); // Fehlermeldung anzeigen
          return;
        }

        const data = await response.json(); // Antwortdaten als JSON verarbeiten
        console.log('Login erfolgreich', data); // Erfolgsmeldung anzeigen
        this.closeModal(); // Modalschließen auslösen
      } catch (error) {
        console.error('Fehler beim Login:', error); // Fehlerbehandlung bei Fehlern im Login-Prozess
      }
    },

    async register() {
      // Methode für den Registrierungsvorgang
      if (this.password !== this.confirmPassword) {
        // Überprüfung, ob Passwörter übereinstimmen
        alert('Passwörter stimmen nicht überein.'); // Fehlermeldung anzeigen
        return;
      }
      try {
        const response = await fetch('http://localhost:5000/api/auth/register', {
          method: 'POST', // POST-Anfrage für die Registrierung
          headers: { 'Content-Type': 'application/json' }, // Header für die JSON-Daten
          body: JSON.stringify({ email: this.username, password: this.password }) // Benutzerdaten als JSON senden
        });
        const data = await response.json(); // Antwortdaten als JSON verarbeiten
        if (response.ok) {
          // Überprüfung auf erfolgreiche Antwort
          console.log('Registrierung erfolgreich', data); // Erfolgsmeldung anzeigen
          // Nach erfolgreicher Registrierung zum Login wechseln
          this.isRegistering = false; // Registrierungsmodus deaktivieren
          this.username = ''; // Benutzername zurücksetzen
          this.password = ''; // Passwort zurücksetzen
          this.confirmPassword = ''; // Bestätigung des Passworts zurücksetzen
        } else {
          alert(data.message); // Fehlermeldung aus der Antwort anzeigen
        }
      } catch (error) {
        console.error('Fehler bei der Registrierung:', error); // Fehlerbehandlung bei Fehlern im Registrierungsprozess
      }
    },
    showRegister() {
      // Methode zur Anzeige des Registrierungsformulars
      this.isRegistering = true; // Registrierungsmodus aktivieren
    },
    showLogin() {
      // Methode zur Anzeige des Login-Formulars
      this.isRegistering = false; // Registrierungsmodus deaktivieren
    },
    startMotion() {
      // Methode zur Aktivierung der Bewegungsanimation
      this.motionActive = true; // Flag zur Steuerung der Animation setzen
    },
    endMotion() {
      // Methode zur Deaktivierung der Bewegungsanimation
      this.motionActive = false; // Flag zur Steuerung der Animation zurücksetzen
    }
  }
};
</script>


<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
}

.modal-content {
  background-color: #e5e5f8;
  padding: 2rem;
  border-radius: 10px;
  width: 1000px; 
  max-width: 800px; 
  height: 500px;
  text-align: center;
  position: relative;
  font-size: 0.9rem;
  margin-left: 10px;
}

.text-body {
  margin-left: 50px;
  margin-right: 10px;
}

.small {
  margin-left: 20px;
}

.close-button {
  position: absolute;
  top: 4px;
  right: 10px;
  cursor: pointer;
  font-size: 2.5rem;
}

button {
  background-color: #34396E;
  color: white;
  border: none;
  padding: 0.5rem 0.5rem;
  cursor: pointer;
  margin-left: 20px;
}

button:hover {
  background-color: #726FB2;
}

.form-outline {
  margin-bottom: 1.5rem;
  margin-top: 2.5rem;
}

.form-control {
  border-radius: 20px;
  padding: 1.3rem;
  font-size: 0.9rem;
  width: 120%;
}

.form-label {
  margin-left: 1.5rem;
  font-size: 0.9rem;
  color: #6c757d;
}

.motion-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 2px;
  height: 2px;
  background-color: #726FB2;
  transition: width 0.3s ease-out;
}
</style>

<template>
  <div class="modal" v-if="isVisible">
    <div class="modal-content">
      <span class="close-button" @click="closeModal">&times;</span>
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid" alt="Sample image">
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form @submit.prevent="login">
              <!-- Email input -->
              <div class="form-outline mb-4">
                <label class="form-label">Email Addresse</label>
                <input type="email" v-model="username" class="form-control form-control-lg"
                  placeholder="Enter Adresse eingeben" required />
              </div>

              <!-- Password input -->
              <div class="form-outline mb-3">               
                 <label class="form-label">Passwort</label>
                <input type="password" v-model="password" class="form-control form-control-lg"
                  placeholder="Passwort" required />
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <!-- Checkbox -->
                <div class="form-check mb-0">
                  <input class="form-check-input me-2" type="checkbox" v-model="rememberMe" />
                  <label class="form-check-label">
                    Benutzerdatenn merken
                  </label>
                </div>
                <a href="#!" class="text-body">Passwort vergessen?</a>

              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button type="submit" class="btn btn-primary btn-lg"
                  style="width: 200px; padding-left: 2.5rem; padding-right: 2.5rem;"
                  @mouseover="startMotion" @mouseleave="endMotion">Login
                  <div class="motion-line" v-show="motionActive"></div>
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">Noch keinen Account? <a href="#!"
                    class="link-danger">Registrieren</a></p>
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
  props: ['isVisible'],
  data() {
    return {
      username: '',
      password: '',
      rememberMe: false,
      motionActive: false // Neues Datenattribut für die Bewegung des Buttons
    };
  },
  methods: {
    closeModal() {
      this.$emit('close-modal');
    },
    login() {
      console.log('Logging in:', this.username, this.password);
      this.closeModal();
    },
    startMotion() { // Neue Methode für die Startbewegung
      this.motionActive = true;
    },
    endMotion() { // Neue Methode für das Beenden der Bewegung
      this.motionActive = false;
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
  background-color: #e5e5f8 ;
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
.text-body{
  margin-left: 50px;
  margin-right: 10px;
}

.small{
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
  margin-top: 2.5rem;}

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

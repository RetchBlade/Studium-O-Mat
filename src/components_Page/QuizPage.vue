<template>
  <!-- Die Hauptdiv der Quiz-Seite -->
  <div :class="{'quiz-page': true, 'quiz-started': quizStarted}">
    <!-- Hintergrundbild div -->
    <div class="background-image" :class="{'blurred': quizStarted}"></div>
    <!-- Wenn das Quiz noch nicht gestartet wurde, wird dieser Bereich angezeigt -->
    <div v-if="!quizStarted" class="quiz-content">
      <!-- Bild, das vor den Texten und Karten angezeigt wird -->
      <img src="@/assets/about-img.jpg" alt="Header Image" class="header-image" />
      <!-- Einleitungstext -->
      <div class="intro-text">
        <h1 class="intro-title">FINDEN SIE IHREN IDEALEN STUDIENGANG!</h1>
        <p class="intro-description">
          Möchten Sie herausfinden, welcher Studiengang am besten zu Ihnen passt? Unser Test hilft Ihnen dabei, die richtige Entscheidung zu treffen.
        </p>
        <p class="intro-benefits-title">Ihre Vorteile auf einen Blick:</p>
      </div>
      <!-- Kleinere Karten -->
      <div class="card-container">
        <MDBCard class="mb-3 hover-effect primary-card">
          <MDBCardBody>
            <MDBCardTitle class="card-title">Dauer: ca. 10-15 Minuten</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        <MDBCard class="mb-3 hover-effect secondary-card">
          <MDBCardBody>
            <MDBCardTitle class="card-title">Anzahl der Fragen: 30</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
        <MDBCard class="mb-3 hover-effect success-card">
          <MDBCardBody>
            <MDBCardTitle class="card-title">Spezifische Studiengänge: 3</MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      </div>
      <!-- Ein Start-Button, der das Quiz startet, wenn darauf geklickt wird -->
      <button class="start-button" @click="startQuiz">Test starten</button>
    </div>
    <!-- Die QuizComponent wird nur gerendert, wenn das Quiz gestartet wurde -->
    <div v-if="quizStarted" class="quiz-component-container">
      <QuizComponent />
    </div>
    <!-- Der QuizSlider wird nur gerendert, wenn das Quiz gestartet wurde -->
    <QuizSlider v-if="quizStarted"/>
  </div>
</template>

<script>
import QuizComponent from '@/components/QuizComponent.vue';
import QuizSlider from '@/components/QuizSliderComponent.vue';
import { MDBCard, MDBCardBody, MDBCardTitle } from 'mdb-vue-ui-kit';

export default {
  name: 'QuizPage',
  components: {
    QuizComponent,
    QuizSlider,
    MDBCard,
    MDBCardBody,
    MDBCardTitle
  },
  data() {
    return {
      quizStarted: false
    };
  },
  methods: {
    startQuiz() {
      this.quizStarted = true;
      // Hier könnten Sie ggf. einen Router-Navigationsschritt einfügen,
      // um zur Quiz-Seite zu navigieren
    }
  }
}
</script>

<style scoped>
.quiz-page {
  position: relative;
  background-color: #e5e5f8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Damit die Quiz-Elemente vertikal zentriert sind */
  margin-top: 100px; /* Abstand zum Header um 100px vergrößern */
}

.background-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/bg.jpg'); /* Hintergrundbild für gestartetes Quiz */
  background-size: cover; /* Hintergrundbild anpassen */
  background-position: center; /* Hintergrundbild zentrieren */
  z-index: -1; /* Hinter allen anderen Inhalten */
  transition: filter 0.5s ease; /* Weicher Übergang für die Unschärfe */
}

.blurred {
  filter: blur(5px); /* Hintergrund verschwommen machen */
}

.header-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  margin-top: 50px; /* Abstand zum Header */
  margin-bottom: 50px; /* Abstand zu den Texten */
}

.intro-text {
  text-align: center;
  margin-bottom: 30px; /* Abstand unter dem Einleitungstext */
}

.intro-title {
  font-size: 32px; /* Textgröße der Überschrift */
  font-weight: bold; /* Fettschrift */
  text-transform: uppercase; /* Alle Buchstaben groß */
  font-family: 'Arial Black', sans-serif; /* Schriftart einstellen */
  color: #333; /* Textfarbe */
}

.intro-description {
  font-size: 18px; /* Textgröße der Beschreibung */
  color: #555; /* Textfarbe der Beschreibung */
  margin-top: 10px;
}

.intro-benefits-title {
  font-size: 18px; /* Textgröße der Vorteile-Überschrift */
  color: #555; /* Textfarbe der Vorteile-Überschrift */
  font-weight: bold; /* Fettschrift */
  margin-top: 20px;
}

.card-container {
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: flex-start;
}

.mb-3 {
  width: calc(33.33% - 20px); /* 33.33% Breite und Abstand von 20px */
  border-radius: 15px; /* Ecken abrunden */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3); /* Schatten hinzufügen */
}

.hover-effect {
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease-out;
}

.hover-effect:hover {
  transform: translateY(-10px); /* Beispielhafter Hover-Effekt */
}

.primary-card {
  background-color: #8c5fc6; /* Primary color für die erste Karte */
}

.secondary-card {
  background-color: #6c3fa7; /* Secondary color für die zweite Karte */
}

.success-card {
  background-color: #5b3192; /* Success color für die dritte Karte */
}

.card-title {
  font-size: 18px; /* Textgröße anpassen */
  font-weight: bold; /* Schriftstärke anpassen */
  color: #ffffff; /* Textfarbe anpassen */
}

.start-button {
  font-size: 18px;
  background-color: #34396E;
  padding: 2rem 2rem; 
  color: white;
  border: none;
  border-radius: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px; 
  height: 70px; 
  transition: background-color 0.7s;
  margin-top: 20px; /* Abstand nach oben */
}

.start-button:hover {
  background-color: #726FB2;
}
</style>

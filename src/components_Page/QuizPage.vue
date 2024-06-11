<template>
  <!-- Die Hauptdiv der Quiz-Seite -->
  <div class="quiz-page">
    <!-- Wenn das Quiz noch nicht gestartet wurde, wird dieser Bereich angezeigt -->
    <div v-if="!quizStarted" class="quiz-content">
      <!-- Ein Start-Button, der das Quiz startet, wenn darauf geklickt wird -->
      <button class="start-button" @click="startQuiz">Starten</button>
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
// Importiere die QuizComponent
import QuizComponent from '@/components/QuizComponent.vue';
import QuizSlider from '@/components/QuizSliderComponent.vue'

export default {
  // Name der Komponente
  name: 'QuizPage',
  // Registriere die QuizComponent als Unterkomponente
  components: {
    QuizComponent,
    QuizSlider
  },
  // Datenobjekt für die Komponente
  data() {
    return {
      // Variable, um den Status des Quiz zu verfolgen (gestartet oder nicht)
      quizStarted: false
    };
  },
  // Methoden, um das Verhalten der Komponente zu definieren
  methods: {
    // Methode, um das Quiz zu starten
    startQuiz() {
      this.quizStarted = true; // Setze quizStarted auf true, um anzuzeigen, dass das Quiz gestartet wurde
    }
  }
}
</script>

<style scoped>
.quiz-page {
  background-color: #ffffff;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; /* Damit die Quiz-Elemente vertikal zentriert sind */
}

.start-button {
  padding: 15px 30px;
  font-size: 18px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.quiz-component-container {
  margin-top: 100px; /* Verstellbarer Abstand zwischen QuizComponent und QuizSlider */
}
</style>

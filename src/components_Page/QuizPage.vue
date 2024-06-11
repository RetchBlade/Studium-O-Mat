<template>
  <!-- Die Hauptdiv der Quiz-Seite -->
  <div class="quiz-page">
    <!-- Wenn das Quiz noch nicht gestartet wurde, wird dieser Bereich angezeigt -->
    <div v-if="!quizStarted" class="quiz-content">
      <!-- Ein Start-Button, der das Quiz startet, wenn darauf geklickt wird -->
      <button class="start-button" @click="startQuiz">Starten</button>
    </div>
    <div>
    <!-- Die QuizComponent wird nur gerendert, wenn das Quiz gestartet wurde -->
      <QuizComponent  v-if="quizStarted"/>
    </div>
      <QuizSlider  v-if="quizStarted"/>
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
  background-color: #e5e5f8;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}


.start-button {
  font-size: 18px;
  background-color: #34396E;
  padding: 2rem 2rem; 
  color: white;
  border: none;
  border-radius: 20px;
  margin-left: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px; 
  height: 70px; 
}

.start-button:hover {
  background-color: #726FB2;
}

</style>
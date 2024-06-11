<template>
  <!-- Quiz-Komponente -->
  <div>
    <!-- Fragen laden -->
    <div v-if="questions.length > 0">
      <!-- Wenn nicht die letzte Frage -->
      <div v-if="!showNextButton">
        <!-- Frage anzeigen -->
        <h3>{{ questions[currentQuestionIndex].frage }}</h3>
        <!-- Nächste Frage Schaltfläche -->
        <button @click="nextQuestion">Nächste Frage</button>
      </div>
      <!-- Wenn die letzte Frage -->
      <div v-else>
        <!-- Meldung für übersprungene Frage -->
        <p>Frage übersprungen!</p>
        <!-- Nächste Frage Schaltfläche -->
        <button @click="loadNextQuestion">Nächste Frage</button>
      </div>
    </div>
    <!-- Wenn Fragen noch geladen werden -->
    <div v-else>
      <!-- Ladeanzeige -->
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      // Fragenarray
      questions: [],
      // Index der aktuellen Frage
      currentQuestionIndex: 0,
      // Flag, um anzuzeigen, ob die nächste Frage-Schaltfläche angezeigt werden soll
      showNextButton: false
    };
  },
  // Beim Erstellen der Komponente Fragen laden
  created() {
    this.loadQuestions();
  },
  methods: {
    // Methode zum Laden der Fragen
    async loadQuestions() {
      try {
        // Fragen von der API abrufen
        const response = await fetch('http://localhost:5000/api/quiz/fragen');
        // Antwort in JSON umwandeln
        const data = await response.json();
        // Fragen im Datenarray speichern
        this.questions = data;
      } catch (error) {
        // Fehlerbehandlung bei Fehler beim Laden der Fragen
        console.error('Error loading questions:', error);
      }
    },
    // Methode zum Anzeigen der nächsten Frage
    nextQuestion() {
      // Nächste Frage-Schaltfläche anzeigen
      this.showNextButton = true;
    },
    // Methode zum Laden der nächsten Frage
    loadNextQuestion() {
      // Index der aktuellen Frage erhöhen
      this.currentQuestionIndex++;
      // Nächste Frage-Schaltfläche ausblenden
      this.showNextButton = false;
    }
  }
}
</script>


<style scoped>
/* Stile für QuizComponent */
</style>

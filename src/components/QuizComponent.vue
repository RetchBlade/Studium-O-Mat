<template>
  <div>
    <!-- Fragen laden -->
    <div v-if="questions.length > 0">
      <!-- Frage anzeigen -->
      <h3>{{ questions[currentQuestionIndex].frage }}</h3>
      <!-- Studiengänge anzeigen -->
      <ul>
        <li v-for="(studiengang, index) in questions[currentQuestionIndex].studiengänge" :key="index">
          {{ studiengang }}
        </li>
      </ul>
      <!-- Nächste Frage Schaltfläche -->
      <button @click="loadNextQuestion" :disabled="isLastQuestion">Nächste Frage</button>
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
      questions: [], // Fragenarray
      currentQuestionIndex: 0 // Index der aktuellen Frage
    };
  },
  created() {
    this.loadQuestions(); // Beim Erstellen der Komponente Fragen laden
  },
  methods: {
    async loadQuestions() {
      try {
        // Fragen von der API abrufen
        const response = await fetch('http://localhost:5000/api/quiz/questions');
        const data = await response.json();
        this.questions = data; // Fragen im Datenarray speichern
      } catch (error) {
        console.error('Error loading questions:', error); // Fehlerbehandlung bei Fehler beim Laden der Fragen
      }
    },
    loadNextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++; // Index der aktuellen Frage erhöhen
      }
    }
  },
  computed: {
    isLastQuestion() {
      return this.currentQuestionIndex >= this.questions.length - 1; // Überprüfen, ob es die letzte Frage ist
    }
  }
}
</script>

<style scoped>
/* Stile für QuizComponent */
</style>

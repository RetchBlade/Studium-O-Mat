<template>
  <div>
    <div v-if="questions.length > 0">
      <div v-for="(question, index) in questions" :key="index">
        <h3>{{ question.frage }}</h3>
        <div v-for="(studiengang, idx) in question.studiengänge" :key="idx">
          <label>{{ studiengang }}</label>
          <input type="range" min="1" max="5" v-model="ratings[index][idx]">
        </div>
        <button @click="nextQuestion(index)">Next</button>
      </div>
    </div>
    <div v-else>
      <p>Loading...</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      questions: [],
      ratings: [] // Array, um Bewertungen für jede Frage zu speichern
    };
  },
  created() {
    this.loadQuestions();
  },
  methods: {
    async loadQuestions() {
      try {
        const response = await fetch('http://localhost:5000/api/quiz/questions');
        const data = await response.json();
        this.questions = data;
        this.ratings = new Array(data.length).fill().map(() => new Array(data[0].studiengänge.length).fill(3)); // Standardwerte für die Slider-Bewertungen
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    },
    nextQuestion(index) {
      if (index < this.questions.length - 1) {
        // Gehe zur nächsten Frage
        // Hier könntest du Logik hinzufügen, um die Bewertungen zu speichern oder zu verarbeiten
      } else {
        // Alle Fragen wurden gestellt
        console.log('Alle Fragen wurden gestellt');
      }
    }
  }
}
</script>

<style scoped>
/* Stile für QuizComponent */
</style>

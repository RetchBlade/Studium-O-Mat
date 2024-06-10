<template>
  <div>
    <div v-if="questions.length > 0">
      <div v-if="!showNextButton">
        <h3>{{ questions[currentQuestionIndex].frage }}</h3>
        <button @click="nextQuestion">Nächste Frage</button>
      </div>
      <div v-else>
        <p>Frage übersprungen!</p>
        <button @click="loadNextQuestion">Nächste Frage</button>
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
      currentQuestionIndex: 0,
      showNextButton: false
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
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    },
    nextQuestion() {
      this.showNextButton = true;
    },
    loadNextQuestion() {
      this.currentQuestionIndex++;
      this.showNextButton = false;
    }
  }
}
</script>

<style scoped>
/* Stile für QuizComponent */
</style>

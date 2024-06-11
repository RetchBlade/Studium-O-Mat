<template>
  <div class="quiz-page">
    <div v-if="!quizStarted" class="quiz-content">
      <button class="start-button" @click="startQuiz">Starten</button>
    </div>
    <QuizComponent v-if="quizStarted"/>
  </div>
</template>

<script>
import QuizComponent from '@/components/QuizComponent.vue';

export default {
  name: 'QuizPage',
  components: {
    QuizComponent
  },
  data() {
    return {
      quizStarted: false
    };
  },
  methods: {
    startQuiz() {
      this.quizStarted = true;
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
}

.quiz-content {
  /* Customize quiz content style */
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
</style>
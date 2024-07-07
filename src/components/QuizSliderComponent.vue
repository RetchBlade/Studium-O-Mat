<template>
  <div class="card">
    <img src="@/assets/banner.png" alt="Image" class="card-image">
    <div class="content-container">
      <div class="quiz-section">
        <div v-if="questions.length > 0">
          <h3>{{ questions[currentQuestionIndex].frage }}</h3>
          <button @click="loadNextQuestion" :disabled="isLastQuestion">Nächste Frage</button>
        </div>
        <div v-else>
          <p>Loading...</p>
        </div>
      </div>
      <div class="slider-container">
        <div class="labels">
          <span v-for="(label, index) in labels" :key="index" class="label" :style="{ left: `${index * 25}%` }">
            {{ label }}
          </span>
        </div>
        <input
          type="range"
          v-model="currentState"
          min="0"
          max="4"
          step="1"
          :class="['range', colorClass]"
          class="slider"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentState: 2,
      labels: [
        'Stimme nicht zu',
        'Stimme eher nicht zu',
        'Neutral',
        'Stimme eher zu',
        'Stimme zu'
      ],
      questions: [],
      currentQuestionIndex: 0
    };
  },
  computed: {
    colorClass() {
      switch (this.currentState) {
        case 0:
          return 'blue';
        case 1:
          return 'ltpurple';
        case 2:
          return 'purple';
        case 3:
          return 'pink';
        case 4:
          return 'pink'; // Adjust if needed
        default:
          return 'purple'; // Default fallback
      }
    },
    isLastQuestion() {
      return this.currentQuestionIndex >= this.questions.length - 1;
    }
  },
  created() {
    this.loadQuestions();
  },
  methods: {
    async loadQuestions() {
      try {
        const response = await fetch('http://localhost:5000/api/quiz/readquest');
        const data = await response.json();
        this.questions = data;
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    },
    loadNextQuestion() {
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      }
    }
  }
};
</script>

<style scoped>
.card {
  width: 70%;
  height: 70%;
  background: #f3f3f3;
  border-radius: 20px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  margin-top: 10px;
  position: relative;
}

.card-image {
  width: 100%;
  height: 30%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
}

.content-container {
  position: relative;
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.slider-container {
  width: 100%;
  max-width: 1000px;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.labels {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.label {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  text-align: center;
  font-size: 14px;
  font-weight: bold;
  white-space: nowrap;
}

.slider {
  width: 100%;
  height: 30px;
  border-radius: 5px;
  background: transparent;
  outline: none;
  opacity: 0.7;
  transition: opacity 0.2s;
  z-index: 1;
}

.slider:hover {
  opacity: 1;
}

.range {
  -webkit-appearance: none;
  -moz-appearance: none;
}

input[type=range]::-webkit-slider-runnable-track {
  background: rgba(59,173,227,1);
  background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  height: 2px;
}

input[type=range]::-moz-range-track {
  background: rgba(59,173,227,1);
  background: linear-gradient(45deg, rgba(59,173,227,1) 0%, rgba(87,111,230,1) 25%, rgba(152,68,183,1) 51%, rgba(255,53,127,1) 100%);
  height: 2px;
}

input[type=range]:focus {
  outline: none;
}

input[type=range]::-webkit-slider-thumb {
  -webkit-appearance: none;
  border: 2px solid;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  max-width: 80px;
  background-color: #6e60da;
  cursor: -webkit-grab;
  transition: border 1000ms ease;
}

input[type=range]::-moz-range-thumb {
  border: 2px solid;
  border-radius: 50%;
  height: 25px;
  width: 25px;
  max-width: 80px;
  background-color: #6e60da;
  cursor: -moz-grab;
  transition: border 1000ms ease;
}

.range.blue::-webkit-slider-thumb {
  border-color: rgb(59,173,227);
}

.range.ltpurple::-webkit-slider-thumb {
  border-color: rgb(87,111,230);
}

.range.purple::-webkit-slider-thumb {
  border-color: rgb(152,68,183);
}

.range.pink::-webkit-slider-thumb {
  border-color: rgb(255,53,127);
}

.range.blue::-moz-range-thumb {
  border-color: rgb(59,173,227);
}

.range.ltpurple::-moz-range-thumb {
  border-color: rgb(87,111,230);
}

.range.purple::-moz-range-thumb {
  border-color: rgb(152,68,183);
}

.range.pink::-moz-range-thumb {
  border-color: rgb(255,53,127);
}

input[type=range]::-webkit-slider-thumb:active {
  cursor: -webkit-grabbing;
}

input[type=range]::-moz-range-thumb:active {
  cursor: -moz-grabbing;
}

.quiz-section {
  text-align: center;
  margin-top: 50px;
  padding: 20px;
  width: 900px;
}

.quiz-section h3 {
  font-size: 1.5rem;
  margin-bottom: 10px;
}

.quiz-section button {
  padding: 10px 20px;
  background-color: #6e60da;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.quiz-section button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://i.pinimg.com/originals/ec/bb/8b/ecbb8bfbb05ea1fdcf043ae1eb80adb2.jpg') no-repeat center center;
  background-size: cover;
  z-index: -1; /* Hintergrund hinter den Inhalt legen */
  opacity: 0.3; /* Transparenz des Hintergrundbilds */
}
</style>

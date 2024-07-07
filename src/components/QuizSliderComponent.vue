<template>
  <div class="card">
    <img src="@/assets/banner.png" alt="Image" class="card-image">
    <div class="content-container">
      <div class="quiz-section">
        <div v-if="questions.length > 0 && !showResults">
          <div class="counter">
            <span>Frage {{ currentQuestionIndex + 1}} von {{ questions.length }}</span>
          </div>
          <h3>{{ questions[currentQuestionIndex].frage }}</h3>
          <button @click="loadNextQuestion" :able="isLastQuestion">{{ isLastQuestion ? 'Ergebnis anzeigen' : 'Nächste Frage' }}</button>
        </div>
        <!-- Kein "Loading..." mehr anzeigen, wenn Fragen geladen sind -->
      </div>
      <div v-if="!showResults && questions.length > 0" class="slider-container">
        <div class="labels">
          <span v-for="(label, index) in labels" :key="index" class="label" :style="{ left: `${index * 25}%` }">
            {{ label }}
          </span>
        </div>
        <input
          v-if="!showResults"
          type="range"
          v-model="currentState"
          min="0"
          max="4"
          step="1"
          :class="['range', colorClass]"
          class="slider"
        />
      </div>

      <!-- Ergebnisabschnitt -->
      <div v-if="showResults" class="results">
        <h4>Ergebnis</h4>
        <ul>
          <li v-for="(points, studiengang) in points" :key="studiengang">
            {{ studiengang }}: {{ getPercentage(studiengang) }} % 
          </li>
        </ul>
        <!-- Hier integrieren wir das Kuchendiagramm -->
        <result-chart :points="points"></result-chart>
        <button @click="resetQuiz">Zurück zum Start</button>
      </div>
    </div>
  </div>
</template>

<script>
import ResultChart from './QuizResultChart.vue';

export default {
  components: {
    ResultChart
  },
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
      currentQuestionIndex: 0,
      points: {
        Informatik: 0,
        Wirtschaftsinformatik: 0,
        Elektrotechnik: 0
      },
      pointsPercent: {
        Informatik: 0,
        Wirtschaftsinformatik: 0,
        Elektrotechnik: 0
      },
      showResults: false // Hinzugefügt, um die Ergebnisse anzuzeigen
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
        
        // Fragen nach Studiengang filtern und zufällige Auswahl treffen
        const informatikFragen = this.getRandomQuestions(data, 'Informatik', 10);
        const wirtschaftsinformatikFragen = this.getRandomQuestions(data, 'Wirtschaftsinformatik', 10);
        const elektrotechnikFragen = this.getRandomQuestions(data, 'Elektrotechnik', 10);
        
        // Mische die Fragen aus allen Studiengängen
        this.questions = [...informatikFragen, ...wirtschaftsinformatikFragen, ...elektrotechnikFragen].sort(() => Math.random() - 0.5);
      } catch (error) {
        console.error('Error loading questions:', error);
      }
    },
    loadNextQuestion() {
  const pointsMap = {
    0: 1,
    1: 2,
    2: 0,
    3: 3,
    4: 4
  };

  const currentQuestion = this.questions[this.currentQuestionIndex];
  const currentPoints = pointsMap[this.currentState];

  currentQuestion.studiengänge.forEach(studiengang => {
    if (this.points[studiengang] !== undefined) {
      this.points[studiengang] += currentPoints;
    }
  });

  console.log(`Points after question ${this.currentQuestionIndex + 1}:`, this.points);

  if (this.currentQuestionIndex < this.questions.length - 1) {
    this.currentQuestionIndex++;
    this.currentState = 2;
  } else {
    this.showResults = true;
  }
},
    getRandomQuestions(data, studiengang, count) {
          // Filtere Fragen für den spezifischen Studiengang
          const filteredQuestions = data.filter(q => q.studiengänge.includes(studiengang));

          // Mische die Fragen zufällig
          const shuffledQuestions = this.shuffleArray(filteredQuestions);

          // Wähle die ersten 'count' Fragen aus
          return shuffledQuestions.slice(0, count);
        },shuffleArray(array) {
      // Mische das Array zufällig (Fisher-Yates Algorithmus)
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
      return array;
    },
    resetQuiz() {
      this.currentState = 2;
      this.currentQuestionIndex = 0;
      this.points = {
        Informatik: 0,
        Wirtschaftsinformatik: 0,
        Elektrotechnik: 0
      };
      this.showResults = false;
      
      // Seite neu laden
      window.location.reload();
    },
    getPercentage(studiengang) {
  const totalPoints = Object.values(this.points).reduce((sum, points) => sum + points, 0);

  if (totalPoints === 0) {
    console.error('Error: Total points are zero.');
    return '0.00';
  }

  const studiengangPoints = this.points[studiengang] || 0;
  const percentage = ((studiengangPoints / totalPoints) * 100).toFixed(2);

  if (isNaN(percentage)) {
    console.error(`Error: Invalid percentage calculation for ${studiengang} with points ${studiengangPoints} and total ${totalPoints}`);
    return '0.00';
  }

  return percentage;
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
  margin-top: 20px;
}

.counter {
  font-size: 18px;
  margin-bottom: 10px;
}

.results {
  margin-top: 20px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.results h4 {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
}

.results ul {
  list-style-type: none;
  padding: 0;
}

.results li {
  font-size: 16px;
  margin-bottom: 5px;
}
</style>

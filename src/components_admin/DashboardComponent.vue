<template>
  <div class="dashboard">
    <h1>Admin Dashboard</h1>

    <!-- Statistiken für Benutzer und Fragen -->
    <div class="stats">
      <div class="stat-box">
        <h2><RouterLink to="/admin/users" class="nav-link">Anzahl der Benuzter</RouterLink></h2>
        <p>{{ userCount }}</p>
      </div>
      <div class="stat-box">
        <h2><RouterLink to="/admin/fragen" class="nav-link">Anzahl  der Fragen</RouterLink></h2>
        <p>{{ questionCount }}</p>
      </div>
    </div>

    <p>Weitere Features Folgen in der Zukunft...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userCount: 0,
      questionCount: 0
    };
  },
  created() {
    this.fetchUserData();
    this.fetchQuestionData();
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await fetch('http://localhost:5000/api/user/readuser'); // Adjust the URL according to your setup
        const data = await response.json();
        this.userCount = data.length;
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    },
    async fetchQuestionData() {
      try {
        const response = await fetch('http://localhost:5000/api/quiz/readquest'); // Adjust the URL according to your setup
        const data = await response.json();
        this.questionCount = data.length;
      } catch (error) {
        console.error('Error fetching question data:', error);
      }
    }
  }
};
</script>

<style scoped>
.dashboard {
  padding: 20px;
}

.stats {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.stat-box {
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 5px;
  text-align: center;
  flex: 1;
}

.nav-link {
  color: #333; 
  text-decoration: none; 
}
</style>

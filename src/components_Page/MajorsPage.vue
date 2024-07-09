<template>
    <div class="majors-page">
      <!-- Einleitung -->
      <section class="intro">
        <div class="container">
          <h1>Studiengänge im Fokus: Finden Sie Ihren Passenden</h1>
          <p>
            Unsere Webseite bietet einen Test an, der Ihnen helfen kann, den am besten passenden Studiengang an der Hochschule Bochum zu finden. Die verfügbaren Studiengänge sind Elektrotechnik, Informatik und Wirtschaftsinformatik.
          </p>
        </div>
      </section>
  
      <!-- Studiengänge als Cards -->
      <section class="card-section">
        <!-- Informatik Card -->
        <div class="card">
          <div class="card-img">
            <img src="@/assets/Informatik.jpg" alt="Informatik Bild">
          </div>
          <div class="card-content">
            <h2>Informatik</h2>
            <p>
              Informatik ist die Wissenschaft von der systematischen Verarbeitung von Informationen, insbesondere der automatischen Verarbeitung mit Hilfe von Computern.
            </p>
            <div class="card-links">
                <a href="https://www.hochschule-bochum.de/informatik/" target="_blank" rel="noopener noreferrer" class="external-link">Mehr erfahren</a>
            </div>
          </div>
        </div>
  
        <!-- Wirtschaftsinformatik Card -->
        <div class="card">
          <div class="card-img">
            <img src="@/assets/Wirtschafts.jpg" alt="Wirtschaftsinformatik Bild">
          </div>
          <div class="card-content">
            <h2>Wirtschaftsinformatik</h2>
            <p>
              Wirtschaftsinformatik befasst sich mit der Entwicklung und Anwendung von Informations- und Kommunikationssystemen in Unternehmen.
            </p>
            <div class="card-links">
            <a href="https://www.hochschule-bochum.de/wirtschaftsinformatik/" target="_blank" rel="noopener noreferrer" class="external-link">Mehr erfahren</a>
            </div>

          </div>
        </div>
  
        <!-- Elektrotechnik Card -->
        <div class="card">
          <div class="card-img">
            <img src="@/assets/Elektrotechnik.jpg" alt="Elektrotechnik Bild">
          </div>
          <div class="card-content">
            <h2>Elektrotechnik</h2>
            <p>
              Elektrotechnik ist die Ingenieurwissenschaft, die sich mit der Erforschung und Anwendung der elektrischen Energie befasst.
            </p>
            <div class="card-links">
                <a href="https://www.hochschule-bochum.de/elektrotechnik/" target="_blank" rel="noopener noreferrer" class="external-link">Mehr erfahren</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MajorsPage'
  }
  </script>
  
  <style scoped>
  
  .majors-page {
    font-family: 'Arial', sans-serif;
    padding: 20px;
    padding-bottom: 40px;
    margin-top: 200px; /* Abstand zwischen Header und erstem Abschnitt */
  }
  
  .intro {
    text-align: center;
    margin-bottom: 100px;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }
  
  .card-section {
    display: flex;
    justify-content: space-around;
    gap: 2px; /* Abstand zwischen den Cards */
    flex-wrap: wrap; /* Umbruch bei kleineren Bildschirmen */
  }
  
  .card {
    width: 600px; /* Zwei mal größer als vorher */
    height: 900px; /* Automatische Höhe basierend auf Inhalt */
    border-radius: 50px; /* Rundere Ecken der Karte */
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Schatten hinzufügen */
    transition: transform 0.4s ease;
  }
  
  .card:hover {
    transform: translateY(-15px); /* Karten beim Hover anheben */
  }
  .card-img {
  max-width: 100%;
  max-height: 100%;
  overflow: hidden;
  display: flex; 
  align-items: center;
  justify-content: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

.card-img img {
  width: 600px; /* Automatisch anpassen */
  height: 600px; /* Automatisch anpassen */
  max-width: 100%;
  max-height: fit-content;
}
  
  .card-content {
    padding: 40px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 200px; /* Höhe der Card-Inhalte auf 100% setzen */
  }
  
  .card-content h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  .card-content p {
    font-size: 1rem;
    color: #666;
    line-height: 1.5;
    flex: 1; /* Flexibles Layout für den Textinhalt */
  }
  
  .card-links {
  margin-top: 10px;
}

.card-links a {
  color: #34396E;
  text-decoration: none;
  font-weight: bold;
}

.card-links a:hover {
  text-decoration: underline;
}
  </style>
  
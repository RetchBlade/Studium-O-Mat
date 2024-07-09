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
              In diesem Studiengang lernen Sie, wie Computer funktionieren und wie man Software und Apps entwickelt. Sie beschäftigen sich mit spannenden Themen wie Künstliche Intelligenz,
              Internetsicherheit und großen Datenmengen. Mit praktischen Projekten und moderner Technologie sind Sie bestens vorbereitet auf eine erfolgreiche Karriere in der IT.
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
              Interessieren Sie sich sowohl für Computer als auch für Wirtschaft? Dann ist der Wirtschaftsinformatikstudiengang genau das Richtige für Sie! Hier lernen Sie, wie man mit Computern und Software Unternehmen effizienter macht. Sie erfahren, wie Geschäftsprozesse funktionieren und wie man mit Daten bessere Entscheidungen trifft. Dieser Studiengang bereitet Sie darauf vor, in verschiedenen Branchen wie Finanzen, Marketing oder IT zu arbeiten und dabei immer eine Brücke zwischen Technik und Geschäft zu schlagen.
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
            <p style="font-size: 18px;">
              Im Elektrotechnikstudiengang entdecken Sie die Welt der Elektrizität und Elektronik. Sie lernen, wie man elektrische Geräte und Systeme plant, entwickelt und verbessert. Dieser Studiengang öffnet Ihnen die Türen zu vielen spannenden Bereichen wie Energieversorgung, Kommunikationstechnik oder Automatisierung. Werden Sie ein Experte in einer Branche, die unser tägliches Leben mitgestaltet und voranbringt.
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
    max-height: 1200px;

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
    width: 500px; /* Zwei mal größer als vorher */
    height: 1000px; /* Automatische Höhe basierend auf Inhalt */
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
    height: 500px; /* Automatisch anpassen */
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
    font-size: 1.125rem; /* 18px Schriftgröße für den Paragraphen */
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
  
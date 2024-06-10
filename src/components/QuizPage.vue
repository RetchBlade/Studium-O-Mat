<template>
    <div class="quiz-page">
      <!-- Bereich mit weißem Hintergrund -->
      <div class="quiz-content">
        <!-- Zentrierter Start-Button -->
        <button class="start-button">Starten</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'QuizPage'
  }
  </script>
  
  <style scoped>
  .quiz-page {
    background-color: #ffffff; /* Weißer Hintergrund */
    height: 100vh; /* Vollständige Bildschirmhöhe */
    display: flex; /* Flexbox-Layout für Zentrierung */
    justify-content: center; /* Horizontal zentrieren */
    align-items: center; /* Vertikal zentrieren */
  }
  
  .quiz-content {
    /* Stil des Quiz-Inhalts anpassen */
  }
  
  .start-button {
    /* Stile für den Start-Button anpassen */
    padding: 15px 30px; /* Beispiel: Polsterung für den Button */
    font-size: 18px; /* Beispiel: Schriftgröße für den Button */
    background-color: #4CAF50; /* Beispiel: Hintergrundfarbe für den Button */
    color: white; /* Beispiel: Schriftfarbe für den Button */
    border: none; /* Beispiel: Keine Rahmen für den Button */
    border-radius: 5px; /* Beispiel: Abrundungsradius für den Button */
    cursor: pointer; /* Beispiel: Zeigercursor für den Button */
  }
  </style>
  
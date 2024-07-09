<template>
  <div class="faq-section">
    <div class="faq-card">
      <div class="banner-image">
        <img src="@/assets/banner.png" alt="Banner Image">
      </div>
      <div class="faq-content">
        <h2>Über Studium-O-Mat</h2>
        <div class="faq-items">
          <div class="faq-item" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question" @click="toggleAnswer(index)">
              <h3>{{ faq.question }} <span class="arrow" :class="{ 'arrow-down': faq.active }"></span></h3>
            </div>
            <transition name="fade">
              <div class="faq-answer" v-if="faq.active" key="answer">
                <p>{{ faq.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
    <div class="logo-box">
      <img src="@/assets/weblogoGross.png" alt="Logo">
    </div>
  </div>
</template>

<script>
export default {
  name: 'StudiumOMatPage',
  data() {
    return {
      faqs: [
        {
          question: 'Warum ist die Wahl des richtigen Studiengangs so wichtig?',
          answer: 'Die Wahl des richtigen Studiengangs ist entscheidend für Ihren Erfolg in Bildung und Karriere. Wir werden Sie bei dieser wichtigen Entscheidung bestmöglich unterstützen und Ihnen helfen, den passenden Studiengang zu finden.',
          active: false
        },
        {
          question: 'Was ist das Ziel von Studium-O-Mat?',
          answer: 'Studium-O-Mat hat das Ziel, Ihnen bei einer der wichtigsten Entscheidungen in Ihrem Bildungsweg zu helfen. Diese Plattform führt Sie auf Ihrem Karriereweg und hilft Ihnen, den für Sie idealen Studiengang an der HSBO zu finden. Sie spart Ihnen Zeit und macht den Entscheidungsprozess bewusster und informierter.',
          active: false
        },
        {
          question: 'Wie funktioniert die Nutzung von Studium-O-Mat?',
          answer: 'Die Nutzung von Studium-O-Mat ist einfach und effektiv. Sobald Sie die Website besuchen, werden Ihnen verschiedene Fragen gestellt. Diese Fragen zielen darauf ab, Ihre akademischen Interessen, Stärken und beruflichen Ziele zu erfassen.',
          active: false
        },
        {
          question: 'Was passiert, nachdem ich die Fragen beantwortet habe?',
          answer: 'Nachdem Sie die Fragen beantwortet haben, analysiert Studium-O-Mat Ihre Antworten und bietet Ihnen Empfehlungen für Studiengänge, die am besten zu Ihnen passen.',
          active: false
        },
        {
          question: 'Ist die Nutzung von Studium-O-Mat kostenlos?',
          answer: 'Ja, die Nutzung von Studium-O-Mat ist vollständig kostenlos. Benutzer können die Plattform besuchen, Fragen beantworten und Empfehlungen für Studiengänge erhalten, ohne dass dafür Gebühren anfallen.',
          active: false
        },
        {
          question: 'Welche Informationen werden für die Analyse meiner Antworten verwendet?',
          answer: 'Studium-O-Mat verwendet die von Ihnen bereitgestellten Antworten auf die Fragen, um Ihre akademischen Interessen, Stärken und beruflichen Ziele zu erfassen. Diese Daten werden verwendet, um einen Algorithmus anzutreiben, der dann Empfehlungen für Studiengänge generiert, die am besten zu Ihnen passen könnten.',
          active: false
        },
        {
          question: 'Wie genau sind die Empfehlungen von Studium-O-Mat?',
          answer: 'Die Empfehlungen von Studium-O-Mat basieren auf einem umfassenden Analyseprozess Ihrer Antworten. Der Algorithmus berücksichtigt eine Vielzahl von Faktoren, darunter Ihre Interessen, Ihre Stärken sowie die Ziele, die Sie für Ihr zukünftiges Studium haben. Während die Empfehlungen auf diesen Informationen beruhen, ist es wichtig zu beachten, dass sie als Orientierungshilfe dienen sollen. Endgültige Entscheidungen über Studiengänge sollten zusätzlich zu den Empfehlungen von Studium-O-Mat auf persönlichen Recherchen und Beratung basieren.',
          active: false
        }
      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqs.forEach((faq, i) => {
        if (i === index) {
          faq.active = !faq.active;
        } else {
          faq.active = false;
        }
      });
    }
  }
};
</script>

<style scoped>

.faq-section {
  
  display: flex;
  flex-wrap: wrap; /* Zeilenumbruch für kleinere Bildschirme */
  justify-content: space-between; /* Platz zwischen Fragen-Karten und Logo */
  align-items: flex-start; /* Oben ausrichten */
  padding: 40px 20px; /* Anpassung des Paddings für kleinere Bildschirme */
  margin-top: 90px;
 
}

.faq-card {
  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.3);
  width: 60%; /* Breite der FAQ-Karte */
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding-left: 20px;
  padding-bottom: 80px;

  
}


.banner-image img {
  width: 100%;
  height: 100%; /* Anpassung für das Bild */
  object-fit: cover;
}

.faq-content {
  padding: 20px;
  flex: 1;
}

h2 {
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 40px;
  margin-top: 10px;

}

.faq-items {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 Fragen pro Zeile */
  gap: 20px;
}

.faq-item {
  background-color: #dbdbee;
  border-radius: 12px;
  padding: 15px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  font-size: 14px; /* Schriftgröße angepasst */
}

.faq-item:hover {
  background-color: #e0e0f0;
  transform: translateY(-5px);
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1);
}

.arrow {
  display: inline-block;
  width: 8px;
  height: 8px;
  border-style: solid;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
  transition: transform 0.3s ease;
}

.arrow-down {
  transform: translateY(-50%) rotate(225deg);
}

.faq-answer {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-top: 10px;
  font-size: 14px; /* Schriftgröße angepasst */
}

.logo-box {
  width: 40%; /* Breite des Logo-Bereichs */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  padding-right: 400px;

}

.logo-box img {
  max-width: 100%;
  height: auto;
}

@media (max-width: 1200px) {
  .faq-items {
    grid-template-columns: repeat(2, 1fr); /* Bei kleineren Bildschirmen 2 Fragen pro Zeile */
  }
}

@media (max-width: 768px) {
  .faq-card {
    width: 80%; /* Karte noch etwas breiter bei kleinen Bildschirmen */
  }
   
.logo-box {
    display: none !important; /* Bild auf kleinen Bildschirmen ausblenden */
  }
  .faq-items {
    grid-template-columns: 1fr; /* Eine Frage pro Zeile bei sehr kleinen Bildschirmen */
  }
}

</style>

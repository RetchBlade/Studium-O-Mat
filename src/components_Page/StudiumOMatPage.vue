<template>
  <div>
    <div class="faq-section">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="detail-box">
              <div class="heading-container">
                <h2>Über Studium-O-Mat</h2>
              </div>
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
          <div class="col-md-6">
            <div class="img-box">
              <img src="@/assets/weblogoGross.png" alt="Logo">
            </div>
          </div>
        </div>
      </div>
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
h2 {
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-top: 30px;
}

.faq-section {
  background-color: #f9f9fb;
  padding: 60px 0;
}

.faq-items {
  max-width: 800px;
  margin: 0 auto;
}

.faq-item {
  margin-bottom: 20px;
}

.faq-question {
  background-color: #e3e3f2;
  border-radius: 12px;
  padding: 25px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s, transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  font-size: 1px; /* Angepasste Schriftgröße */
}

.faq-question:hover {
  background-color: #babade;
  transform: translateY(-5px);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
}

.arrow {
  display: inline-block;
  width: 12px;
  height: 12px;
  border-style: solid;
  border-width: 0 2px 2px 0;
  transition: transform 0.3s ease;
  transform: rotate(45deg);
}

.arrow-down {
  transform: translateY(-50%) rotate(225deg);
}

.faq-answer {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-top: 10px;
  transition: all 0.3s;
  font-size: 20px;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s, transform 0.5s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>


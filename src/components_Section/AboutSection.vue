<template>
  <!-- Über uns Abschnitt -->
  <section class="about_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-10 col-lg-9 mx-auto">
          <!-- Bild -->
          <div class="img-box">
            <img :src="aboutImage" alt="">
          </div>
        </div>
      </div>
      <!-- Details -->
      <div class="detail-box">
        <!-- Titel -->
        <h2>{{ aboutTitle }}</h2>
        <!-- Inhalt -->
        <p>{{ aboutContent }}</p>
        <!-- "Weiterlesen"-Link -->
        <a href="">{{ readMoreLink }}</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  data() {
    return {
      // Titel des Über uns Abschnitts
      aboutTitle: 'About Spering Company',
      // Inhalt des Über uns Abschnitts
      aboutContent: `Es gibt viele Variationen der Passagen des Lorem Ipsum, aber der Großteil hat in irgendeiner Form eine Veränderung durch Humor oder zufällig eingefügte Wörter erlitten, die nicht einmal annähernd glaubwürdig aussehen. Wenn Sie`, // Hier fehlt ein Teil des Textes in der Vorlage
      // Link "Weiterlesen"
      readMoreLink: 'Mehr lesen',
      // Bild für den Über uns Abschnitt
      aboutImage: require('@/assets/about-img.jpg')
    };
  }
}
</script>

  
  <style scoped>
    
.about_section {
  text-align: center;
}

.about_section .img-box img {
  width: 100%;
}

.about_section .detail-box h2 {
  font-weight: bold;
  text-transform: uppercase;
}

.about_section .detail-box p {
  margin-top: 15px;
}

.about_section .detail-box a {
  display: inline-block;
  padding: 10px 45px;
  background-color: #ff4f5a;
  color: #ffffff;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 0;
  margin-top: 25px;
}

.about_section .detail-box a:hover {
  background-color: transparent;
  border-color: #ff4f5a;
  color: #ff4f5a;
}
  </style>
  
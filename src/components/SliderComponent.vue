<template>
  <!-- Slider-Sektion -->
  <section class="slider_section">
    <!-- Carousel-Steuerungsschaltflächen -->
    <div class="carousel_btn-container">
      <!-- Vorherige Schaltfläche -->
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="sr-only">Previous</span>
      </a>
      <!-- Nächste Schaltfläche -->
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- Karussell -->
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <!-- Karussellindikatoren -->
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active">01</li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1">02</li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2">03</li>
      </ol>
      <!-- Karussell-Inhalt -->
      <div class="carousel-inner">
        <!-- Erstes Element -->
        <div class="carousel-item active">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 offset-md-1">
                <!-- Detailbox -->
                <div class="detail-box">
                  <h1><br>Dein Studienweg beginnt hier!<br></h1>
                  <p>Finde den Studiengang, der zu dir passt.</p>
                </div>
                <!-- Buttoncontainer -->
                <div class="btn-container">
                  <div class="btn-box">
                    <!-- Schaltfläche mit Router-Link -->
                    <a class="btn-1"><router-link to='/quiz' class="study-test-btn">Zum Studienwahltest</router-link></a>
                  </div>
                </div>
              </div>
              <div class="offset-md-1 col-md-4 img-container">
                <div class="img-box">
                  <!-- Bild -->
                  <img src="@/assets/studenten.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Zweites Element -->
        <div class="carousel-item">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 offset-md-1">
                <!-- Detailbox -->
                <div class="detail-box">
                  <h1><br>Welches Studium passt zu mir?<br></h1>
                  <p>Um das passende Studium für sich zu finden, ist es wichtig, zunächst Ihre Interessen und Leidenschaften zu erkunden. Welche Themen faszinieren Sie? Welche Aktivitäten machen Ihnen Spaß? Indem Sie sich selbst diese Fragen stellen, können Sie eine grundlegende Richtung für Ihre Studienwahl festlegen.</p>
                </div>
                <!-- Buttoncontainer -->
                <div class="btn-container">
                  <div class="btn-box">
                    <!-- Schaltfläche mit Router-Link -->
                    <a class="btn-1"><router-link to='/quiz' class="study-test-btn"> Zum Studienwahltest</router-link></a>
                  </div>
                </div>
              </div>
              <div class="offset-md-1 col-md-4 img-container">
                <div class="img-box">
                  <!-- Bild -->
                  <img src="@/assets/poster-studium-definition.png" alt=""/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Drittes Element -->
        <div class="carousel-item">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 offset-md-1">
                <!-- Detailbox -->
                <div class="detail-box">
                  <h1><br>Erkennen Sie Ihre Fähigkeiten und Stärken<br></h1>
                  <p>Jeder hat unterschiedliche Talente. Das Erkennen Ihrer eigenen Fähigkeiten und Stärken wird Ihnen helfen zu verstehen, welche Karriere zu Ihnen passt. In welchen Bereichen sind Sie gut? Welche Fähigkeiten besitzen Sie? Indem Sie diese Fragen beantworten, können Sie eine solide Grundlage für die richtige Karrierewahl schaffen.</p>
                </div>
                <!-- Buttoncontainer -->
                <div class="btn-container">
                  <div class="btn-box">
                    <!-- Schaltfläche mit Router-Link -->
                    <a class="btn-1"><router-link to='/quiz' class="study-test-btn">Zum Studienwahltest</router-link></a>
                  </div>
                </div>
              </div>
              <div class="offset-md-1 col-md-4 img-container">
                <div class="img-box">
                  <!-- Bild -->
                  <img src="@/assets/2822114-studenten-sehen-gelangweilt-beim-lernen-handgezeichneten-stil-design-illustrationen-kostenlos-vektor.png" alt="">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SliderComponent' // Name der Slider-Komponente
}
</script>




<style scoped>
.slider_section {
background-color: #DADBED;
display: flex;
align-items: center;
position: relative;
height: 600px;
padding: 20px 0; /* Add padding to ensure the section has space */
padding-top: 100px;

}

@media (max-width: 768px) {
  .slider_section{
    display: flex;
    justify-content: space-around;
    gap: 2px; /* Abstand zwischen den Cards */
    flex-wrap: wrap; /* Umbruch bei kleineren Bildschirmen */
  }
  .slider_section .carousel_btn-container {
    top: 105%; /* Alternative Positionierung nach oben für kleinere Bildschirme */
    left: 10%;
    align-self: flex-start; /* Verschiebt die Schaltflächen nach oben für kleinere Bildschirme */
  }
  
} 

.slider_section .row {
display: flex;
align-items: center;
}

.slider_section .row > div {
position: unset;
}

.slider_section .detail-box {
color: #34396E;
margin-top: 70px;
min-height: 400px; /* Mindesthöhe statt feste Höhe */
flex-direction: column;
justify-content: space-between

}

.slider_section .detail-box h1 {
color: #34396E;
font-weight: bold;
text-transform: uppercase;
margin-top: 70px;

}

.slider_section .detail-box p {
color: #8a8ca1;
margin-top: 40px;
font-size: 22px;
}


.slider_section .carousel_btn-container {
  width: 130px;
  position: absolute;
  bottom: 0;
  display: flex;
  justify-content: center; /* Änderung hier */
  left: 50%; /* Zentriert die Buttons horizontal */
  transform: translateX(-50%);
  z-index: 999;
}

.slider_section .detail-box .btn-box a {
text-align: center;
width: 165px;
font-size: 15px;
margin: 20px;

}


.slider_section .btn-container .btn-1 {
display: inline-block;
padding: 12px 12px  12px 12px;
background-color: #34396E;
color: #ffffff;
transition: all 0.3s;
border: 1px solid transparent;
border-radius: 15px;


}

.slider_section .btn-container .btn-1:hover {
background-color: #898ec7;
}

.study-test-btn {
  color: #ffffff !important; 
  text-decoration: none; 
}

.study-test-btn:hover {
  color: #ffffff !important; 
}


.slider_section .img-container .img-box img {
max-height: fit-content;
width: 100%; /* Bild passt sich dem Container an */}

.slider_section #carouselExampleIndicators {
position: unset;
width: 100%;
}

.slider_section .carousel_btn-container {
width: 120px;
position: absolute;
bottom: 0;
display: flex;
justify-content: center; /* Änderung hier */
left: 50%; /* Zentriert die Buttons horizontal */
transform: translateX(-50%);
z-index: 999;
}

.slider_section .carousel_btn-container .carousel-control-prev,
.slider_section .carousel_btn-container .carousel-control-next {
width: 55px;
height: 55px;
border: none;
border-radius: 100%;
opacity: 1;
background-repeat: no-repeat;
background-size: 14px;
background-position: center;
background-color: #726FB2;
margin: 2px; 
transition: all 0.3s;

}

.slider_section .carousel_btn-container .carousel-control-prev:hover,
.slider_section .carousel_btn-container .carousel-control-next:hover {
background-color: #898ec7;
}

.slider_section .carousel_btn-container .carousel-control-prev {
background-image: url('@/assets/prev.png');
}

.slider_section .carousel_btn-container .carousel-control-next {
background-image: url('@/assets/next.png');
}

.slider_section ol.carousel-indicators {
margin: 0;
width: 75px;
bottom: 45px;
right: 25px;
position: absolute;
display: flex;
justify-content: center;
list-style: none;
padding: 0;
}

.slider_section ol.carousel-indicators li {
width: 12px;
height: 12px;
border-radius: 50%;
background-color: rgba(255, 255, 255, 0.6);
margin: 0 8px;
cursor: pointer;
transition: background-color 0.3s ease;
}

.slider_section ol.carousel-indicators li.active {
background-color: #726FB2;
}


</style>
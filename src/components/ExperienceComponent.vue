<template>
  <section class="experience_section layout_padding">
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="img-box">
            <img src="@/assets/experience-img.png" alt="">
          </div>
        </div>
        <div class="col-md-7">
          <div class="detail-box">
            <div class="heading_container">
              <h2>
                "Finde deinen Weg, wähle dein Studium!"
              </h2>
            </div>
            <p>
              Der Studium O-Mat: Dein verlässlicher Begleiter zur richtigen Studienwahl Studium O-Mat, die Partnerwebseite der Hochschule Bochum, unterstützt dich dabei, den perfekten Studiengang zu finden.
               Mit unserem innovativen Online-Test kannst du deine Interessen und Stärken analysieren und die Studiengänge entdecken, die ideal zu dir passen.
                Zusätzlich bieten wir umfassende Informationen zu den Studiengängen der Hochschule Bochum.
                Wir helfen dir, die beste Entscheidung für deine akademische und berufliche Zukunft zu treffen.
                 Beginne noch heute und entdecke die vielfältigen Möglichkeiten an der Hochschule Bochum. Lass uns gemeinsam deinen Weg gestalten und deine Träume verwirklichen.

            </p><div class="btn-box">
              <RouterLink to="/studiumOMat" class="nav-link btn-1">Mehr erfahren</RouterLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ExperienceSection',

}
</script>

<style scoped>
  
.experience_section .row {
-webkit-box-align: center;
    -ms-flex-align: center;
        align-items: center;
}

.experience_section .detail-box p {
margin-top: 20px;
font-size: 20px;

}

.experience_section .detail-box .btn-box {
display: -webkit-box;
display: -ms-flexbox;
display: flex;
-ms-flex-wrap: wrap;
flex-wrap: wrap;
margin: 45px -5px 0 -5px;

}


.experience_section .detail-box .btn-box a {
text-align: center;
width: 165px;
font-size: 17px;
margin: 5px;

}

.experience_section .detail-box .btn-box .btn-1 {
display: inline-block;
padding: 10px 0;
background-color: #34396E;
color: #ffffff;
-webkit-transition: all 0.3s;
transition: all 0.3s;
border: 2px solid transparent;
border-radius: 15px;
}

.experience_section .detail-box .btn-box .btn-1:hover {
background-color: transparent;
border-color: #34396E;
color: #34396E;
}

.experience_section .detail-box .btn-box .btn-2 {
display: inline-block;
padding: 10px 0;
background-color: #34396E;
color: #ffffff;
-webkit-transition: all 0.3s;
transition: all 0.3s;
border: 1px solid transparent;
border-radius: 15px;
}

.experience_section .detail-box .btn-box .btn-2:hover {
background-color: transparent;
border-color: #1a2e35;
color: #1a2e35;
}

.experience_section .img-box img {
width: 100%;
}
</style>

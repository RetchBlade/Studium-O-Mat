<template>
  <section class="info_section">
    <div class="info_container layout_padding-top">
      <div class="container">
        <div class="info_top">
          <div class="info_logo">
            <img :src="logoImage" alt="" />
            <span>{{ companyName }}</span>
          </div>
          <div class="social_box">
            <a href="#"><img src="@/assets/fb.png" alt=""></a>
            <a href="#"><img src="@/assets/twitter.png" alt=""></a>
            <a href="#"><img src="@/assets/linkedin.png" alt=""></a>
            <a href="#"><img src="@/assets/instagram.png" alt=""></a>
            <a href="#"><img src="@/assets/youtube.png" alt=""></a>
          </div>
        </div>

        <div class="info_main">
          <div class="row">
            <div class="col-md-3 col-lg-2">
              <div class="info_link-box">
                <h5>Schnellzugriff</h5>
                <ul>
                  <li class="nav-item active">
                    <a class="nav-link"><router-link to='/'>Home</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to='/about'>Über uns</router-link> </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to='/work'>Arbeit</router-link></a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link"><router-link to='/category'>Categorien</router-link></a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="col-md-3 col-lg-2 offset-lg-1">
              <h5>Information</h5>
              <p>{{ informationContent }}</p>
            </div>
            <div class="col-md-3 offset-lg-1">
              <div class="info_form">
                <h5>Newsletter</h5>
                <form action="">
                  <input type="email" placeholder="Email">
                  <button>Abonnieren</button>
                </form>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-9 col-md-10 mx-auto">
            <div class="info_contact layout_padding2">
              <div class="row">
                <div class="col-md-3">
                  <a href="#" class="link-box">
                    <div class="img-box">
                      <img src="@/assets/location.png" alt="">
                    </div>
                    <div class="detail-box">
                      <h6>Location</h6>
                      <h6>{{ Location }}</h6>

                    </div>
                  </a>
                </div>
                <div class="col-md-4">
                  <a href="#" class="link-box">
                    <div class="img-box">
                      <img src="@/assets/mail.png" alt="">
                    </div>
                    <div class="detail-box">
                      <h6>{{ email }}</h6>
                    </div>
                  </a>
                </div>
                <div class="col-md-5">
                  <a href="#" class="link-box">
                    <div class="img-box">
                      <img src="@/assets/call.png" alt="">
                    </div>
                    <div class="detail-box">
                      <h6>{{ phoneNumber }}</h6>
                    </div>
                  </a>
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
  name: 'InfoSection',
  data() {
    return {
      companyName: 'Web Pioneers',
      logoImage: require('@/assets/logo_ohneHintergrund.png'),
      informationContent: 'Readable content of a page when looking at its layoutreadable content of a page when looking at its layout',
      email: 'Web-Pioneers@gmail.com',
      phoneNumber: 'Call +15 11111111',
      currentTab: 'Home',
      Location: 'Bochum'
    };
  },
  methods: {
   
  }
};
</script>

<style scoped>
.info_section {
  position: relative;
  background-color: #34396E;
  color: #ffffff;
}

.info_section .info_top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 35px;
  margin-bottom: 75px;
}

.info_section .info_top .info_logo img {
  width: 65px;
}

.info_section .info_top .info_logo span {
  color: #ffffff;
  font-weight: bold;
  font-size: 32px;
}

.info_section .social_box a {
  margin: 0 10px;
}

.info_section ul {
  padding: 0;
}

.info_section ul li {
  list-style-type: none;
  margin: 3px 0;
}

.info_section ul li a {
  color: #ffffff;
}

.info_section .info_link-box {
  display: flex;
  flex-direction: column;
}

.info_section .info_form form input {
  outline: none;
  width: 100%;
  padding: 7px 10px;
}

.info_section .info_form form button {
  display: inline-block;
  padding: 8px 40px;
  background-color: #afaffd;
  color: #ffffff;
  transition: all 0.3s;
  border: 1px solid transparent;
  border-radius: 0;
  border: 1.5px solid #ffffff;
  margin-top: 15px;
  text-transform: uppercase;
  font-size: 15px;
}

.info_section .info_form form button:hover {
  background-color: transparent;
  border-color: #2d2d60;
  color: #54549e;
}

.info_section .info_contact .link-box {
  display: flex;
  align-items: center;
  margin: 30px 0;
  color: #ffffff;
}

.info_section .info_contact .link-box .img-box {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 45px;
  min-height: 45px;
  margin-right: 20px;
}

.info_section .info_contact .link-box .img-box img {
  width: auto;
  height: auto;
  max-width: 30px;
  max-height: 30px;
}

</style>

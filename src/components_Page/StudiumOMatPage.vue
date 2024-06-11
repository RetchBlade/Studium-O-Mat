<template>
    <div>
      <div class="freelance_section layout_padding">
        <div id="accordion">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-5 offset-md-1">
                <div class="detail-box">
                  <div class="heading_container">
                    <h2>
                      Über Studium-O-Mat                  
                    </h2>
                  </div>
                  <div class="tab_container">
                    <div class="t-link-box" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <div class="img-box">
                        <img src="@/assets/f1.png" alt="">
                      </div>
                      <div class="detail-box">
                        <h5>
                            Erklärung ?
                        </h5>
                        <h3>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, qui molestias? Odit minima, commodi est ad, voluptate a facilis necessitatibus dolore, voluptatum voluptates nemo cumque provident dolor enim perferendis perspiciatis.
                        </h3>
                      </div>
                    </div>
                    <div class="t-link-box collapsed" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <div class="img-box">
                        <img src="@/assets/f2.png" alt="">
                      </div>
                      <div class="detail-box">
                        <h5>
                          Weitere Infos
                        </h5>
                        <h3>
                          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi impedit similique porro enim. Beatae, repudiandae nemo laboriosam similique consequatur optio earum, neque expedita omnis excepturi velit minima pariatur odio debitis.
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="collapse show" id="collapseOne" aria-labelledby="headingOne" data-parent="#accordion">
                  <div class="img-box">
                    <img src="@/assets/weblogoGross.png" alt="">
                  </div>
                </div>
                <div class="collapse" id="collapseTwo" aria-labelledby="headingTwo" data-parent="#accordion">
                  <div class="img-box">
                    <img src="@/assets/weblogoGross.png" alt="">
                  </div>
                </div>
                <div class="collapse" id="collapseThree" aria-labelledby="headingThree" data-parent="#accordion">
                  <div class="img-box">
                    <img src="@/assets/weblogoGross.png" alt="">
                  </div>
                </div>
                <div class="collapse" id="collapseFour" aria-labelledby="headingfour" data-parent="#accordion">
                  <div class="img-box">
                    <img src="@/assets/weblogoGross.png" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'StudiumOMatPage'
  }
  </script>
  
  <style scoped>
    
  </style>
  
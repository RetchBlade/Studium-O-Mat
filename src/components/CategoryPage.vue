<template>
    <div>
      <section class="category_section layout_padding">
        <div class="container">
          <div class="heading_container">
            <h2>
              Category
            </h2>
          </div>
          <div class="category_container">
            <div class="box" v-for="(item, index) in categories" :key="index">
              <div class="img-box">
                <img :src="item.image" :alt="item.name">
              </div>
              <div class="detail-box">
                <h5>{{ item.name }}</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CategoryPage',
    data() {
      return {
        categories: [
          { name: 'Design & Arts', image: require('@/assets/c1.png')},
          { name: 'Web Development', image: require('@/assets/c2.png') },
          { name: 'SEO Marketing', image: require('@/assets/c3.png') },
          { name: 'Video Editing', image: require('@/assets/c4.png') },
          { name: 'Logo Design', image: require('@/assets/c5.png') },
          { name: 'Game Design', image: require('@/assets/c6.png') }
        ]
      }
    }
  }
  </script>
  
  <style scoped>
    
.category_section {
  background-color: #1cbbb4;
  color: #ffffff;
  text-align: center;
}

.category_section .heading_container {
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
}

.category_section .heading_container h2 {
  border-bottom: 1px solid #ffffff;
}

.category_section .category_container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
      flex-wrap: wrap;
  -webkit-box-pack: justify;
      -ms-flex-pack: justify;
          justify-content: space-between;
  margin-top: 25px;
}

.category_section .category_container .box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
  margin: 10px 0;
  min-width: 130px;
  -ms-flex-preferred-size: 26%;
      flex-basis: 26%;
}

.category_section .category_container .box .img-box {
  width: 120px;
  height: 120px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
  </style>
  
<template>
  <main id="main">
    <section id="about" class="about">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Welcome to our products management application</h2>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <div class="profile-img-container">
              <img src="../assets/myphoto.png" class="img-fluid rounded-circle" alt="Profile Photo">
            </div>
          </div>
          <div class="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Mohamed Tijani DAOUD</h3>
            <p class="fst-italic">
              Third-year software engineering student            </p>
       
            <p>
              I am pleased to present to you my modest product management application.
            </p>






            
          </div>
        </div>

        <section id="services" class="services">
      <div class="container" data-aos="fade-up">

        <div class="section-title">
          <h2>Technologies</h2>
        </div>

        <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-blue">
              <div class="icon">
                <img viewBox="0 0 600 600" src="../assets/node.png" style="height: 70px;width: 70px;" />
                <i class="bx bxl-dribbble"></i>
              </div>
              <h4><a href="">Node js</a></h4>
              <p>Node.js is a popular and versatile open-source JavaScript runtime built on Chrome's V8 JavaScript engine. With Node.js, you can develop server-side applications that can listen for incoming network traffic and make real-time updates to clients.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-orange ">
              <div class="icon">
                <img viewBox="0 0 600 600" src="../assets/express.png" style="height: 60px;width: 120px;" />
               
              </div>
              <h4><a href="">Express js</a></h4>
              <p>Express.js is a popular and powerful web framework used for building web applications and APIs.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-pink">
              <div class="icon">
                <img viewBox="0 0 600 600" src="../assets/vuejs.png" style="height: 60px;width: 120px;" />

              </div>
              <h4><a href="">Vue js</a></h4>
              <p>Vue.js, est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="100">
            <div class="icon-box iconbox-yellow">
              <div class="icon">
                <img viewBox="0 0 600 600" src="../assets/mongo.png" style="height: 60px;width: 120px;" />

              </div>
              <h4><a href="">Mongo DB</a></h4>
              <p>MongoDB est un système de gestion de base de données orienté documents, répartissable sur un nombre quelconque d'ordinateurs et ne nécessitant pas de schéma prédéfini des données. Il est écrit en C++.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box iconbox-red">
              <div class="icon">
                <img viewBox="0 0 600 600" src="../assets/cloudflare.png" style="height: 60px;width: 120px;" />

              </div>
              <h4><a href="">CloudFlare pages</a></h4>
              <p>Cloudflare Pages is a JAMstack platform for frontend developers to collaborate and deploy websites.</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4" data-aos="zoom-in" data-aos-delay="300">
            <div class="icon-box iconbox-teal">
              <div class="icon">
                <img viewBox="0 0 600 600" src="../assets/vercel.png" style="height: 60px;width: 120px;" />

              </div>
              <h4><a href="">Vercel</a></h4>
              <p>Vercel is a web development platform that provides hosting and collaboration solutions for websites and web applications</p>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Services Section -->

      </div>
    </section><!-- End About Section -->
  </main>
</template>

<script setup lang="ts">
</script>

<style scoped>
 /*--------------------------------------------------------------
# About
--------------------------------------------------------------*/
.about .content h3 {
  font-weight: 700;
  font-size: 26px;
  color: #555555;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-bottom: 10px;
}

.about .content ul i {
  font-size: 20px;
  padding-right: 2px;
  color: #34b7a7;
}

.about .content p:last-child {
  margin-bottom: 0;
}

.section-title {
  text-align: center;
  padding-bottom: 30px;
}

#main {
  margin-top: 50px;
  margin-bottom: 100px;
}

@media (max-width: 992px) {
  #main {
    margin-top: 30px;
    margin-bottom: 100px;

  }
}

.profile-img-container {
  overflow: hidden;
  border-radius: 50%;
  width: 200px; /* Adjust the size as needed */
  height: 200px; /* Adjust the size as needed */
  margin: 0 auto;
}

.profile-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}



/*--------------------------------------------------------------
# Services
--------------------------------------------------------------*/
.services .icon-box {
  text-align: center;
  padding: 70px 20px 80px 20px;
  transition: all ease-in-out 0.3s;
  background: #fff;
  box-shadow: 0px 0 35px 0 rgba(0, 0, 0, 0.08);
}

.services .icon-box .icon {
  margin: 0 auto;
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
  position: relative;
}

.services .icon-box .icon i {
  font-size: 36px;
  transition: 0.5s;
  position: relative;
}

.services .icon-box .icon svg {
  position: absolute;
  top: 0;
  left: 0;
}

.services .icon-box .icon svg path {
  transition: 0.5s;
  fill: #f5f5f5;
}

.services .icon-box h4 {
  font-weight: 600;
  margin: 10px 0 15px 0;
  font-size: 22px;
}

.services .icon-box h4 a {
  color: #222222;
  transition: ease-in-out 0.3s;
}

.services .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

.services .iconbox-blue i {
  color: #47aeff;
}

.services .iconbox-blue:hover .icon i {
  color: #fff;
}

.services .iconbox-blue:hover .icon path {
  fill: #47aeff;
}

.services .iconbox-orange i {
  color: #ffa76e;
}

.services .iconbox-orange:hover .icon i {
  color: #fff;
}

.services .iconbox-orange:hover .icon path {
  fill: #ffa76e;
}

.services .iconbox-pink i {
  color: #e80368;
}

.services .iconbox-pink:hover .icon i {
  color: #fff;
}

.services .iconbox-pink:hover .icon path {
  fill: #e80368;
}

.services .iconbox-yellow i {
  color: #ffbb2c;
}

.services .iconbox-yellow:hover .icon i {
  color: #fff;
}

.services .iconbox-yellow:hover .icon path {
  fill: #ffbb2c;
}

.services .iconbox-red i {
  color: #ff5828;
}

.services .iconbox-red:hover .icon i {
  color: #fff;
}

.services .iconbox-red:hover .icon path {
  fill: #ff5828;
}

.services .iconbox-teal i {
  color: #11dbcf;
}

.services .iconbox-teal:hover .icon i {
  color: #fff;
}

.services .iconbox-teal:hover .icon path {
  fill: #11dbcf;
}



</style>

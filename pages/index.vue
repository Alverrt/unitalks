<template>
  <div>
    <div class="custom-shape-divider-top-1614698319">
      <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill" />
      </svg>
    </div>
    <div class="bg">
      <div class="container">
        <div class="title-and-desc">
          <h1 class="header-1">
            Biseyler'e Hosgeldin
          </h1>
          <p class="desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error repudiandae est neque tempore omnis dolores?
          </p>
        </div>
        <div class="main-content">
          <img class="login-page-img" src="~assets/img/designer.svg" alt="">
          <div class="vertical-line"></div>
          <div class="login-area">
            <login-box />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LoginBox from '~/components/LoginBox.vue'
export default { components: { LoginBox } }
</script>

<style>
.bg {
  background: rgb(255,119,51);
  background: linear-gradient(324deg, rgba(255,119,51,1) 61%, rgba(235,86,180,1) 90%);
}

.container {
  min-height: 100vh;
  margin: 0 auto;
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.title-and-desc {
  text-align: center;
  margin-bottom: 100px;
  color: rgba(255, 255, 255, .9);
  font-size: 20px;
}

.header-1, .desc {
  padding: 10px 0;
  text-shadow: 2px 2px rgba(0,0,0,.6);
}

.main-content {
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 400px;
}

.login-page-img {
  display: block;
  height: 100%;
}

.custom-shape-divider-top-1614698319 {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
}

.custom-shape-divider-top-1614698319 svg {
    position: relative;
    display: block;
    width: calc(100% + 1.3px);
    height: 150px;
}

.custom-shape-divider-top-1614698319 .shape-fill {
    fill: #FFFFFF;
}
</style>

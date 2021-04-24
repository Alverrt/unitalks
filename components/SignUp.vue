<template>
  <div class="sign-up-bg" @click="disableSignUp($event)">
    <div class="sign-up-wrapper">
      <div class="sign-up-texts">
        <div class="sign-up-logo">
          Logo
        </div>
      </div>
      <div class="sign-up-form">
        <h3 class="sign-up-label">
          Sign Up
        </h3>
        <input id="username" type="text" placeholder="Username">
        <input id="email" type="email" placeholder="E-Mail">
        <input id="password" type="password" placeholder="Password">
        <input type="password" placeholder="Password Vertification">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    disableSignUp (event) {
      if (event.target === document.querySelector('.sign-up-bg')) {
        this.$store.commit('home/toggle')
      }
    }
  }
}
</script>

<style>
.sign-up-bg {
    position: absolute;
    z-index: 40;
    height: 100%;
    width: 100%;
    background: rgba(0, 0, 0, .6);
    display: flex;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(2px);
}

.sign-up-wrapper {
    height: 500px;
    width: 400px;
    background-color: rgba(255, 255, 255, .95);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
}

.sign-up-texts {
  padding: 10px;
}

.sign-up-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 3 0 auto;
}

.sign-up-form > input {
  margin: 10px 0;
  width: 70%;
  padding: 10px 5px;
  border: 1px solid gray;
  border-radius: 10px;
  font-size: 18px;
}

body {
    overflow-y: hidden;
}

.sign-up-label {
  text-align: center;
  padding: 7px 0;
}

.sign-up-logo {
  text-align: center;
  margin-top: 10px;
  flex: 2 0 auto;
  height: 50px;
}
</style>

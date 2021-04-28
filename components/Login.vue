<template>
  <div class="login-bg" @click="disablelogin($event)">
    <div class="login-wrapper">
      <div class="login-texts">
        <div class="login-logo">
          Logo
        </div>
      </div>
      <div class="login-form">
        <label for="username">Username veya E-Mail</label>
        <input id="username" class="login-inputs" type="text" placeholder="Username" autocomplete="off">
        <label for="password">Password</label>
        <input id="password" class="login-inputs" type="password" placeholder="Password" autocomplete="off">
        <a class="login-submit-button">
          Giris Yap
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  beforeMount () {
    document.querySelector('body').style.overflowY = 'hidden'
  },
  beforeDestroy () {
    document.querySelector('body').style.overflowY = 'auto'
  },
  methods: {
    disablelogin (event) {
      if (event.target === document.querySelector('.login-bg')) {
        this.$store.commit('home/toggleLogin')
      }
    }
  }
}
</script>

<style scoped>
label {
  width: 70%;
  float: left;
}
.login-bg {
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

.login-wrapper {
    height: 500px;
    width: 400px;
    background-color: rgba(255, 255, 255, .95);
    border-radius: 16px;
    display: flex;
    flex-direction: column;
}

.login-texts {
  padding: 10px;
  min-height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 3 0 auto;
}

.login-form > input {
  margin: 10px 0;
  width: 70%;
  padding: 10px 0 10px 8px;
  border: 1px solid gray;
  border-radius: 4px;
  font-size: 15px;
  outline: none;
}

.login-form > input:focus {
  box-shadow: 0 0 5px 2px #f15c41;
}

.login-label {
  text-align: center;
  padding: 8px 0;
}

.login-logo {
  text-align: center;
  margin-top: 10px;
  font-size: 32px;
  letter-spacing: 4px;
}

.login-submit-button {
  background: linear-gradient(to right,#e052a0,#f15c41);
  padding: 10px 25px;
  margin-top: 21px;
  text-decoration: none;
  color: #ffffff;
  border-radius: 6px;
  cursor: pointer;

  box-shadow: 0 0 10px 0px #f15c41;
}

.login-submit-button:hover {
  box-shadow: 0 0 10px 2px #f15c41;
}
</style>

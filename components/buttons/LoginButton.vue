<template>
  <a class="login-button" @click="appearLogin">Giris Yap</a>
</template>

<script>
export default {
  methods: {
    appearLogin () {
      this.$store.commit('home/toggleLogin')
    }
  }
}
</script>

<style>
.login-button {
  padding: 10px 30px;
  text-decoration: none;
  color: #ffffff;
  border: 2px solid #f15c41;
  border-radius: 10px;
  box-shadow: 0 0 15px 1px #e052a0;
  cursor: pointer;
}

.login-button:hover {
    box-shadow: 0 0 20px 4px #e052a0;
}
</style>

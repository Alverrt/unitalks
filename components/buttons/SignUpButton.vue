<template>
  <a class="signup-button" @click="appearSignUp">Kayit Ol</a>
</template>

<script>
export default {
  methods: {
    appearSignUp () {
      this.$store.commit('home/toggle')
    }
  }
}
</script>

<style>
.signup-button {
  background: linear-gradient(to right,#e052a0,#f15c41);
  padding: 10px 30px;
  text-decoration: none;
  color: #ffffff;
  border-radius: 6px;
  box-shadow: 0 0 20px 2px #f15c41;
}

.signup-button:hover {
box-shadow: 0 0 25px 4px #f15c41;
}
</style>

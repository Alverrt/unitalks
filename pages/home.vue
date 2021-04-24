<template>
  <div class="bg">
    <SignUp v-if="getSignUpState" />
    <Navbar />
    <div class="post-filter">
      <PostFilter />
    </div>
    <div class="container">
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
      <PostCard />
    </div>
  </div>
</template>
<script>

export default {
  computed: {
    getSignUpState () {
      return this.$store.getters['home/getSignUpState']
    }
  }
}
</script>
<style>
.bg {
  min-height: 100vh;
  background: rgb(255,119,51);
  background: linear-gradient(324deg, rgba(255,119,51,1) 61%, rgba(235,86,180,1) 90%);
  width: 100%;
}

.container {
    margin: 0 auto;
    width: 70%;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}

.post-filter {
  width: 30%;
  margin: 40px auto 0 auto;
}
</style>

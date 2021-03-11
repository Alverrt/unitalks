<template>
  <div class="bg">
    <Navbar />
    <div class="container">
      <CommentPostCard />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
  min-height: 100vh;
  background: rgb(255,119,51);
  background: linear-gradient(324deg, rgba(255,119,51,1) 61%, rgba(235,86,180,1) 90%);
}

.container {
    width: 70%;
    margin: 0 auto;
}
</style>

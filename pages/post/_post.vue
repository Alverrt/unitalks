<template>
  <div class="bg">
    <Navbar />
    <div class="container">
      <CommentPostCard />
      <CommentAnswer class="post-answer-first" />
      <CommentAnswer class="post-answer-mid" />
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
    width: 60%;
    margin: 0 auto;
    padding: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.post-answer-first {
  margin: 40px 0 20px 0;
}

.post-answer-mid {
  margin: 20px 0;
}
</style>

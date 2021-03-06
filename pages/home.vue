<template>
  <div class="bg">
    <Navbar />
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

}
</script>
<style>
.bg {
  min-height: 100vh;
  background: rgb(255,119,51);
  background: linear-gradient(324deg, rgba(255,119,51,1) 61%, rgba(235,86,180,1) 90%);
}

.container {
    margin: 0 auto;
    width: 70%;
    padding: 50px 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
</style>

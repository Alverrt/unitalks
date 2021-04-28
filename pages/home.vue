<template>
  <div class="bg">
    <SignUp v-if="getSignUpState" />
    <Login v-if="getLoginState" />
    <Navbar />
    <div class="post-filter">
      <PostFilter />
    </div>
    <div class="add-post-button-wrapper">
      <div class="add-new-post">
        <NewPostButton />
      </div>
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
import NewPostButton from '~/components/buttons/NewPostButton.vue'

export default {
  components: { NewPostButton },
  computed: {
    getSignUpState () {
      return this.$store.getters['home/getSignUpState']
    },
    getLoginState () {
      return this.$store.getters['home/getLoginState']
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

.add-post-button-wrapper {
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
}

.add-new-post {
  margin-left: auto;
}
</style>

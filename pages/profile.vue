<template>
  <div class="bg">
    <Navbar />
    <div class="container">
      <div class="profile-wrapper">
        <div class="username-wrapper">
          <div class="username">
            -- &ExampleUserName
          </div>
          <div class="settings-ico"></div>
        </div>
        <div class="profile-info">
          <div class="left-profile-side">
            <div class="bio"></div>
            <div class="social-and-zodiac-wrapper">
              <div class="social-links"></div>
              <div class="zodiac-stats-wrapper">
                <div class="zodiac-mbti"></div>
                <div class="profile-stats"></div>
              </div>
            </div>
          </div>
          <div class="tag-area"></div>
        </div>
      </div>
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
    height: 100%;
    padding: 50px 0;
    display: flex;
    justify-content: center;
}

.profile-wrapper {
  width: 80%;
  height: 80vh;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 5px #000000;
  padding: 25px;
  opacity: .9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>

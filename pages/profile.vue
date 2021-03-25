<template>
  <div class="bg">
    <Navbar />
    <div class="container">
      <div class="profile-wrapper">
        <div class="top-wrapper">
          <div class="profile-photo"></div>
          <div class="bio">
            <p class="bio-text">
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iure dolor maiores odio quo amet qui repellendus esse similique optio. "
            </p>
          </div>
        </div>
        <div class="bottom-wraper">
          <div class="username-stats-wraper">
            <div class="username">
              <p class="username-text">
                -- &ExampleUserName
              </p>
            </div>
            <div class="stats-area"></div>
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
  padding: 20px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  opacity: .85;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 5px #000000;
}

.top-wrapper {
  border: 1px solid red;
  height: 45%;
  width: 100%;
  padding: 10px;
  display: flex;
}

.profile-photo {
  border: 1px solid red;
  width: 280px;
  height: 100%;
}

.bio {
  flex-grow: 1;
  max-width: 65%;
  border: 1px solid blue;
  height: auto;
  margin-left: 22px;
  padding: 0 10px;
  display: flex;
  align-items: center;
}

.bio p {
  display: inline-block;
  letter-spacing: .8px;
}

.bottom-wraper {
  border: 1px solid blue;
  height: 54%;
  width: 100%;
  margin-top: auto;
  padding: 10px;
  display: flex;
}

.username-stats-wraper {
  width: 61%;
  height: 100%;
  padding: 5px;
  border: 1px solid green;
  display: flex;
  flex-direction: column;
}

.tag-area {
  width: 37%;
  margin-left: auto;
  padding: 5px;
  height: 100%;
  border: 1px solid purple;
}

.username {
  width: 280px;
  height: 30px;
  border: 1px solid brown;
}

.username p {
  display: inline-block;
  font-size: 21px;
}

.stats-area {
  height: 80%;
  width: 100%;
  border: 1px solid tomato;
  margin-top: auto;
}
</style>

<!--
  border-radius: 10px;
  box-shadow: 5px 5px 30px 5px #000000;
  padding: 25px;
  opacity: .9;
 -->

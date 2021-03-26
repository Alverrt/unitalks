<template>
  <div class="bg">
    <Navbar />
    <div class="container">
      <div class="profile-wrapper">
        <div class="top-wrapper">
          <div class="profile-photo">
            <img src="https://meralkoraltan.com/wp-content/uploads/2013/08/42-280x280.jpg" alt="">
          </div>
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
            <div class="stats-area">
              <div class="stat total-hit">
                <div class="stat-name">
                  Toplam Hit
                </div>
                <div class="stat-count">
                  197
                </div>
              </div>
              <div class="stat total-hit">
                <div class="stat-name">
                  Toplam Hit
                </div>
                <div class="stat-count">
                  197
                </div>
              </div>
              <div class="stat total-hit">
                <div class="stat-name">
                  Toplam Hit
                </div>
                <div class="stat-count">
                  197
                </div>
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
  padding: 20px;
  height: 80vh;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  opacity: .9;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 5px #000000;
}

.top-wrapper {
  border: 1px solid red;
  height: 45%;
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
}

.profile-photo {
  border: 1px solid red;
  width: 200px;
  height: 200px;
}

.profile-photo img {
  display: inline-block;
  border-radius: 130px;
  width: 100%;
}

.bio {
  flex-grow: 1;
  max-width: 65%;
  border: 1px solid blue;
  height: auto;
  margin: 0 auto;
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
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.total-hit {
  height: 120px;
  width: 110px;
  border-radius: 10px;
  box-shadow: 1px 1px 20px 1px #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
}

.stat-name {
  font-size: 20px;
}

.stat-count {
  font-size: 36px;
  letter-spacing: 2px;
  background: -webkit-linear-gradient(#ff7733, #eb56b4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<!--
  border-radius: 10px;
  box-shadow: 5px 5px 30px 5px #000000;
  padding: 25px;
  opacity: .9;
 -->

<template>
  <div class="bg">
    <Navbar />
    <div class="container">
      <div class="profile-wrapper">
        <div class="upper-profile">
          <div class="col-12 first-row">
            <div class="col-6 user-name">
              <span>-- &ExampleUserName</span>
            </div>
            <div class="col-6 settings">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="cog"
                class="svg-inline--fa fa-cog fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              ><path fill="currentColor" d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z" /></svg>
            </div>
          </div>
        </div>
        <div class="lower-profile"></div>
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
    flex-wrap: wrap;
    justify-content: space-between;
}

.profile-wrapper {
  width: 100%;
  height: 50vh;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 5px 5px 30px 5px #000000;
  padding: 25px;
  opacity: .9;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.upper-profile {
  width: 100%;
  height: 47%;
}

.col-12 {
  width: 100%;
}

.first-row {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.col-6 {
  width: 46%;
}

.user-name {
  font-family: 'Montserrat-B', Arial, Helvetica, sans-serif;
  font-size: 26px;
  letter-spacing: 1.2px;
  border-radius: 10px;
}

.settings svg {
  width: 26px;
  float: right;
  color: orangered;
  filter: drop-shadow(1px 1px 4px rgba(235,86,180, .5));
}

.lower-profile {
  width: 100%;
  height: 47%;
}
</style>

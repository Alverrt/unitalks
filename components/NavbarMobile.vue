<template>
  <div class="navbar-mobile">
    <div class="navbar-container">
      <ul class="nav-items">
        <li class="nav-item">
          <img src="~assets/img/user.svg" width="30px" style="color: white" alt=""> <span>En Popülerler</span>
        </li>
        <li class="nav-item">
          Niltalks Nedir?
        </li>
        <li class="nav-item">
          Link
        </li>
        <li class="nav-item">
          Link
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar-mobile {
    background-color: rgba(70, 27, 48, .95);
    position: absolute;
    z-index: 31;
    top: 100px;
    right: 0;
    height: 40vh;
    width: 300px;
    color: #ffffff;
    display: flex;
    justify-content: center;
}

.navbar-container {
    width: 70%;
    height: 100%;
    display: flex;
    align-items: center;
}

.nav-items {
    padding: 0;
    display: flex;
    flex-direction: column;
    height: 90%;
    width: 100%;
}

.nav-item {
    width: 90%;
    list-style: none;
    flex: 1 1;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.nav-item img {
    filter: invert(93%) sepia(7%) saturate(27%) hue-rotate(272deg) brightness(106%) contrast(110%);
}
</style>

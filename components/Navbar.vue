<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="brand-field">
        Logo
      </div>
      <div class="nav-links">
        <ul class="nav-items">
          <li class="nav-item">
            Link
          </li>
          <li class="nav-item">
            Link
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
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.navbar {
    background-color: rgba(0, 0, 0, .7);
    position: relative;
    top: 0;
    left: 0;
    height: 70px;
    width: 100%;
    color: #ffffff;
    display: flex;
    justify-content: center;
}

.navbar-container {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.brand-field, .nav-links {
    padding: 15px;
}

.brand-field {
    font-size: 24px;
}

.nav-items {
    display: flex;
}

.nav-item {
    padding: 0 20px;
    list-style: none;
}
</style>

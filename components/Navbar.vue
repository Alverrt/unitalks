<template>
  <div class="navbar">
    <div class="navbar-container">
      <div class="nav-links">
        <ul class="nav-items">
          <li class="nav-item">
            En Popülerler
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

      <div class="brand-field">
        Logo
      </div>

      <div class="login-and-signup-buttons">
        <LoginButton />
        <SignUpButton />
      </div>
    </div>
  </div>
</template>

<script>
import SignUpButton from '~/components/buttons/SignUpButton.vue'
import LoginButton from '~/components/buttons/LoginButton.vue'
export default {
  components: { SignUpButton, LoginButton }
}
</script>

<style scoped>
.navbar {
    background-color: rgba(0, 0, 0, .7);
    position: relative;
    top: 0;
    left: 0;
    height: 100px;
    width: 100%;
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

.brand-field, .nav-links {
    padding: 20px 0;
}

.brand-field {
    font-size: 24px;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 80px;
    text-align: center;
}

.nav-items {
    display: flex;
    padding: 0;
}

.nav-item {
    margin: 0 20px 0 0;
    list-style: none;
}

.login-and-signup-buttons {
  margin-left: auto;
}

.login-and-signup-buttons * {
  margin-right: 40px;
}
</style>

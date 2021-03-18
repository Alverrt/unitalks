<template>
  <div class="navbar">
    <div class="navbar-container">
      <div v-if="!isMobile" class="nav-links">
        <ul class="nav-items">
          <li class="nav-item">
            En Popülerler
          </li>
          <li class="nav-item">
            Nasdf Nedir?
          </li>
          <li class="nav-item">
            Link
          </li>
          <li class="nav-item">
            Link
          </li>
        </ul>
      </div>

      <div :class="{'brand-mobile': isMobile, 'brand-field': !isMobile}">
        Logo
      </div>

      <div class="login-and-signup-buttons">
        <LoginButton v-if="!isMobile" />
        <SignUpButton v-if="!isMobile" />
        <ProfileButton v-if="!isMobile && isUserLoggedIn" />
      </div>
      <div v-if="isMobile" class="hamburger-ico" @click="openMobileNav">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="bars"
          class="svg-inline--fa fa-bars fa-w-14"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        ><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z" /></svg>
      </div>
    </div>
    <NavbarMobile v-if="isMobile && mobileNav" />
  </div>
</template>

<script>
import SignUpButton from '~/components/buttons/SignUpButton.vue'
import LoginButton from '~/components/buttons/LoginButton.vue'
import ProfileButton from '~/components/buttons/ProfileButton.vue'
import NavbarMobile from '~/components/NavbarMobile.vue'
export default {
  components: { SignUpButton, LoginButton, ProfileButton, NavbarMobile },
  data () {
    return {
      isMobile: false,
      mobileNav: false,
      isUserLoggedIn: false
    }
  },
  mounted () {
    this.handleView()
    addEventListener('resize', this.handleView)
  },
  methods: {
    handleView () {
      this.isMobile = window.innerWidth <= 500
    },
    openMobileNav () {
      this.mobileNav = !this.mobileNav
    }
  }
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

.brand-mobile {
  font-size: 24px;
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

.hamburger-ico svg {
  color: #ffffff;
  width: 30px;
  height: 30px;
}
</style>

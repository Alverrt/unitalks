<template>
  <div class="profile-link">
    <img class="profile-icon" src="~assets/img/user.svg" alt="">
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.profile-link {
    width: 40px;
    height: 40px;
}

.profile-icon {
    width: 100%;
    filter: invert(64%) sepia(76%) saturate(3234%) hue-rotate(336deg) brightness(100%) contrast(103%) drop-shadow( 1px 1px 6px rgba(255,255,255,.7));
    -webkit-filter: invert(64%) sepia(76%) saturate(3234%) hue-rotate(336deg) brightness(100%) contrast(103%) drop-shadow( 1px 1px 6px rgba(255,255,255,.7));
    cursor: pointer;
}

.profile-icon:hover {
    filter: invert(64%) sepia(76%) saturate(3234%) hue-rotate(336deg) brightness(100%) contrast(103%) drop-shadow( 1px 1px 6px rgba(235,86,180,1));
    -webkit-filter: invert(64%) sepia(76%) saturate(3234%) hue-rotate(336deg) brightness(100%) contrast(103%) drop-shadow( 1px 1px 6px rgba(235,86,180,1));
}
</style>

<template>
  <div class="bottom-field">
    <div class="ico-wrapper">
      <img src="~assets/img/heart.svg" class="heart-ico" height="100%" alt=""><span>1231</span>
    </div>
    <div class="ico-wrapper">
      <img src="~assets/img/speech-bubble.svg" class="comment-ico" height="100%" alt=""><span>1231</span>
    </div>
    <div class="ico-wrapper">
      <img src="~assets/img/share.svg" class="share-ico" height="100%" alt=""><span>1231</span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

.bottom-field {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px 0;
  height: 40px;
}

.heart-ico {
  filter: invert(19%) sepia(83%) saturate(5691%) hue-rotate(355deg) brightness(105%) contrast(123%);
}

.comment-ico {
  filter: invert(19%) sepia(83%) saturate(5691%) hue-rotate(355deg) brightness(105%) contrast(123%);
}

.share-ico {
  filter: invert(19%) sepia(83%) saturate(5691%) hue-rotate(355deg) brightness(105%) contrast(123%);
}

.ico-wrapper {
  height: 100%;
  display: flex;
  justify-content: space-between;
  width: 18%;
  align-items: center;
}
</style>

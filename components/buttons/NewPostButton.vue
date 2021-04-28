<template>
  <div class="button-bg">
    <span class="plus">+</span><a class="add-new-post-button" href=""> Yeni Pin Ekle</a>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.button-bg {
  background-color: white;
  width: auto;
  height: auto;
  padding: 12px 47px;
  border-radius: 10px;
  box-shadow: 1px 1px 20px 5px rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.button-bg:hover {
    box-shadow: 0 0 25px 4px rgba(255, 255, 255, 0.4);
}
.add-new-post-button {
  text-decoration: none;
  background: -webkit-linear-gradient(#ff7733, #eb56b4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 19px;
}

.plus {
  background: -webkit-linear-gradient(#ff7733, #eb56b4);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-right: 20px;
  font-size: 32px;
}
</style>

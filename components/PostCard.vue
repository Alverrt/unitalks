<template>
  <div class="post-card">
    <div class="image-field">
      <img src="~assets/img/liberty.svg" alt="" srcset="">
    </div>
    <div class="text-field">
      <h1 class="post-card-heading">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis, totam!
      </h1>
      <hr>
      <p class="post-card-text">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, modi
        ratione iste, eos eum placeat sunt maxime delectus beatae magni dolor
        amet velit voluptatum deserunt? Voluptatibus incidunt omnis ab,
        repudiandae voluptate repellendus iure, alias recusandae accusantium
        eligendi optio non maxime tenetur doloribus laborum quo possimus
        aperiam! Illo hic officiis dolorem.
      </p>
    </div>
    <div class="bottom-field"></div>
  </div>
</template>
<script>
export default {}
</script>
<style scoped>
.post-card {
  width: 400px;
  height: auto;
  background-color: #ffffff;
  opacity: .85;
  border-radius: 10px;
  box-shadow: 5px 5px 45px 5px #000000;
  display: flex;
  flex-direction: column;
  padding: 20px;
  margin-bottom: 50px;
}

.image-field {
  max-height: 220px;
}

.image-field img {
    width: 100%;
    max-height: inherit;
}

.post-card-heading {
    margin: 20px 0;
}

.post-card-text {
    margin: 20px 0;
    line-height: 170%;
    letter-spacing: 0.8px;
}
</style>

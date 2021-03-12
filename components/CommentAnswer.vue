<template>
  <div class="post-answer">
    <div class="text-field">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        fugiat assumenda, doloremque qui consequuntur voluptates ut laudantium
        culpa dicta, cum accusantium iure harum, aspernatur id ipsum inventore.
        Iste, soluta tenetur?
      </p>
    </div>
    <div class="post-bottom">
      <PostBottom class="social-buttons" />
      <div class="username-field">
        <span>-- </span><span class="sender-name">&ExampleUserName</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.post-answer {
  width: 92%;
  align-self: flex-end;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px 30px 20px 30px;
  box-shadow: 2px 2px 20px 3px #000000;
  opacity: 0.9;
}

.post-bottom {
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}

.social-buttons {
  min-width: 35%;
}

.sender-name {
  cursor: pointer;
}

.sender-name:hover {
  text-decoration: underline;
}

.text-field {
  margin: 30px 0 10px 0;
  line-height: 24px;
  letter-spacing: 0.8px;
}
</style>

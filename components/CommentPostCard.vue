<template>
  <div class="comment-post-card">
    <div class="text-field">
      <h1 class="post-card-heading">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        quibusdam.
      </h1>
      <p class="post-card-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab id rerum
        illo, quisquam expedita tempora harum. Excepturi reprehenderit iure
        voluptate! Unde pariatur nemo reiciendis exercitationem cupiditate ea,
        nisi eos saepe expedita atque tempore iusto omnis culpa voluptate! Harum
        officia explicabo blanditiis quidem! Natus distinctio hic eligendi
        pariatur accusantium. Rerum, veritatis.
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

<style>
.comment-post-card {
  width: 100%;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px 30px 20px 30px;
  box-shadow: 2px 2px 20px 3px #000000;
  opacity: .9;
  margin: 0 auto;
}

.post-card-heading {
  margin: 10px 0;
}

.post-card-text {
  margin: 30px 0 10px 0;
  line-height: 24px;
  letter-spacing: 0.8px;
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
</style>

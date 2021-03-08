<template>
  <div class="filter-wrapper">
    <span class="most-faved">
      En çok beğenilenler
    </span>
    <span class="newest">
      En yeni
    </span>
    <span class="oldest">
      En eski
    </span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.filter-wrapper {
    border-radius: 12px;
    background: #ffffff;
    padding: 15px;
    box-shadow: 1px 1px 20px 1px #000000;
    display: flex;
    justify-content: space-around;
    align-items: center;
}

.most-faved, .oldest, .newest {
    border-bottom: 1px solid #000000;
    padding-bottom: 1px;
    cursor: pointer;
}

.most-faved:hover {
    color: #f15c41;
    border-bottom-color: #f15c41;
}

.newest:hover {
    color: #f15c41;
    border-bottom-color: #f15c41;
}

.oldest:hover {
    color: #f15c41;
    border-bottom-color: #f15c41;
}
</style>

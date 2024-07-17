<template>
  <div class="my">
    <h1>首页</h1>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, ref } from "vue";
</script>

<style scoped>
.home {
  /* flex: 1;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: bisque; */
  /* background-color: rgba(0, 0, 0, 0.8); */
}
.home-img-bg {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.home-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
}

.home-box {
  width: 100px;
  height: 200px;
  background-color: antiquewhite;
}
</style>

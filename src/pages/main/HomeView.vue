<template>
  <div class="my">
    <h1>首页</h1>

    <input type="file" multiple @change="onFileChange" />
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, ref, onMounted } from "vue";

import { getHomeData } from "../../modules/api/index";
import { uploadImgs } from "../../modules/network/upload";

onMounted(() => {
  getHomeData("HomeView mounted");
});

function onFileChange(e) {
  const files = e.target.files;
  console.log(files);
  const list = [];
  for (let i = 0; i < files.length; i++) {
    list.push(files[i]);
  }

  uploadImgs(list);
}
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

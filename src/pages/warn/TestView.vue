<template>
  <div class="test">
    <h1>This is an test page</h1>
    <input type="file" multiple @change="onFileChange" />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

import { uploadImgs } from '../../modules/network/upload';


function onFileChange(e) {
  const files = e.target.files;
  console.log(files);
  const list = [];
  for (let i = 0; i < files.length; i++) {
    list.push(files[i]);
  }

  if(list.length > 0) {
    uploadImgs(list);
  }
}
</script>

<style>
.test {
  display: flex;
  align-items: center;
}
</style>

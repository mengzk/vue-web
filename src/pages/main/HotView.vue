<template>
  <div class="my">
    <h1>热点</h1>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, ref } from "vue";

onMounted(() => {
  console.log("onMounted ---> HotView");
});

onActivated(() => {
  console.log("onActivated ---> HotView");
});

onDeactivated(() => {
  console.log("onDeactivated ---> HotView");
});
</script>

<style scoped>
.home {
  /* flex: 1;
  display: flex;
  flex-direction: column;
  position: relative; */
}
</style>

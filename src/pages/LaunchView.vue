<template>
  <div class="launch">
    <h1>加载中...</h1>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
onMounted(() => {
  const timer3 = setTimeout(() => {
    clearTimeout(timer3);
    router.push("/home");
  }, 1000);
});
</script>

<style scoped>
.launch {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: beige;
  height: 100vh;
}
</style>

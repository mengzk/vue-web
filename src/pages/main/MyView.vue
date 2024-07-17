<template>
  <div class="my">
    <h1>我的</h1>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const count = ref(5);

function handleClick() {
  console.log("click");
  // router.push('/login');
  count.value += 5;
  count.value += 5;
  alert(count.value);
  count.value += 5;
  count.value += 5;
}

function handleClick2() {
  console.log("mouse enter");
  router.push("/lognotfoundin");
}
</script>

<style scoped>
.my {
  /* flex: 1;
  display: flex;
  flex-direction: column;
  position: relative; */
  /* background-color: rgba(0, 0, 0, 0.8); */
}
</style>

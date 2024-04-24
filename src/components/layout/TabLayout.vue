<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <section class="container">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </section>
</template>

<style scoped>
.container {
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
</style>

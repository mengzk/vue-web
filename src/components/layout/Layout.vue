<script setup></script>

<template>
  <section class="container">
    <router-view>
      <template #default="{ Component, route }">
        <keep-alive>
          <component :is="Component" :key="route.fullPath" />
        </keep-alive>
      </template>
    </router-view>
    <Debug></Debug>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}
</style>

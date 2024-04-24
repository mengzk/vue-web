<template>
  <div class="workbench">
    <div class="grid-panel">
      <router-link to="/workbench/about">Overview</router-link>
      <router-link to="/workbench/user">Notes</router-link>
    </div>
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
    <Layout />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";

import Layout from "@/components/layout/Layout.vue";

const router = useRouter();
</script>

<style scoped>
.workbench {
  display: flex;
  height: 100vh;
}
.grid-panel {
  width: 300px;
  background-color: antiquewhite;
}
</style>

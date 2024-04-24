<template>
  <div class="worktab">
    <div class="grid-panel">
      <router-link to="/worktab/about">Overview</router-link>
      <router-link to="/worktab/user">Notes</router-link>
    </div>
    <!-- <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view> -->
    <TabLayout />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";

import TabLayout from "@/components/layout/TabLayout.vue";

const router = useRouter();
</script>

<style scoped>
.worktab {
  display: flex;
  flex-direction: column;
}
.grid-panel {
  background-color: antiquewhite;
}
</style>

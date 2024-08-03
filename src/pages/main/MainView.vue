<template>
  <div class="main-view">
    <Toolbar v-if="activeTab < 2"/>
    <router-view class="main-page" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <BottomTab :onChangeTab="onChangeTab"/>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import BottomTab from '@/components/BottomTab.vue';
import Toolbar from '@/components/Toolbar.vue';

const activeTab = ref(0);

onMounted(() => {
  console.log('onMounted ---> MainView');
});

function onChangeTab(tab) {
  console.log('onTabClick', tab);
  activeTab.value = parseInt(tab);
}
</script>

<style scoped>
.main-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.main-page {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>

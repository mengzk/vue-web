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
import { useRouter } from "vue-router";
import BottomTab from '@/components/BottomTab.vue';
import Toolbar from '@/components/Toolbar.vue';

const router = useRouter();

const activeTab = ref(0);

onMounted(() => {
  console.log('onMounted ---> MainView');
  const timer = setTimeout(() => {
    clearTimeout(timer);
    router.push('/test');
  }, 1000);
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

<template>
  <div class="hot">
    <TopTabs :tabs="tabs" />
    <div class="hot-list">
      <template v-for="(item, index) in itemList" :key="index">
        <div class="hot-item">
          <img class="hot-item-icon" :src="item.img" alt="" />
          <div class="hot-item-content">
            <div class="hot-item-title">{{ item.title }}</div>
            <div class="hot-item-desc">{{ item.desc }}</div>
          </div>
        </div>
      </template>
    </div>
    
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, ref } from "vue";

import TopTabs from "@/components/TopTabs.vue";


const tabs = ['热门', '最新', '关注'];

const itemList = ref([
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
]);

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
.hot {
  height: 100%;
  overflow: scroll;
  position: relative;
}

.hot-list {
  display: flex;
  flex-direction: column;
  padding: 10px;
}

.hot-item {
  margin-bottom: 16px;
  display: flex;
  flex-direction: row;
  padding: 10px;
  background-color: blueviolet;
}

.hot-item-icon {
  width: 80px;
  height: 80px;
  border-radius: 8px;
}

.hot-item-content {
  display: flex;
  flex-direction: column;
  margin-left: 10px;
}
</style>

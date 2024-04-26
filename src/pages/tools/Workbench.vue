<template>
  <div class="tools">
    <div class="tools-menu">
      <h2>工具库</h2>
      <div class="menu-grid">
        <template v-for="menu in menuList">
          <div :class="'menu-grid-item menu-bg' + menu.style" @click="onMenuClick(menu)">
            <span class="menu-grid-item-text">{{ menu.label }}</span>
          </div>
        </template>
      </div>

      <h2>服务</h2>
      <div class="menu-grid">
        <template v-for="menu in serviceList">
          <div :class="'menu-grid-item menu-bg' + menu.style" @click="onMenuClick(menu)">
            <span class="menu-grid-item-text">{{ menu.label }}</span>
          </div>
        </template>
      </div>
    </div>
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { RouterView, useRouter } from "vue-router";

const router = useRouter();

const menuList = [
  { id: 0, style: 2, label: "话术库", path: "/tools/web" },
  { id: 1, style: 1, label: "设计师", path: "/tools/designer" },
  { id: 2, style: 1, label: "项目经理", path: "/tools/pm" },
  { id: 3, style: 2, label: "在线收定", path: "/tools/web" },
];
const serviceList = [
  { id: 0, style: 2, label: "促销活动", path: "/tools/web" },
  { id: 0, style: 1, label: "发停车券", path: "/tools/coupon" },
  { id: 0, style: 2, label: "叫车服务", path: "/tools/web" },
];

function onMenuClick(menu) {
  router.push(menu.path);
}
</script>

<style scoped>
.tools {
  display: flex;
  height: 100vh;
}
.tools-menu {
  width: 317px;
  padding: 39px 24px;
  display: flex;
  flex-direction: column;
  background-color: white;
}
.menu-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  gap: 20px 16px;
}
.menu-grid-item {
  padding: 22px 16px 24px 16px;
  display: flex;
  border-radius: 12px;
  cursor: pointer;
}
.menu-bg1 {
  background: color(display-p3 0.9569 0.9961 0.9882);
}
.menu-bg2 {
  background: color(display-p3 0.9608 0.9686 0.9843);
}
.menu-grid-item-text {
  color: #1c212a;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;
}
</style>

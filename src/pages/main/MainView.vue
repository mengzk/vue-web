<template>
  <div class="main-view">
    <router-view class="tab-page" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <div class="row tab-layout">
      <router-link class="tab-link" to="/home">Login</router-link>
      <router-link class="tab-link" to="/hot">Hot</router-link>
      <router-link class="tab-link" to="/my">My</router-link>
    </div>
  </div>
</template>

<script setup>
// import { RouterView, RouterLink } from "vue-router";
</script>


<style scoped>
.main-view {
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
}
.tab-page {
  flex: 1;
  display: flex;
  flex-direction: column;
}
.tab-layout {
  height: 56px;
  border-top: solid 1px #e0e0e0;
  align-items: center;
  background-color: white;
}
.tab-link {
  flex: 1;
  padding: 12px 0;

  color: #000;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  text-decoration: none;

  cursor: pointer;
}
</style>
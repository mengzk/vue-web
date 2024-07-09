<script setup>
import { RouterView } from "vue-router";
/**
    当在处理 KeepAlive 组件时，想要保持路由组件活跃，而不是 RouterView 本身。
    为了实现这个目的，可以将 KeepAlive 组件放置在插槽内
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <!-- 使用任何自定义过渡和回退到 `fade` -->
    <!-- <transition :name="route.meta.transition || 'fade'"> -->
    <router-view v-slot="{ Component }">
      <transition>
        <keep-alive>
          <component :is="Component" />
        </keep-alive>
      </transition>
    </router-view>
 * 
 */
</script>

<template>
  <router-view />
  <!-- <router-view v-slot="{ Component }">
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view> -->
</template>

<style scoped></style>

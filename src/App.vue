<script setup>
import { RouterView } from "vue-router";
/**
 * RotuerView 组件暴露了一个插槽，可以用来渲染路由组件
 *  <router-view v-slot="{ Component }">
      <component :is="Component" />
    </router-view>

    当在处理 KeepAlive 组件时，想要保持路由组件活跃，而不是 RouterView 本身。
    为了实现这个目的，可以将 KeepAlive 组件放置在插槽内
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>

    插槽允许使用一个 Transition 组件来实现在路由组件之间切换时过渡效果
    <router-view v-slot="{ Component }">
      <transition>
        <component :is="Component" />
      </transition>
    </router-view>

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
  <!-- <RouterView /> -->
  <router-view v-slot="{ Component }">
    <!-- 使用任何自定义过渡和回退到 `fade` -->
    <!-- <transition :name="route.meta.transition || 'fade'"> -->
    <transition name="fade">
      <component :is="Component" />
    </transition>
  </router-view>
</template>

<style scoped></style>

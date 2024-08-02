<template>
  <div class="main-view">
    <router-view class="tab-page" v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <BottomTab />
  </div>
</template>

<script setup>
import BottomTab from '@/components/BottomTab.vue';
/**
 * https://cn.vuejs.org/guide/built-ins/keep-alive.html
 * 当一个组件实例从 DOM 上移除但因为被 <KeepAlive> 缓存而仍作为组件树的一部分时，它将变为不活跃状态而不是被卸载。当一个组件实例作为缓存树的一部分插入到 DOM 中时，它将重新被激活。
 * 一个持续存在的组件可以通过 onActivated() 和 onDeactivated() 注册相应的两个状态的生命周期钩子：

 import { onActivated, onDeactivated } from 'vue'
    onActivated(() => {
      // 调用时机为首次挂载
      // 以及每次从缓存中被重新插入时
    })

    onDeactivated(() => {
      // 在从 DOM 上移除、进入缓存
      // 以及组件卸载时调用
    })
 * 
 */


function onTabClick() {
  console.log('onTabClick');
}
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
</style>

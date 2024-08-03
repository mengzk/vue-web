<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <input type="file" multiple @change="onFileChange" />
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/Header.vue";
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
function onFileChange(e) {
  const files = e.target.files;
  console.log(files);
  const list = [];
  for (let i = 0; i < files.length; i++) {
    list.push(files[i]);
  }
}
</script>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

/* 宽度超过 1024 的布局 */
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>

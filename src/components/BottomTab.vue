<template>
  <div class="tab-layout">
    <router-link :class="`tab-link ${curTab == 0 ? 'active':''}`" to="/home" @click="onItemTap(0)">
      <img :class="`tab-link-icon ${curTab == 0 ? 'active':''}`" />
      <span>Home</span>
    </router-link>
    <router-link :class="`tab-link ${curTab == 1 ? 'active':''}`" to="/hot" @click="onItemTap(1)">
      <img :class="`tab-link-icon ${curTab == 1 ? 'active':''}`" />
      <span>Hot</span>
    </router-link>
    <router-link :class="`tab-link ${curTab == 2 ? 'active':''}`" to="/my" @click="onItemTap(2)">
      <img :class="`tab-link-icon ${curTab == 2 ? 'active':''}`" />
      <span>My</span>
    </router-link>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    required: false,
    value: () => [],
  },
  onChangeTab: {
    type: Function,
    required: false,
  },
});

const curTab = ref(0);

onMounted(() => {
  const paths = (window.location.href||'').split('/');
  const path = paths[paths.length - 1];
  if (path.includes('hot')) {
    onItemTap(1);
  } else if (path.includes('my')) {
    onItemTap(2);
  }
});

function onItemTap(e) {
  curTab.value = e;
  props.onChangeTab && props.onChangeTab(e);
}
</script>

<style scoped>
.tab-layout {
  height: 50px;
  display: flex;
  align-items: center;
  border-top: solid 1px #e6e6e6;
  background-color: white;
}
.tab-link {
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #979797;
  font-size: 14px;
  text-align: center;
  text-decoration: none;
  /* cursor: pointer; */
}
.tab-link.active {
  color: coral;
  font-weight: 500;
}
.tab-link-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  background-color: #c3c3c3;
}
.tab-link-icon.active {
  background-color: coral;
}
</style>

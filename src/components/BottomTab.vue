<template>
  <div class="tab-layout">
    <router-link class="tab-link" to="/home" @click="onItemTap">
      <img class="tab-link-icon" />
      <span>Home</span>
    </router-link>
    <router-link class="tab-link" to="/hot" @click="onItemTap">
      <img class="tab-link-icon" />
      <span>Hot</span>
    </router-link>
    <router-link class="tab-link" to="/my" @click="onItemTap">
      <img class="tab-link-icon" />
      <span>My</span>
    </router-link>
  </div>
</template>

<script setup>
defineProps({
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

function onItemTap(e) {
  console.log('onItemTap', e);
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
.tab-link:hover {
  color: coral;
  font-weight: 500;
}
.tab-link-icon {
  width: 24px;
  height: 24px;
  margin-bottom: 4px;
  background-color: #c3c3c3;
}
.tab-link-icon:hover {
  background-color: coral;
}
</style>

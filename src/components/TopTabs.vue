<template>
  <div class="v-top-tabs">
    <template v-for="(tab, index) in props.tabs" :key="index">
      <div
        @click="onItemTap(index)"
        :class="`v-top-tabs-item ${activeTab === index ? 'active' : ''}`"
      >
        {{ tab }}
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  tabs: {
    type: Array,
    required: false,
  },
  onTabChange: {
    type: Function,
    required: false,
  },
});

const activeTab = ref(0);


function onItemTap(num) {
  activeTab.value = num;
  props.onTabChange && props.onTabChange(num);
}
</script>

<style scoped>
.v-top-tabs {
  width: 100vw;
  height: 42px;
  top: 0;
  left: 0;
  z-index: 3;
  position: sticky;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: white;
  border-bottom: solid 1px #f3f3f3;
}
.v-top-tabs-item {
  font-size: 16px;
  color: #676767;
  padding: 10px 16px;
  /* cursor: pointer; */
}
.v-top-tabs-item.active {
  color: #232323;
  font-weight: 600;
}
</style>

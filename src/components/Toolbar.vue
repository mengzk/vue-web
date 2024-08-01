<template>
  <div class="v-toolbar">
    <div class="v-toolbar-btn" @click="onBack">
      <span class="v-toolbar-title">返回</span>
    </div>
    <span class="v-toolbar-title">标题</span>
    <div class="v-toolbar-btn">
      <span class="v-toolbar-title">菜单</span>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  actions: {
    type: Array,
    required: false,
  },
});

function onBack() {
  console.log('onBack');
}

function onMenuTap(e) {

}
</script>

<style scoped>
.v-toolbar {
  width: 100vw;
  height: 56px;
  top: 0;
  left: 0;
  z-index: 3;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.v-toolbar-btn {
  margin-left: 24px;
  display: flex;
  align-items: center;
}
.v-toolbar-title {
  width: 24px;
  height: 24px;
}
.v-toolbar-actions {
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
}
.v-toolbar-height {
  height: var(--toolbar-height);
}
</style>

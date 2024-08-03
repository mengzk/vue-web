<template>
  <div class="v-toolbar">
    <div class="v-toolbar-action" @click="onBack">
      <span class="v-toolbar-back">返回</span>
    </div>
    <span class="v-toolbar-title">标题</span>
    <div class="v-toolbar-action v-toolbar-actions">
      <span class="v-toolbar-menu">菜单</span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
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
  height: 50px;
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

.v-toolbar-action {
  width: 25vw;
  display: flex;
  align-items: center;
}
.v-toolbar-actions {
  justify-content: flex-end;
}
.v-toolbar-title {
  width: 50vw;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
.v-toolbar-menu {
  font-size: 14px;
}

.v-toolbar-height {
  height: var(--toolbar-height);
}
</style>

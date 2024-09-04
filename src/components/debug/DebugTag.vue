<template>
  <div class="v-debug-tag" @click="onClick">
    <div class="v-debug-tag-str">Debug</div>
  </div>
</template>

<script setup>
const props = defineProps({
  env: {
    type: String,
    required: false,
    default: 'dev',
  },
});

function onClick(e) {
}

function onLongClick(e) {
}
</script>

<style scoped>
.v-debug-tag {
  width: 72px;
  height: 24px;
  top: 0;
  right: 0;
  z-index: 99999;
  position: fixed;
  transform: rotate(45deg) translate(10, -10);
  background-color: rgba(255,0,0,0.8);
}
.v-debug-tag-str {
  align-items: center;
  color: white;
  font-size: 14px;
  font-weight: 700;
}
</style>

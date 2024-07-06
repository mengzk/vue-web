<template>
  <div class="v-header">
    <div class="v-header-btn" @click="onBack">
      <!-- <img class="v-header-logo" src="{logoIcon}" /> -->
      <span class="v-header-name">网站</span>
    </div>
    <ul class="v-header-tab" @click="onClickTab">
      <li id="home" class="v-header-tab-li">首页</li>
      <li id="goods" class="v-header-tab-li">产品</li>
      <li id="about" class="v-header-tab-li">关于</li>
      <li id="contact" class="v-header-tab-li">联系</li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  msg: {
    type: String,
    required: true,
  },
});

function onBack() {
  console.log('onBack');
}

function onClickTab(e) {
  const id = e.target.id;
    if (props.onChange) {
      props.onChange(id);
    }
}
</script>

<style scoped>
.v-header {
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

.v-header-btn {
  margin-left: 24px;
  display: flex;
  align-items: center;
}
.v-header-logo {
  width: 24px;
  height: 24px;
}
.v-header-name {
  color: white;
  font-size: 14px;
  font-weight: 600;
  margin-left: 8px;
}
.v-header-tab {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 0 6vw 0 0;
  column-gap: 64px;
}
.v-header-tab-li {
  color: white;
  font-size: 18px;
  font-weight: 700;
}

.v-header-height {
  width: 1px;
  min-height: 56px;
}
</style>

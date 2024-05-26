<script setup>
import { ref } from "vue";
import { Popup, Checkbox } from "vant";

import right from "@/assets/re_right.png";

const props = defineProps(["list"]);
const showPopup = ref(true);
const checked = ref([]);

function onConfirm() {
  showPopup.value = false;
}

function onChange(e) {
  console.log(e);
}

function onTapItem(e,d) {
  console.log(e, d);
}

function onCancel() {
  showPopup.value = false;
}
</script>

<template>
  <Popup v-model:show="showPopup" round position="bottom">
    <div class="v-group-header">
      <div class="v-header-cancel" @click="onCancel">取消</div>
      <div class="v-header-title">选择分组</div>
      <div class="v-header-ok" @click="onConfirm">确认</div>
    </div>
    <div class="v-group-list">
      <template v-for="(item, index) in props.list" v-key="item.name">
        <div
          :class="`v-group-item ${index == 0 ? 'v-group-item0' : ''}`"
          @click="onTapItem(item)"
        >
          <Checkbox icon-size="24px" @click="(e) => onChange(item, e)"/>
          <span>{{ item.name }}</span>
          <img class="v-group-item-icon" :src="right" />
        </div>
      </template>
    </div>
  </Popup>
</template>

<style scoped>
.v-group-header {
  display: flex;
  align-items: center;
  height: 56px;
  border-bottom: solid 1px #e3e3e3;
}
.v-header-title {
  flex: 1;
  color: #232323;
  font-size: 18px;
  font-weight: 500;
  text-align: center;
}
.v-header-cancel {
  color: #676767;
  font-size: 16px;
  padding: 10px 16px;
}
.v-header-ok {
  color: #ff6600;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 16px;
}
.v-group-list {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  max-height: 190px;
  padding-bottom: 20px;
}
.v-group-item {
  flex: 1;
  display: flex;
  align-items: center;
  min-height: 46px;
  padding: 0 16px;
  border-top: solid 1px #e3e3e3;
}
.v-group-item0 {
  border-top: solid 1px transparent;
}
.v-group-item-icon {
  width: 6px;
  height: 10px;
  margin-left: auto;
}
</style>

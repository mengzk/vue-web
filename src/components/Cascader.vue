<script setup>
import { ref } from "vue";
import { Cascader ,Popup } from "vant";
import { useCascaderAreaData } from '@vant/area-data';

const showPopup = ref(true);

const options = useCascaderAreaData();;

function onConfirm(value) {
  console.log("onConfirm", value);
  showPopup.value = false;
}

function onCancel() {
  console.log("onConfirm", value);
  showPopup.value = false;
}


</script>

<template>
  <Popup v-model:show="showPopup" round position="bottom">
    <Cascader
      title="地址选择"
      :options="options"
      @finish="onConfirm"
      @close="onCancel"
    />
  </Popup>
</template>

<style scoped>
</style>

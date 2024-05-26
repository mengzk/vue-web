<script setup>
import { ref } from "vue";
import { Popup, Cascader } from "vant";

const props = defineProps(["list", "show"]);
const emit = defineEmits(["change"]);

const group = ref({});
const groupNames = {
  text: "name",
  value: "id",
  children: "children",
};

function onConfirm() {
  emit("change", group.value);
}

function onChangeGroup(e) {
  group.value = e.selectedOptions[0];
}

function onCancel() {
  emit("change", null);
}
</script>

<template>
  <Popup v-model:show="props.show" round position="bottom">
    <div class="v-group-header">
      <div class="v-header-cancel" @click="onCancel">取消</div>
      <div class="v-header-title">选择分组</div>
      <div class="v-header-ok" @click="onConfirm">确认</div>
    </div>
    <!-- <div class="v-group-list"> -->
      <Cascader
        :show-header="false"
        :options="props.list"
        :field-names="groupNames"
        @change="onChangeGroup"
      />
    <!-- </div> -->
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
  color: #232323;
  font-size: 16px;
  font-weight: 500;
  padding: 10px 16px;
}
.v-group-list {
  display: flex;
  flex-direction: column;
  max-height: 500px;
  padding-bottom: 20px;
}
</style>

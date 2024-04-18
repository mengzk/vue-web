<script setup>
import { ref } from "vue";

import shen_zm from "@/assets/shen_zm.png";
import shen_fm from "@/assets/shen_fm.png";
import right from "@/assets/re_right.png";

const userName = ref(""); // 
const userPhone = ref(""); // 
const userSex = ref(""); // 
const userAds = ref(""); // 
const userAdsInfo = ref(""); // 
const cardAds = ref(""); // 
const cardAdsInfo = ref(""); // 
const img1 = ref(''); // 
const img2 = ref(''); // 
const agree = ref(true); // 

const guide =
  "本人承诺以上信息全部真实且有效。同时，本人授权公司对我所填写的信息进行核实。如有虚假，本人愿接受公司规则制度处理，包括但不限于与本人解除劳动关系。";


  function onChooseImg() {
    console.log('onChooseImg')
  }

  function onAgree() {
    console.log('onChangeAgree')
  }

  function onSubmit() {
    console.log('submit')
  }


</script>

<template>
  <div class="re-page">
    <span class="re-title">PKL入职申请</span>
    <div class="re-box">
      <div class="re-input-item">
        <span class="re-input-item-label">姓名</span>
        <input class="re-input-item-input" type="text" placeholder="请输入" />
      </div>
      <div class="re-input-item">
        <span class="re-input-item-label">手机号</span>
        <input class="re-input-item-input" type="" placeholder="请输入" />
      </div>
      <div class="re-input-item">
        <span class="re-input-item-label">性别</span>
        <input class="re-input-item-input" type="text" placeholder="请输入" />
      </div>
      <div class="re-input-item">
        <span class="re-input-item-label">常住地址</span>
        <span class="re-input-item-input">省、市、区</span>
        <img class="re-item-icon" :src="right"/>
      </div>
      <div class="re-input-item">
        <span class="re-input-item-label">详细地址</span>
        <input
          class="re-input-item-input"
          type="text"
          placeholder="街道、楼牌号等"
        />
      </div>
      <div class="re-input-item">
        <span class="re-input-item-label">身份证地址</span>
        <span class="re-input-item-input">省、市、区</span>
        <img class="re-item-icon" :src="right"/>
      </div>
      <div class="re-input-item">
        <span class="re-input-item-label">详细地址</span>
        <input
          class="re-input-item-input"
          type="text"
          placeholder="街道、楼牌号等"
        />
      </div>
      <div class="div-line"></div>
      <div class="re-attch-item">
        <span class="re-attch-label">附件资料</span>
        <span class="re-attch-hint">(请上传不超过50M的JPG、PNG图片)</span>
      </div>
      <div class="re-attch-box">
        <img class="re-attch-img" :src="shen_zm" />
        <img class="re-attch-img" :src="shen_fm" />
      </div>

      <div class="re-hint-box">
        <input type="checkbox" id="agree" />
        <span class="re-hint-text">{{ guide }}</span>
      </div>
    </div>
    <div class="re-btn-box">
      <button>提 交</button>
    </div>
  </div>
</template>

<style scoped>
.re-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: white;
}
.re-title {
  padding: 16px 0;
  font-size: 18px;
  color: #1d2129;
  text-align: center;
  background-color: white;
}
.re-box {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}
.re-input-item {
  display: flex;
  align-items: center;
  padding: 18px 16px;
  border-bottom: 1px solid #f0f0f0;
}
.re-input-item-label {
  min-width: 100px;
  color: #4e5969;
  font-size: 14px;
  line-height: 20px;
}
.re-input-item-input {
  flex: 1;
  color: #4e5969;
  font-size: 14px;
  line-height: 20px;
  border: none;
}
.re-input-not {
  color: #b2b8c4;
}
.re-item-icon {
  width: 6px;
  height: 10px;
  margin-left: 8px;
}

.re-attch-item {
  display: flex;
  align-items: center;
  padding: 16px 16px 12px 16px;
}
.re-attch-label {
  color: #4e5969;
  font-size: 14px;
  line-height: 20px;
}
.re-attch-hint {
  color: #86909c;
  font-size: 12px;
  line-height: 20px;
}
.re-attch-box {
  display: flex;
  padding: 0 16px;
  justify-content: space-between;
}
.re-attch-img {
  width: 164px;
  height: 108px;
}
.re-hint-box {
  display: flex;
  align-items: start;
  padding: 20px 16px 12px 16px;
}

.re-hint-text {
  color: #86909c;
  font-size: 10px;
  line-height: 12px;
  margin-left: 6px;
}
.div-line {
  height: 10px;
  background-color: #f7f8fa;
}
.re-btn-box {
  padding: 8px 16px 16px 16px;
  display: flex;
}
.re-btn-box button {
  flex: 1;
  height: 44px;
  border-radius: 22px;
  background-color: #fe6601;
  border: none;

  color: white;
  font-size: 16px;
  font-weight: 600;
}
input::placeholder {
  color: #b2b8c4;
}
input:focus {
  outline: none;
}
</style>

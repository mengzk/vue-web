<script setup>
import { ref, onMounted } from "vue";
import { Cascader, Popup, showLoadingToast, showToast } from "vant";
import { useCascaderAreaData } from "@vant/area-data";

import { openChooseFile } from "../modules/system/index";
import { submitApply, uploadImg } from "../modules/api/index";
import { getUrlParams } from "../utils/index";

import shen_zm from "@/assets/shen_zm.png";
import shen_fm from "@/assets/shen_fm.png";
import right from "@/assets/re_right.png";

let areaTag = 0;
const showPopup = ref(false);
const options = useCascaderAreaData();

const userName = ref(""); //
const userPhone = ref(""); //
const userSex = ref(1); //
const userAds = ref(""); //
const userAdsInfo = ref(""); //
const cardAds = ref(""); //
const cardAdsInfo = ref(""); //
const img1 = ref(shen_zm); //
const img2 = ref(shen_fm); //
const agree = ref(true); //
const loading = ref(false); //

const imgs = [null, null]; //
let userCity = [];
let cardCity = [];
let pageParams = { code: "846893", id: "1771791214584680477" };

const guide =
  "本人承诺以上信息全部真实且有效。同时，本人授权公司对我所填写的信息进行核实。如有虚假，本人愿接受公司规则制度处理，包括但不限于与本人解除劳动关系。";

onMounted(() => {
  const params = getUrlParams();
  // console.log('------->params', params)
  if (params.code == null) {
    console.log("分享码错误");
    showToast("分享码错误");
    // return;
  } else {
    const codes = params.code.split("I");
    pageParams.id = codes[0];
    pageParams.code = codes[1];
  }

  const group = document.getElementById("radio-group");
  group.addEventListener("change", (e) => {
    const target = e.target;
    if (target.tagName === "INPUT") {
      userSex.value = parseInt(target.id);
    }
  });
});

function onChooseImg(tag) {
  // console.log('onChooseImg', tag)
  openChooseFile().then((files) => {
    console.log(files);
    if (files == null || files.length === 0) return;

    const file = files[0];
    if (tag == 0) {
      imgs[0] = file;
      img1.value = URL.createObjectURL(file);
    } else {
      imgs[1] = file;
      img2.value = URL.createObjectURL(file);
    }
  });
}

function onChangeAgree(e) {
  const target = e.target;
  console.log("onChangeAgree", target.checked);
  agree.value = target.checked;
}

// 常住地址
function onUserAddress() {
  areaTag = 0;
  showPopup.value = true;
}

// 身份证地址
function onCardAddress() {
  areaTag = 1;
  showPopup.value = true;
}
// 地址选择
function onAreaConfirm(res) {
  console.log("onConfirm", res);
  showPopup.value = false;
  const list = res.selectedOptions || [];
  if (areaTag == 0) {
    userCity = list;
    userAds.value = list.map((item) => item.text).join("/");
  } else {
    cardCity = list;
    cardAds.value = list.map((item) => item.text).join("/");
  }
}

async function onSubmit() {
  console.log("submit", userSex.value, agree.value);
  if (userName.value == "") {
    console.log("请输入姓名");
    showToast("请输入姓名");
    return;
  } else if (userPhone.value == "") {
    console.log("请输入手机号");
    showToast("请输入手机号");
    return;
  } else if (userAds.value == "") {
    console.log("请选择常住地址");
    showToast("请选择常住地址");
    return;
  } else if (userAdsInfo.value == "") {
    console.log("请输入详细地址");
    showToast("请输入详细地址");
    return;
  } else if (cardAds.value == "") {
    console.log("请选择身份证地址");
    showToast("请选择身份证地址");
    return;
  } else if (cardAdsInfo.value == "") {
    console.log("请输入详细地址");
    showToast("请输入详细地址");
    return;
  } else if (imgs.filter((item) => item == null).length > 1) {
    console.log("请上传图片");
    showToast("请上传图片");
    return;
  } else if (!agree.value) {
    console.log("请勾选同意协议");
    showToast("请勾选同意协议");
    return;
  }

  loading.value = true;
  showLoadingToast("提交中...");

  const fileParams = {
    inviteVerificationCode: pageParams.code,
    inviterId: pageParams.id,
  };

  let imgObj = {};
  let img2Obj = {};
  const res1 = await uploadImg(imgs[0], fileParams);
  console.log(res1)
  if (res1.code == "1") {
    imgObj = res1.data;
  } else {
    showToast("上传图片失败");
    loading.value = false;
    return;
  }
  const res2 = await uploadImg(imgs[1], fileParams);
  if (res2.code == "1") {
    img2Obj = res2.data;
  } else {
    showToast("上传图片失败");
    loading.value = false;
    return;
  }

  const res3 = await submitApply({
    backIdentityCardFileKey: imgObj.fileKey,
    backIdentityCardFileUrl: imgObj.fileUrl,
    frontIdentityCardFileKey: img2Obj.fileKey,
    frontIdentityCardFileUrl: img2Obj.fileUrl,
    provinceCode: userCity[0].value,
    provinceName: userCity[0].text,
    cityCode: userCity[1].value,
    cityName: userCity[1].text,
    districtCode: userCity[2].value || "",
    districtName: userCity[2].text || "",
    resideAddress: userAdsInfo.value,
    idCardCityCode: cardCity[1].value,
    idCardCityName: cardCity[1].value,
    idCardDistrictCode: cardCity[2].value || "",
    idCardDistrictName: cardCity[2].value || "",
    idCardProvinceCode: cardCity[0].value,
    idCardProvinceName: cardCity[0].value,
    idCardAddress: cardAdsInfo.value,
    inviteVerificationCode: pageParams.code,
    inviterId: pageParams.id,
    mobile: userPhone.value,
    gender: userSex.value,
    userName: userName.value,
  });

  loading.value = false;

  if (res3.code == '1') {
    console.log("提交成功");
    showToast("提交成功");
  } else {
    console.log("提交失败");
    showToast("提交失败");
  }

  // showLoadingToast().close();
}
</script>

<template>
  <div class="re-page">
    <span class="re-title">PKL入职申请</span>
    <div class="re-box">
      <div class="re-input-item">
        <span class="re-input-item-label">姓名</span>
        <input
          class="re-input-item-input"
          v-model="userName"
          type="text"
          placeholder="请输入"
        />
      </div>
      <div class="re-input-item">
        <span class="re-input-item-label">手机号</span>
        <input
          class="re-input-item-input"
          v-model="userPhone"
          type="number"
          placeholder="请输入"
        />
      </div>
      <div id="radio-group" class="re-input-item">
        <span class="re-input-item-label">性别</span>
        <div class="re-radio">
          <input type="radio" name="sex" id="0" :checked="userSex == 0" />
          <label for="0">女</label>
        </div>
        <div class="re-radio">
          <input type="radio" name="sex" id="1" :checked="userSex == 1" />
          <label for="1">男</label>
        </div>
      </div>
      <div class="re-input-item" @click="onUserAddress">
        <span class="re-input-item-label">常住地址</span>
        <span class="re-input-item-input">{{ userAds || "省、市、区" }}</span>
        <img class="re-item-icon" :src="right" />
      </div>
      <div class="re-input-item">
        <span class="re-input-item-label">详细地址</span>
        <input
          class="re-input-item-input"
          type="text"
          v-model="userAdsInfo"
          placeholder="街道、楼牌号等"
        />
      </div>
      <div class="re-input-item" @click="onCardAddress">
        <span class="re-input-item-label">身份证地址</span>
        <span class="re-input-item-input">{{ cardAds || "省、市、区" }}</span>
        <img class="re-item-icon" :src="right" />
      </div>
      <div class="re-input-item">
        <span class="re-input-item-label">详细地址</span>
        <input
          class="re-input-item-input"
          type="text"
          v-model="cardAdsInfo"
          placeholder="街道、楼牌号等"
        />
      </div>
      <div class="div-line"></div>
      <div class="re-attch-item">
        <span class="re-attch-label">附件资料</span>
        <span class="re-attch-hint">(请上传不超过50M的JPG、PNG图片)</span>
      </div>
      <div class="re-attch-box">
        <img class="re-attch-img" :src="img1" @click="onChooseImg(0)" />
        <img class="re-attch-img" :src="img2" @click="onChooseImg(1)" />
      </div>

      <div class="re-hint-box">
        <input
          type="checkbox"
          id="agree"
          :checked="agree"
          @change="onChangeAgree"
        />
        <span class="re-hint-text">{{ guide }}</span>
      </div>
    </div>
    <input id="v-ar-upload-input" hidden />
    <div class="re-btn-box">
      <button :disabled="loading" @click="onSubmit">提 交</button>
    </div>

    <Popup v-model:show="showPopup" round position="bottom">
      <Cascader title="地址选择" :options="options" @finish="onAreaConfirm" />
    </Popup>
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
  border-radius: 16px;
  object-fit: cover;
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
.re-radio {
  margin-right: 32px;
  color: #4e5969;
  font-size: 14px;
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

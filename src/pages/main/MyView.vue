<template>
  <div class="my">
    <div class="my-top">
      <div>
        <div class="my-profile">名字</div>
      </div>
      <div class="my-desc">
        <div class="my-title">这是人名</div>
        <div class="my-phone">1359903023</div>
        <div class="my-vip">vip: 9102003</div>
      </div>
    </div>
    <div  class="row tab-box">
      <div class="column center tab-div" @click="onTabClick">
        <span class="tab-num">20</span>
        <span class="tab-value">积分</span>
      </div>
      <div class="column center tab-div" @click="onTabClick">
        <span class="tab-num">0</span>
        <span class="tab-value">优惠券</span>
      </div>
      <div class="column center tab-div" @click="onTabClick">
        <span class="tab-num">3</span>
        <span class="tab-value">会员卡</span>
      </div>
    </div>
    
  <div class="row label-box">
    <span class="flex label-name">我的服务</span>
  </div>
  <div class="menu-list">
    <template v-for="(item, index) in menulist" :key="index">
      <div class="column center menu-box" @click="onMenuClick">
        <img class="menu-icon" :src="item.icon" />
        <div class="menu-value">{{item.name}}</div>
      </div>
    </template>
  </div>
  </div>
</template>

<script setup>
import { onActivated, onDeactivated, onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

onMounted(() => {
  console.log("onMounted ---> Mydiv");
});

onActivated(() => {
  console.log("onActivated ---> Mydiv");
});

onDeactivated(() => {
  console.log("onDeactivated ---> Mydiv");
});

const count = ref(5);
const menulist = ref([
  {id: 0, name: '我的订单', icon: 'https://img.yzcdn.cn/vant/user.png'},
  {id: 1, name: '我的收藏', icon: 'https://img.yzcdn.cn/vant/user-2.png'},
  {id: 2, name: '我的地址', icon: 'https://img.yzcdn.cn/vant/user-3.png'},
  {id: 3, name: '联系客服', icon: 'https://img.yzcdn.cn/vant/user-4.png'},
  {id: 4, name: '关于我们', icon: 'https://img.yzcdn.cn/vant/user-5.png'},
]);


function onTabClick() {
  console.log("click");
}

function onMenuClick() {
  console.log("mouse enter");
}
</script>

<style scoped>
.my {
  height: 100%;
  overflow: scroll;
  position: relative;
  background-color: white;
}
.my-top {
  padding: 48px 16px;
  display: flex;
  flex-direction: row;
  background: linear-gradient(0deg, #ffffff, #00000050);
}
.my-profile {
  width: 72px;
  height: 72px;
  margin-right: 16px;
  border-radius: 50%;
  background-color: blueviolet;
  
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 24px;
  font-weight: 600;
}
.my-desc {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.my-title {
  color: #232323;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 8px;
}


.tab-box {
  padding: 12px 16px;
  justify-content: space-around;
}
.tab-view {
  width: 120px;
  position: relative;
}
.tab-num {
  color: #232323;
  font-size: 20px;
  font-weight: 700;
  line-height: 26px;
  font-family: PingFangSC-Medium;
}
.tab-value {
  color: #979797;
  font-size: 14px;
  line-height: 17px;
}

.label-box {
  height: 48px;
  padding: 0 16px;
  margin-top: 8px;
  align-items: center;
}
.label-name {
  font-family: PingFangSC-Medium;
  font-size: 19px;
  color: #323232;
  font-weight: 600;
}

.menu-list {
  display: grid;
  justify-content: space-around;
  grid-template-columns: repeat(4, 90px);
}
.menu-box {
  width: 90px;
  height: 90px;
}
.menu-value {
  color: #676767;
  font-size: 14px;
  line-height: 18px;
}
.menu-icon {
  width: 26px;
  height: 26px;
  margin-bottom: 6px;
}

</style>

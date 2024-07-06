<template>
  <div class="home">
    <Header />
    <img class="home-img-bg" :src="bgImgUrl" />
    <div class="home2">
      <div class="home-banner"></div>
      <div class="home-box">
        <h1 class="home-label">产品展示</h1>
        <div class="home-products">
          <div class="home-goods-item"></div>
          <div class="home-goods-item"></div>
          <div class="home-goods-item"></div>
          <div class="home-goods-item"></div>
        </div>

        <h1 class="home-label">生产流程</h1>
        <div class="home-flow">
          <div class="home-flow-item">
            <div></div>
            <span>提出想法</span>
          </div>
          <div class="home-flow-item">
            <div></div>
            <span>草图探讨</span>
          </div>
          <div class="home-flow-item">
            <div></div>
            <span>模型展示</span>
          </div>
          <div class="home-flow-item">
            <div></div>
            <span>量产制作</span>
          </div>
        </div>

        <h1 class="home-label">关于我们</h1>
        <div class="home-gallery"></div>

        <h1 class="home-label">联系</h1>
        <div class="home-contact">
          <div class="home-contact-left">
            <div class="home-contact-item">
              <span class="home-contact-label">姓名</span>
              <input class="home-contact-input" placeholder="请输入" />
            </div>
            <div class="home-contact-item">
              <span class="home-contact-label">电话: </span>
              <input class="home-contact-input" placeholder="请输入" />
            </div>
            <div class="home-contact-item">
              <span class="home-contact-label">邮箱</span>
              <input class="home-contact-input" placeholder="请输入" />
            </div>
            <div class="home-contact-item">
              <span class="home-contact-label">备注</span>
              <input class="home-contact-input" placeholder="请输入" />
            </div>
            <div class="home-contact-item">
              <button class="home-contact-commit">提交</button>
            </div>
          </div>
          <div class="home-contact-right">
            <h1>联系我们</h1>
            <p>这将是一个大好的机会</p>
          </div>
        </div>

        <div class="home-footer-flow">
          <div class="home-footer-flow-item">
            <span>200w</span>
          </div>
          <div class="home-footer-flow-item">
            <span>3200个</span>
          </div>
          <div class="home-footer-flow-item">
            <span>90300+</span>
          </div>
          <div class="home-footer-flow-item">
            <span>12800单</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Header from '@/components/Header.vue';
const bgImgUrl =
  "https://s.cn.bing.net/th?id=OHR.BrightonBoxes_ZH-CN0947219018_1920x1080.webp";
</script>


<style scoped>
.home {
  display: flex;
  position: relative;
  /* background-color: rgba(0, 0, 0, 0.8); */
}
.home-img-bg {
  top: 0;
  left: 0;
  width: 100vw;
  height: 80vh;
  object-fit: cover;
  position: fixed;
}
.home-banner {
  height: 80vh;
  background-color: rgba(0, 0, 0, 0.3);
}
.home2 {
  z-index: 1;
  width: 100vw;
  display: flex;
  flex-direction: column;
  /* background-color: rgba(0, 0, 0, 0.8); */
}
.home-box {
  display: flex;
  flex-direction: column;
  background-color: white;
}
.home-products {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  column-gap: 30px;
  row-gap: 30px;
  margin: 0 calc(50vw - 700px);
}
.home-goods-item {
  width: 200px;
  height: 300px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: beige;
}
.home-gallery {
  display: flex;
  flex-direction: column;
  row-gap: 24px;
}
.home-label {
  margin: 96px 0 38px 0;
  text-align: center;
}
.home-flow {
  display: flex;
  flex-wrap: wrap;
  column-gap: 32px;
  justify-content: center;
}

.home-flow-item {
  width: 320px;
  height: 400px;
  border-radius: 12px;
  background-color: mediumslateblue;
  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  font-size: 32px;
  font-weight: 600;
}
.home-footer-flow {
  display: flex;
  justify-content: center;
  background-color: rgb(238, 104, 162);
}
.home-footer-flow-item {
  width: 300px;
  height: 130px;
  border-radius: 12px;
  color: white;
  font-size: 32px;
  font-weight: 600;
  display: flex;
  align-items: center;
}
.home-contact {
  display: flex;
  row-gap: 24px;
  margin-bottom: 56px;
  justify-content: space-evenly;
}
.home-contact-left {
  display: flex;
  flex-direction: column;
  row-gap: 32px;
}
.home-contact-right {
  display: flex;
  flex-direction: column;
  padding-left: 24px;
  border-left: solid 1px #d3d3d3;
}
.home-contact-item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.home-contact-label {
  width: 64px;
  font-size: 20px;
  font-weight: 600;
  color: #323232;
}
.home-contact-input {
  width: 320px;
  padding: 12px 16px;
  border: 1px solid #e3e3e3;
  border-radius: 8px;
  font-size: 20px;
  color: #232323;
  /* outline: none; */
}
.home-contact-input:focus {
  border: 1px solid #1c1c1d;
}
.home-contact-commit {
  width: 300px;
  padding: 12px 16px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: #ff6600;
  cursor: pointer;
  border: none;
}
</style>

<template>
  <div class="home">
    <img class="home-banner" src="https://picsum.photos/1920/1080" alt="home-bg" />
    <div class="home-menus">
      <template v-for="item in menuList" :key="item.id">
        <div class="menu-box">{{ item.title }}</div>
      </template>
    </div>
    <div class="home-grid">
      <template v-for="item in itemList" :key="item.id">
        <div class="home-box">{{ item.title }}</div>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onActivated, onDeactivated, ref } from "vue";

const menuList = ref([
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
]);
const itemList = ref([
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
  {id: 0, title: '', desc: '', img: ''},
]);

onMounted(() => {
  console.log("onMounted ---> HomeView");

});

onActivated(() => {
  console.log("onActivated ---> HomeView");
});

onDeactivated(() => {
  console.log("onDeactivated ---> HomeView");
});

</script>

<style scoped>
.home {
  height: 100%;
  overflow: scroll;
  position: relative;
}
.home-banner {
  height: 120px;
  margin: 0 12px;
  border-radius: 8px;
  object-fit: cover;
}

.home-menus {
  margin: 16px 12px;
  display: grid;
  grid-row-gap: 12px;
  grid-column-gap: 12px;
  grid-template-columns: repeat(4, 1fr);
}

.menu-box {
  height: 64px;
  border-radius: 8px;
  background-color: orchid;
}
.home-grid {
  margin: 0 12px;
  display: grid;
  grid-row-gap: 12px;
  grid-column-gap: 12px;
  grid-template-columns: repeat(2, 1fr);
}

.home-box {
  height: 200px;
  border-radius: 8px;
  background-color: orchid;
}
</style>

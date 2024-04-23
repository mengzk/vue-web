<script setup>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';

  const router = useRouter();

  const count = ref(5);

  function handleClick() {
    console.log('click')
    // router.push('/login');
    count.value += 5;
    count.value += 5;
    alert(count.value);
    count.value += 5;
    count.value += 5;
  }

  function handleClick2() {
    console.log('mouse enter')
    router.push('/lognotfoundin');
  }
</script>

<template>
  <div class="home">
    <div class="home-grid">
      <div class="home-item" @click="handleClick">Login {{ count }}</div>
      <div class="home-item" @click="handleClick2">Notfound</div>
    </div>
  </div>
</template>
<style scoped>
.home {
  height: 100vh;
  display: flex;
  position: relative;
  /* background-color: rgba(0, 0, 0, 0.8); */
}
.home-img-bg {
  width: 100vw;
  height: 100vh;
  object-fit: cover;
}

.home-grid {
  display: grid;
}

</style>

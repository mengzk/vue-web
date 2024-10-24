<template>
  <div class="test">
    <h1>This is an test page</h1>
    
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

function test() {
  console.log('test');
}

</script>

<style>
.test {
  display: flex;
  align-items: center;
}
</style>

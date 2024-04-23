/**
 * Author: Meng
 * Date: 2024-04-16
 * Modify: 2024-04-16
 * Desc: setup写法
 *    ref() 就是 state 属性
 *    computed() 就是 getters
 *    function() 就是 actions
 */
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", () => {
  const count = ref(0);

  const doubleCount = computed(() => count.value * 2);
  
  function increment() {
    count.value++;
  }

  return { count, doubleCount, increment };
});

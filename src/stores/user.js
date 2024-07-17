/**
 * Author: Meng
 * Date: 2024-04-16
 * Modify: 2024-04-16
 * Desc: 
 * watch配合pinia实现全局状态管理,需要的页面是keep-alive的
 */
import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("userinfo", () => {
  const userInfo = ref({});
  // const token = computed(() => user.token);

  function setUserInfo(info) {
    userInfo.value = info;
  }

  function getUserInfo() {
    return userInfo.value;
  }

  function clearUserInfo() {
    userInfo.value = {};
  }

  function isLogin() {
    return !!userInfo.value.token;
  }

  function getToken() {
    return userInfo.value.token;
  }

  return {
    userInfo,
    setUserInfo,
    getUserInfo,
    clearUserInfo,
    isLogin,
    getToken,
  };
});

/**
 * Author: Meng
 * Date: 2024-06-28
 * Modify: 2024-06-28
 * Desc: 路由守卫
 */
import router from "./index";

let routeStack = []; // 路由栈

// 全局前置守卫
// router.beforeEach((to, from) => {});
router.beforeEach(async (to, from) => {
  console.log("router beforeEach", to);
  // to: 即将要进入的目标 用一种标准化的方式
  // from: 当前导航正要离开的路由 用一种标准化的方式
  // 返回 false 以取消导航,如果浏览器的 URL 改变了(可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到 from 路由对应的地址
  return true;
});

// 全局解析守卫
// 每次导航时都会触发，不同的是，解析守卫刚好会在导航被确认之前、所有组件内守卫和异步路由组件被解析之后调用
router.beforeResolve(async (to, from) => {
  console.log("router beforeResolve", to);
  // to: 即将要进入的目标 用一种标准化的方式
  // from: 当前导航正要离开的路由 用一种标准化的方式
  try {
    // 返回 false 以取消导航
    return true;
  } catch (error) {
    // 意料之外的错误，取消导航并把错误传给全局处理器
    throw error;
  }
});

// 全局后置钩子
// 注册全局后置钩子，然而和守卫不同的是，这些钩子不会接受 next 函数也不会改变导航本身
// 对于分析、更改页面标题、声明页面等辅助功能以及许多其他事情都很有用。
router.afterEach((to, from) => {
  console.log("router afterEach", to);
  to.meta.transition = "slide-left";
});
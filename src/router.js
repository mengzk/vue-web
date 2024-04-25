/**
 * Author: Meng
 * Date: 2024-04-16
 * Modify: 2024-04-16
 * Desc: 
 *  
 *  import { useRouter, useRoute } from 'vue-router'
 *  const router = useRouter()
    const route = useRoute()
    router.push({ name: 'search', query: { ...route.query, id: 1} })

    const id = route.params.id
 * 
 */
import { createRouter, createWebHistory } from "vue-router";
import LaunchView from "./pages/LaunchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    // 返回 savedPosition，在按下 后退/前进 按钮时，就会像浏览器的原生表现那样
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }

    // 延迟滚动到顶部
    // return new Promise((resolve, reject) => { setTimeout(() => { resolve({ left: 0, top: 0 }); }, 500) });
  },
  routes: [
    {
      path: "/",
      name: "launch",
      meta: { transition: "slide-left" },
      component: LaunchView,
    },
    {
      path: "/home",
      name: "home",
      meta: { transition: "slide-left" },
      component: () => import("./pages/HomeView.vue"),
    },

    {
      path: "/login",
      name: "Login",
      meta: { transition: "slide-left" },
      component: () => import("./pages/LoginView.vue"),
    },
    {
      path: "/workbench",
      name: "Workbench",
      redirect: "",
      meta: { transition: "slide-left" },
      component: () => import("./pages/menu/Workbench.vue"),
      children: [
        {
          path: "about",
          name: "About",
          meta: { transition: "slide-left" },
          component: () => import("./pages/menu/AboutView.vue"),
        },
        {
          path: "user",
          name: "User",
          meta: { transition: "slide-left" },
          component: () => import("./pages/menu/UserView.vue"),
        },
      ],
    },
    {
      path: "/tools",
      name: "Tools",
      redirect: "",
      meta: { transition: "slide-left" },
      component: () => import("./pages/tools/Workbench.vue"),
      children: [
        {
          path: "pm",
          name: "PM",
          meta: { transition: "slide-left" },
          component: () => import("./pages/tools/PMView.vue"),
        },
        {
          path: "designer",
          name: "Designer",
          meta: { transition: "slide-left" },
          component: () => import("./pages/tools/DesignerView.vue"),
        },
        {
          path: "coupon",
          name: "Coupon",
          meta: { transition: "slide-left" },
          component: () => import("./pages/tools/CouponView.vue"),
        },
        {
          path: "web",
          name: "Webpage",
          meta: { transition: "slide-left" },
          component: () => import("./pages/tools/WebPage.vue"),
        },
      ],
    },
    {
      path: "/notfound",
      name: "Notfound",
      meta: { transition: "slide-left" },
      component: () => import("./pages/NotfoundView.vue"),
    },
  ],
});

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
  to.meta.transition = "slide-left";
});

export default router;

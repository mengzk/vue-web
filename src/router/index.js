/**
 * Author: Meng
 * Date: 2024-04-16
 * Modify: 2024-04-16
 * Desc: 
 *  import { useRouter, useRoute } from 'vue-router'
 *  const router = useRouter()
    const route = useRoute()
    router.push({ name: 'search', query: { ...route.query, id: 1} })

    const id = route.params.id
 * 
 */
import { createRouter, createWebHistory } from "vue-router";
import LaunchView from "../pages/LaunchView.vue";

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
      component: () => import("../pages/HomeView.vue"),
    },

    {
      path: "/login",
      name: "Login",
      meta: { transition: "slide-left" },
      component: () => import("../pages/LoginView.vue"),
    },
    {
      path: "/workbench",
      name: "Workbench",
      redirect: "",
      meta: { transition: "slide-left" },
      component: () => import("../pages/menu/Workbench.vue"),
      children: [
        {
          path: "about",
          name: "About",
          meta: { transition: "slide-left" },
          component: () => import("../pages/menu/AboutView.vue"),
        },
        {
          path: "user",
          name: "User",
          meta: { transition: "slide-left" },
          component: () => import("../pages/menu/UserView.vue"),
        },
      ],
    },
    {
      path: "/tools",
      name: "Tools",
      redirect: "",
      meta: { transition: "slide-left" },
      component: () => import("../pages/tools/Workbench.vue"),
      children: [
        {
          path: "pm",
          name: "PM",
          meta: { transition: "slide-left" },
          component: () => import("../pages/tools/PMView.vue"),
        },
        {
          path: "designer",
          name: "Designer",
          meta: { transition: "slide-left" },
          component: () => import("../pages/tools/DesignerView.vue"),
        },
        {
          path: "coupon",
          name: "Coupon",
          meta: { transition: "slide-left" },
          component: () => import("../pages/tools/CouponView.vue"),
        },
        {
          path: "web",
          name: "Webpage",
          meta: { transition: "slide-left" },
          component: () => import("../pages/tools/WebPage.vue"),
        },
      ],
    },
    {
      path: "/notfound",
      name: "Notfound",
      meta: { transition: "slide-left" },
      component: () => import("../pages/NotfoundView.vue"),
    },
  ],
});

export default router;

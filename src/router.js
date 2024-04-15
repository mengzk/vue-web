import { createRouter, createWebHistory } from "vue-router";
import LaunchView from "./pages/LaunchView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "launch",
      component: LaunchView,
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./pages/HomeView.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./pages/AboutView.vue"),
    },
  ],
});

export default router;


import { createRouter, createWebHistory } from "vue-router";
import Launch from "./pages/Launch.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "launch",
      component: Launch,
    },
  ],
});

export default router;

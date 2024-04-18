
import { createRouter, createWebHistory } from "vue-router";
import RegisterView from "./pages/RegisterView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "register",
      component: RegisterView,
    },
  ],
});

export default router;

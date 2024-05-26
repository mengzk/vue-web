
import { createRouter, createWebHistory } from "vue-router";
import Register from "./pages/RegisterView.vue";
import Succeed from "./pages/SucceedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "register",
      component: Register,
    },
    {
      path: '/succeed',
      name: "Succeed",
      component: Succeed,
    }
  ],
});

export default router;

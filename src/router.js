import { createRouter, createWebHistory } from "vue-router";

const history = createWebHistory();
const routes = [
  {
    path: "/404",
    component: () => import("./views/EmptyPage.vue"),
  },
  {
    path: "/",
    component: () => import("./views/HomePage.vue"),
  },
  {
    path: "/profile/:idUtente",
    component: () => import("./views/ProfilePage.vue"),
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;

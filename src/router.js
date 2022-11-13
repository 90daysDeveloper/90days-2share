import { createRouter, createWebHistory } from "vue-router";

const history = createWebHistory();
const routes = [
  {
    path: "/",
    component: () => import("./views/EmptyPage.vue"),
  },
  {
    path: "/:idUtente",
    component: () => import("./views/ProfilePage.vue"),
  },
];

const router = createRouter({
  history,
  routes,
});

export default router;

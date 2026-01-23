import { createRouter, createWebHashHistory } from "vue-router";
const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: "/",
      name: "Designer",
      component: () => import("@/views/Designer.vue"),
    },
    {
      path: "/preview",
      name: "Render",
      component: () => import("@/views/Render.vue"),
    },
  ],
});

export default router;

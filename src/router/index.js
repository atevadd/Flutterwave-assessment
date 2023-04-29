import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/BlogListingView.vue"),
    },
    {
      path: "/blog/:id",
      name: "blog-detail",
      component: () => import("../views/BlogDetailsView.vue"),
    },
  ],
});

export default router;

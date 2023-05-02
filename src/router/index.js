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
      path: "/blog/:slug",
      name: "blog-detail",
      component: () => import("../views/BlogDetailsView.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { top: 0 };
  },
});

export default router;

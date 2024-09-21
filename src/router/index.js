import { createWebHistory, createRouter } from "vue-router";
import IntroPageView from "@/introPage/IntroPageView.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";
const routes = [
  {
    path: "/",
    component: EmptyLayout,
    children: [
      {
        path: "/",
        component: IntroPageView,
      },
      {
        path: "/editor",
        name: "editor",
        component: () => import("@/editorPage/EditorPageView.vue"),
      },
    ],
  },
];
console.log(routes);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

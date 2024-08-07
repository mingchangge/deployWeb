import { createWebHashHistory, createRouter } from "vue-router";
import BaseLayout from "@/layout/BaseLayout.vue";

export const menuData = [
  {
    path: "",
    component: () => import("@/views/home-page"),
    meta: { title: "首页", hidden: false },
    children: [],
  },
];
const routes = [
  {
    path: "/",
    component: BaseLayout,
    redirect: "/",
    children: [...menuData],
  },
];
export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

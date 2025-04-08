import { createWebHashHistory, createRouter } from "vue-router";
import BaseLayout from "@/layout/BaseLayout.vue";
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css';
import menuData from './menuData'; // Importing menu data
import createRouteGuard from './guard';
import appRoutes from './routes';

NProgress.configure({ showSpinner: false }); // NProgress Configuration

const routes = [
  {
    path: "/",
    component: BaseLayout,
    redirect: "login",
    meta: {
      requiresAuth: true,
      order: 0,
    },
    children: [...menuData],
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login.vue'),
    meta: {
      requiresAuth: false,
    },
  },
  ...appRoutes,
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: () => import('@/views/not-found.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});
createRouteGuard(router);
export default router;
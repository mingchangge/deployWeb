import BaseLayout from "@/layout/BaseLayout.vue";

export default {
    path: '/dashboard',
    name: 'dashboard',
    component: BaseLayout,
    meta: {
        title: "Dashboard",
        requiresAuth: true,
        icon: 'icon-dashboard',
        order: 0,
    },
    children: [
        {
            path: 'workplace',
            name: 'Workplace',
            component: () => import('@/views/home-page'),
            meta: {
                title: "首页",
                requiresAuth: true,
                roles: ['*'],
            },
        },
        /** simple */
        {
            path: 'monitor',
            name: 'Monitor',
            component: () => import('@/views/table.vue'),
            meta: {
                title: "表格",
                requiresAuth: true,
                roles: ['admin'],
            },
        },
        /** simple end */
    ],
};
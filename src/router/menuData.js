export default [
    {
        path: "",
        component: () => import("@/views/home-page"),
        meta: {
            title: "首页",
            requiresAuth: true,
        },
        children: [],
    },
    {
        name: "table",
        path: "table",
        component: () => import("@/views/table.vue"),
        meta: {
            title: "表格",
            requiresAuth: true,
            roles: ['*'],
        },
        children: [],
    },
]
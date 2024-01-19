import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import Users from '../views/Users.vue';
import Failed from "../views/Failed.vue";
import { registerGuard } from "./Guard";

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/users',
        name: 'Users',
        component: Users,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: '/failed',
        name: 'Failed',
        component: Failed
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

registerGuard(router);

export default router;
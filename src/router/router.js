import {createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history:  createWebHistory(),
    routes: [
        {
            path: '/admin/dashboard',
            component: () => import('@/pages/admin/dashboard/index.vue'),
            name: 'admin.dashboard.index'
        },
        {
            path: '/admin/posts',
            component: () => import('@/pages/admin/posts/index.vue'),
            name: 'admin.posts.index'
        },
        {
            path: '/dashboard',
            component: () => import('@/pages/dashboard/index.vue'),
            name: 'dashboard.index'
        },
        {
            path: '/posts',
            component: () => import('@/pages/posts/index.vue'),
            name: 'dashboard.index'
        }
    ]
})

export default router

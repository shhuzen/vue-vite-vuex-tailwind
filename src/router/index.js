import { createRouter, createWebHistory } from 'vue-router'
import Home from '/src/pages/Home.vue'
import About from '/src/pages/About.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        // lazy load or () => import('/src/pages/Home.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: About,
        // lazy load or () => import('/src/pages/About.vue')
    },
]
const router = createRouter({
    history: createWebHistory(),
    routes,
})

//   router.beforeEach((to, from, next) => {
//     if (to.matched.some(record => record.meta.requireLogin) && !store.state.isAuthenticated) {
//       next('/app/log-in/')
//     }
//     else {
//       next()
//     }
//   })

export default router

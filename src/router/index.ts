import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '../components/Home/HomePage.vue'
import NotFound from '../components/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomePage },
  // 404 路由配置 - 放在最后
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router

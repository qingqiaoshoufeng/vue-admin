import {createRouter,createWebHashHistory,RouteRecordRaw} from 'vue-router'
import Home from '@/view/home/index.vue'


const routes:RouteRecordRaw[] = [
    { path: '/', component: Home },
]
export const router = createRouter({
    history: createWebHashHistory(),
    routes, // `routes: routes` 的缩写
})

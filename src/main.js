import { createApp } from 'vue'
import App from './App.vue'
import {router} from './router/index'


createApp(App).mount('#app')

// 引入路由完成
App.use(router)

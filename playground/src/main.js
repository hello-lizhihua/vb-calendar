import { createApp } from 'vue'
import App from './App.vue'

// 创建应用实例
const app = createApp(App)

import Calendar from './components/index.vue'
import './assets/styles.scss';
app.component('Calendar', Calendar)

// 挂载应用
app.mount('#app')

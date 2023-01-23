import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/boot.css'
import './assets/boot.js'

createApp(App).use(router).mount('#app')

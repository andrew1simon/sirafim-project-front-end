import './assets/main.css'

import { createApp } from 'vue'
import { autoAnimatePlugin } from '@formkit/auto-animate/vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import {AuthUser} from './State/Auth';
import axios from 'axios'
import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()

app.use(autoAnimatePlugin)
app.use(router)
app.use(pinia)
app.mount('#app')

pinia.use(piniaPluginPersistedstate)


axios.defaults.baseURL = 'https://andrewsimon.cu.ma/api/'

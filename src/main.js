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


//axios.defaults.baseURL = 'https://andrewsimon.cu.ma/api/'

//axios.defaults.baseURL = 'http://127.0.0.1:8000/api/'

//axios.defaults.baseURL = 'https://andrewsimon.cu.ma/sirafim-latest/api/'

axios.defaults.baseURL = 'https://sirafim-test-2-10-dodosmsm.vercel.app/api/api'

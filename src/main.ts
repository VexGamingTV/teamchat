import { createApp } from 'vue'
import { createPinia } from 'pinia'
import '../node_modules/bootstrap/dist/css/bootstrap.css';

import App from './App.vue'
import router from './router'

import '../node_modules/@fortawesome/fontawesome-free/css/fontawesome.css'
import '../node_modules/@fortawesome/fontawesome-free/css/brands.css'
import '../node_modules/@fortawesome/fontawesome-free/css/solid.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

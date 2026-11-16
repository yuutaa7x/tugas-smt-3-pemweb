import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router' // Pastikan path ini sesuai lokasi file router Anda

const app = createApp(App)

app.use(createPinia()) // Mengaktifkan Pinia store
app.use(router)        // Mengaktifkan Vue Router

app.mount('#app')

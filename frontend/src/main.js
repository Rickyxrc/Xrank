
import { createApp } from 'vue'
import App from './App.vue'
import "./assets/css/bootstrap.min.css"
import "./assets/css/anim.css"
import router from './router.js'

var app = createApp(App).use(router)

app.mount('#app')
app.get()
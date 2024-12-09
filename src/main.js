import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import 'boxicons/css/boxicons.min.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)

// Add a route change listener to update the body class
router.afterEach((to) => {
  document.body.className = to.meta.bodyClass || ''
})

app.mount('#app')

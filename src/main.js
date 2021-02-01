import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './css/app.css'
import LoadingView from "@/components/layouts/LoadingView";
import Card from "@/components/layouts/Card";


const app = createApp(App)

app.component('loading-view', LoadingView)
app.component('card', Card)

app.use(router)
app.mount('#app')


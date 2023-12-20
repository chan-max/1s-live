import { createApp } from 'vue'
import App from './App.vue'
import home from './components/home.vue'
import live from './components/live.vue'
import lives from './components/lives.vue'
import { createWebHashHistory ,createRouter} from 'vue-router'

const routes = [
    {
        component:home,
        path:'/',
        name:'Home'
    },
    {
        component:live,
        path:'/live',
        name:'Live'
    },
    {
        component:lives,
        path:'/lives',
        name:'Lives'
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
});


const app =  createApp(App)
app.use(router)
app.mount('#app')

import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './components/HomePage.vue'
import AboutPage from './components/AboutPage.vue'
import WorkPage from './components/WorkPage.vue'
import CategoryPage from './components/CategoryPage.vue'
import QuizPage from './components/QuizPage.vue'

const app = createApp(App)

const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutPage},
    {path: '/work', component: WorkPage},
    {path: '/category', component: CategoryPage},
    {path: '/quiz', component: QuizPage},
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: 'active'
})

app.use(router)
app.mount('#app')
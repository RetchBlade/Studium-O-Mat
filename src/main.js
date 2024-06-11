import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router'

import HomePage from './components_Page/HomePage.vue'
import AboutPage from './components_Page/AboutPage.vue'
import StudiumOMatPage from './components_Page/StudiumOMatPage.vue'
import CategoryPage from './components_Page/CategoryPage.vue'
import QuizPage from './components_Page/QuizPage.vue'

const app = createApp(App)

const routes = [
    {path: '/', component: HomePage},
    {path: '/about', component: AboutPage},
    {path: '/studiumOMat', component: StudiumOMatPage},
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
import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './components_Page/HomePage.vue';
import AboutPage from './components_Page/AboutPage.vue';
import StudiumOMatPage from './components_Page/StudiumOMatPage.vue';
import QuizPage from './components_Page/QuizPage.vue';

// Vue-App erstellen
const app = createApp(App);

// Routen definieren
const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/studiumOMat', component: StudiumOMatPage },
    { path: '/quiz', component: QuizPage }
];

// Router erstellen
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: 'active' // Klasse für aktiven Link in der Navigation
});

// Router in die Vue-App einbinden
app.use(router);

// Vue-App an das HTML-Dokument binden
app.mount('#app');

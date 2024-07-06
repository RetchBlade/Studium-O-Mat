import { createApp } from 'vue';
import App from './App.vue';

import { createRouter, createWebHashHistory } from 'vue-router';

import HomePage from './components_Page/HomePage.vue';
import AboutPage from './components_Page/AboutPage.vue';
import StudiumOMatPage from './components_Page/StudiumOMatPage.vue';
import QuizPage from './components_Page/QuizPage.vue';
import ScorePage from './components_Page/ScorePage.vue';
import AdminPage from './components_Page/AdminPage';
import MajorsPage from '@/components_Page/MajorsPage.vue'; 
import AdminDash from './components_admin/DashboardComponent.vue';
import AdminUser from './components_admin/UserComponent.vue';
import AdminFragen from './components_admin/FragePoolComponent.vue';

// Vue-App erstellen
const app = createApp(App);

// Routen definieren
const routes = [
    { path: '/', component: HomePage },
    { path: '/about', component: AboutPage },
    { path: '/studiumOMat', component: StudiumOMatPage },
    { path: '/MajorsPage', component: MajorsPage},
    { path: '/quiz', component: QuizPage },
    { path: '/score', component: ScorePage },
    { path: '/admin', component: AdminPage, children: [
        { path: 'dashboard', component: AdminDash },
        { path: 'users', component: AdminUser },
        { path: 'fragen', component: AdminFragen },

    ] },
];

// Router erstellen
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes,
    linkActiveClass: 'active', // Klasse für aktiven Link in der Navigation
    scrollBehavior(to, from, savedPosition) {
        // Falls eine gespeicherte Position existiert, scrolle zu dieser Position
        if (savedPosition) {
            return savedPosition;
        } else {
            // Ansonsten scrolle zur oberen linken Ecke der Seite
            return { top: 0 };
        }
    }
});

// Router in die Vue-App einbinden
app.use(router);

// Vue-App an das HTML-Dokument binden
app.mount('#app');

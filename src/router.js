import { createRouter, createWebHistory } from 'vue-router';

// import pages to use in router
import LandingPage from './views/LandingPage.vue'
import SkillsPage from './views/SkillsPage.vue'
import ExperiencePage from './views/ExperiencePage.vue'
import ProjectsPages from './views/ProjectsPage.vue'
import ContactPage from './views/ContactPage.vue'


// Define route components
const routes = [
               {
                path: '/',
                name: 'home',
                component: LandingPage,
                props: true
               },
               {
                path: '/skills',
                name: 'skills',
                component: SkillsPage,
                props: true
               },
               {
                path: '/experiences',
                name: 'experiences',
                component: ExperiencePage,
                props: true
               },               
               {
                path: '/projects',
                name: 'projects',
                component: ProjectsPages,
                props: true
               },
               {
                path: '/contact',
                name: 'contact',
                component: ContactPage,
                props: true
               }
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
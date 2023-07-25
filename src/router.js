import { createRouter, createWebHistory } from 'vue-router';

// Define route components
const routes = [
  {},
];

// Create the router instance
const router = createRouter({
  history: createWebHistory(),
  routes, // short for `routes: routes`
});

export default router;
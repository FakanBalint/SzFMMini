import {createRouter, createWebHistory} from 'vue-router';

import HomePage from "../views/HomeView.vue";
import LoginPage from "../views/LoginView.vue";
import RegisterPage from "../views/RegisterView.vue";
import MainPage from "../views/MainView.vue";


const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage,
  },
  {
    path: '/registration',
    name: 'RegisterPage',
    component: RegisterPage,
  },
  {
    path: '/main',
    name: 'TreeSimulatorPage',
    component: MainPage,
  },
  {
    path: '/:catchAll(.*)*',
    redirect: {name: 'HomePage'}
  }

]

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

export default router;

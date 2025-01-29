import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from "../src/views/Authorization/LoginPage.vue";



const routes = [
    { path: '/login', component: LoginPage },
    { path: '/signup', component: AboutView },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})
import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from "../src/views/Authorization/LoginPage.vue";
import SignupPage from "../src/views/Authorization/SignupPage.vue";



const routes = [
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignupPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
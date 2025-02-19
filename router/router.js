import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from "../src/views/Authorization/LoginPage.vue";
import SignupPage from "../src/views/Authorization/SignupPage.vue";
import ProfileCreatePage from "../src/views/Authorization/ProfileCreatePage.vue";
import CompanyCreatePage from "../src/views/Authorization/CompanyCreatePage.vue";



const routes = [
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignupPage },
    { path: '/profile-create', component: ProfileCreatePage },
    { path: '/company-create', component: CompanyCreatePage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
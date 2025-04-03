import { createWebHistory, createRouter } from 'vue-router'
import LoginPage from "../src/views/Authorization/LoginPage.vue";
import SignupPage from "../src/views/Authorization/SignupPage.vue";
import ProfileCreatePage from "../src/views/Authorization/ProfileCreatePage.vue";
import CompanyCreatePage from "../src/views/Authorization/CompanyCreatePage.vue";
import JobCreationPage from "../src/views/JobManagement/JobCreationPage.vue";
import JobListingsPage from "../src/views/JobManagement/JobListingsPage.vue";
import JobDetailsPage from "../src/views/JobManagement/JobDetailsPage.vue";
import ReviewApplicantPage from "../src/views/JobManagement/ReviewApplicantPage.vue";
import ApplyJobPage from "../src/views/Applicant/ApplyJobPage.vue";



const routes = [
    {path: '/', redirect: '/login'},
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignupPage },
    { path: '/profile-create', component: ProfileCreatePage },
    { path: '/company-create', component: CompanyCreatePage },
    { path: '/job-create', component: JobCreationPage },
    { path: '/job-list', component: JobListingsPage },
    {path: '/job/:id', component: JobDetailsPage},
    {path: '/job/:id/applicant/:applicantId', component: ReviewApplicantPage},
    {path: '/apply', component: ApplyJobPage},
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
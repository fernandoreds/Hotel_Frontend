import { createRouter, createWebHistory } from 'vue-router';
import PublicRegister from '../views/PublicRegister.vue'; 
import EmailVerification from '../views/EmailVerification.vue'; 
import UserLogin from '../views/UserLogin.vue'; // 
import ProtectedView from '../views/ProtectedView.vue'; 
import WinnersView from '../views/WinnersView.vue';

const routes = [
  { path: '/', name: 'PublicRegister', component: PublicRegister },
  { path: '/verify-email', name: 'EmailVerification', component: EmailVerification },
  { path: '/login', name: 'UserLogin', component: UserLogin },
  { path: '/admin', name: 'ProtectedView', component: ProtectedView },
  { path: '/winners', name: 'WinnersView', component: WinnersView }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

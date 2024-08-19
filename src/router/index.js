import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import JeuConcours from '../views/JeuConcours.vue'
import APropos from '../views/APropos.vue'
import ContactPage from '../views/ContactPage.vue'
import UserConnexion from '../views/UserConnexion.vue'
import ParticiperPage from '../views/ParticiperPage.vue'
import ParticiperAdminPage from '@/views/ParticiperAdminPage.vue'
import AdminConnexionPage from '@/views/AdminConnexionPage.vue'
import AdminDashboard from '@/views/AdminDashboard.vue'
import UserDashboard from '@/views/UserDashboard.vue'
import MentionsLegales from '@/views/MentionsLegales.vue'
import ConGeUt from '@/views/ConGeUt.vue'
import PageNotFound from '@/views/PageNotFound.vue'


const routes = [
  { path: '/', component: HomePage },
  { path: '/jeu-concours', component: JeuConcours },
  { path: '/a-propos', component: APropos },
  { path: '/contact', component: ContactPage },
  { path: '/connexion', component: UserConnexion },
  { path: '/participer', component: ParticiperPage },
  { path: '/admin/signup', component: ParticiperAdminPage },
  { path: '/admin/connexion', component: AdminConnexionPage },
  { path: '/admin/dashboard', component: AdminDashboard },
  { path: '/user/dashboard', component: UserDashboard },
  { path: '/mentionslegales', component: MentionsLegales },
  { path: '/conditionsgenerales', component: ConGeUt },
  { path: '/pagenotfound', component: PageNotFound.vue },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
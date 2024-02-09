import {createRouter, createWebHistory} from "vue-router"
import ThePerfume from './pages/ThePerfume.vue'
import TheContact from './pages/TheContact.vue'
import TheHome from './pages/TheHome.vue'
import TheAbout from './pages/TheAbout.vue'
import TheValidity from './pages/TheValidity.vue'
// import ThePerfumeDetail from './pages/ThePerfumeDetail.vue'

const routes = [
    {path:'/', name:'Home', component:TheHome},
    {path:'/perfume', name:'perfume', component:ThePerfume},
    {path:'/perfume/:id', component:ThePerfume},
    {path:'/contact', name:'contact', component:TheContact},
    {path:'/validation', name:'contact', component:TheValidity},
    {path:'/aboutBE', name:'About', component:TheAbout},
    

];

const router = createRouter({
    routes,
    history: createWebHistory()
   })

export default router;
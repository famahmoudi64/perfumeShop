import {createRouter, createWebHistory} from "vue-router"
import ThePerfume from './pages/ThePerfume.vue'
import TheHome from './pages/TheHome.vue'
import TheAbout from './pages/TheAbout.vue'
import TheContact from './pages/TheContact.vue'

const routes = [
    {path:'/', name:'Home', component:TheHome},
    {path:'/perfume', name:'perfume', component:ThePerfume},
    {path:'/perfume/:id', component:ThePerfume},
    {path:'/contactBE', name:'contact',  component:TheContact},
    {path:'/aboutBE', name:'About', component:TheAbout},
];

const router = createRouter({
    routes,
    history: createWebHistory()
   })

export default router;
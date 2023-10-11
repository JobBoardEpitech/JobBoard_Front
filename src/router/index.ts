import {createRouter, createWebHistory} from 'vue-router'
import ClientManager from "@/views/admin/ClientManagerView.vue";
import CompaniesManager from "@/views/admin/CompaniesManagerView.vue";
import AdvertisementsManager from "@/views/admin/AdvertisementsManagerView.vue";
import Home from "@/views/client/Home.vue";
import Login from "@/views/client/Login.vue";
import Advertisements from "@/views/client/Advertisements.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Client
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/advertisements',
            name: 'advertisements',
            component: Advertisements
        },
        // ADMIN
        {
            path: '/dashboard/client-manager',
            name: 'client-manager',
            component: ClientManager
        },
        {
            path: '/dashboard/companies-manager',
            name: 'companies-manager',
            component: CompaniesManager
        },
      {
        path: '/dashboard/advertisements-manager',
        name: 'advertisements-manager',
        component: AdvertisementsManager
      },
    ]
})

export default router
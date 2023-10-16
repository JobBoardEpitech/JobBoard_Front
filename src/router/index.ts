import {createRouter, createWebHistory} from 'vue-router'
import ClientManager from "@/views/admin/ClientManagerView.vue";
import CompaniesManager from "@/views/admin/CompaniesManagerView.vue";
import AdvertisementsManager from "@/views/admin/AdvertisementsManagerView.vue";
import Home from "@/views/client/Home.vue";
import Login from "@/views/client/Login.vue";
import Advertisements from "@/views/client/Advertisements.vue";
import Registration from "@/views/client/Registration.vue";
import Companies from "@/views/client/Companies.vue";
import TestView from "@/views/TestView.vue";
import ModifyAdvertisementsCard from "@/components/admin/cards/ModifyAdvertisementsCard.vue";
import ModifyAdvertisementsView from "@/views/admin/ModifyAdvertisementsView.vue";
import ModifyUserView from "@/views/admin/ModifyUserView.vue";
import ModifyCompaniesView from "@/views/admin/ModifyCompaniesView.vue";
import AddAdvertisements from "@/views/client/AddAdvertisements.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        // Client
        {
            path: '/',
            redirect: 'advertisements',
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration
        },
        {
            path: '/advertisements',
            name: 'advertisements',
            component: Advertisements
        },
        {
            path: '/companies',
            name: 'companies',
            component: Companies
        },
        {
            path: '/add-advertisements',
            name: 'add-advertisements',
            component: AddAdvertisements
        },
        // ADMIN
        {
            path: '/dashboard',
            redirect: '/dashboard/client-manager',
        },
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
        {
            path: '/dashboard/client-manager/modify-client',
            name: 'client-manager-modify',
            component: ModifyUserView
        },
        {
            path: '/dashboard/advertisements-manager/modify-advertisements',
            name: 'advertisements-manager-modify',
            component: ModifyAdvertisementsView
        },
        {
            path: '/dashboard/companies-manager/modify-company',
            name: 'companies-manager-modify',
            component: ModifyCompaniesView
        },


        //TEST
        {
            path: '/test',
            name: 'test',
            component: AddAdvertisements
        },
    ]
})

export default router
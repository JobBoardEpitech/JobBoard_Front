import {createRouter, createWebHistory} from 'vue-router'
import ClientManager from "@/views/admin/ClientManagerView.vue";
import CompaniesManager from "@/views/admin/CompaniesManagerView.vue";
import AdvertisementsManager from "@/views/admin/AdvertisementsManagerView.vue";
import Login from "@/views/client/Login.vue";
import Advertisements from "@/views/client/Advertisements.vue";
import Registration from "@/views/client/Registration.vue";
import Companies from "@/views/client/CompaniesViews.vue";
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
            meta: { requiresAuth: true }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: { requiresUnauth: true }
        },
        {
            path: '/registration',
            name: 'registration',
            component: Registration,
            meta: { requiresUnauth: true }
        },
        {
            path: '/advertisements',
            name: 'advertisements',
            component: Advertisements,
            meta: { requiresAuth: true }
        },
        {
            path: '/companies',
            name: 'companies',
            component: Companies,
            meta: { requiresAuth: true }
        },
        {
            path: '/add-advertisements',
            name: 'add-advertisements',
            component: AddAdvertisements,
            meta: { requiresAuth: true }
        },
        // ADMIN
        {
            path: '/dashboard',
            redirect: '/dashboard/client-manager',
            meta: { requiresAdmin: true }
        },
        {
            path: '/dashboard/client-manager',
            name: 'client-manager',
            component: ClientManager,
            meta: { requiresAdmin: true }
        },
        {
            path: '/dashboard/companies-manager',
            name: 'companies-manager',
            component: CompaniesManager,
            meta: { requiresAdmin: true }
        },
        {
            path: '/dashboard/advertisements-manager',
            name: 'advertisements-manager',
            component: AdvertisementsManager,
            meta: { requiresAdmin: true }
        },
        {
            path: '/dashboard/client-manager/modify-client',
            name: 'client-manager-modify',
            component: ModifyUserView,
            meta: { requiresAdmin: true }
        },
        {
            path: '/dashboard/advertisements-manager/modify-advertisements',
            name: 'advertisements-manager-modify',
            component: ModifyAdvertisementsView,
            meta: { requiresAdmin: true }
        },
        {
            path: '/dashboard/companies-manager/modify-company',
            name: 'companies-manager-modify',
            component: ModifyCompaniesView,
            meta: { requiresAdmin: true }
        },


        //TEST
        {
            path: '/test',
            name: 'test',
            component: AddAdvertisements
        },

    ]
})

router.beforeEach((to, from, next) => {
    const isAuthenticated = !!localStorage.getItem('auth_token');  // Convertit en boolean
    const isAdmin = localStorage.getItem('role_id') === '1';

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            return next({ name: 'login' });
        }
        if (to.matched.some(record => record.meta.requiresAdmin) && !isAdmin) {
            return next({ name: 'advertisements' });
        }
        return next();
    } else if (to.matched.some(record => record.meta.requiresUnauth)) {
        if (isAuthenticated) {
            return next({ name: 'advertisements' });
        }
        return next();
    } else {
        next();
    }
});


export default router;

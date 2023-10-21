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
            meta: { requiresAdmin: true, requiresAuth: true }
        },
        {
            path: '/dashboard/client-manager',
            name: 'client-manager',
            component: ClientManager,
            meta: { requiresAdmin: true, requiresAuth: true }
        },
        {
            path: '/dashboard/companies-manager',
            name: 'companies-manager',
            component: CompaniesManager,
            meta: { requiresAdmin: true, requiresAuth: true }
        },
        {
            path: '/dashboard/advertisements-manager',
            name: 'advertisements-manager',
            component: AdvertisementsManager,
            meta: { requiresAdmin: true, requiresAuth: true }
        },
        {
            path: '/dashboard/client-manager/modify-client/:userId',
            name: 'client-manager-modify',
            component: ModifyUserView,
            meta: { requiresAdmin: true, requiresAuth: true }
        },
        {
            path: '/dashboard/advertisements-manager/modify-advertisements/:advertisementId',
            name: 'advertisements-manager-modify',
            component: ModifyAdvertisementsView,
            meta: { requiresAdmin: true, requiresAuth: true }
        },
        {
            path: '/dashboard/companies-manager/modify-company/:companyId',
            name: 'companies-manager-modify',
            component: ModifyCompaniesView,
            meta: { requiresAdmin: true, requiresAuth: true }
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
    const auth_token = localStorage.getItem('auth_token');
    const userInfoStr = localStorage.getItem('user_info');

    // Vérifiez si l'utilisateur est authentifié
    const isAuthenticated = auth_token && userInfoStr;

    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!isAuthenticated) {
            return next({ name: 'login' });
        }
    }

    if (to.matched.some(record => record.meta.requiresAdmin)) {
        // Convertissez la chaîne JSON en objet JavaScript en vérifiant d'abord si userInfoStr n'est pas null
        let userInfo = null;
        if (userInfoStr !== null) {
            try {
                userInfo = JSON.parse(userInfoStr);
            } catch (error) {
                console.error('Erreur lors de la conversion de user_info en objet JSON', error);
            }
        }

        // Vérifiez si l'utilisateur est un administrateur en fonction du rôle ID
        if (userInfo && userInfo.role_id === 1) {
            // L'utilisateur est un administrateur
            next();
        } else {
            // L'utilisateur n'est pas un administrateur, redirigez-le vers la page de connexion
            return next({ name: 'login' });
        }
    }

    if (to.matched.some(record => record.meta.requiresUnauth)) {
        if (isAuthenticated) {
            return next({ name: 'advertisements' });
        }
    }

    next();
});

export default router;

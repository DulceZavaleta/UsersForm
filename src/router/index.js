import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Users from '@/components/Users'

Vue.use(Router);

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/users',
            name: 'Users',
            component: Users
        }
    ]
});

const configureAxios = () => {
    router.app.$root.$axios.defaults.baseURL = 'https://v10dev.yeira.training/api/v1';
    router.app.$axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    router.app.$root.$axios.interceptors.response.use((response) => {
        return response;
    }, (error) => {
        if (error.response) {
            switch (error.response.status) {
                case 422:
                    window.alert('Ocurrió un error inesperado');
                    break;

                case 401:
                    window.alert('Error de autentificación');
                    break;

                case 404:
                    window.alert('No se encuentra el recurso solicitado');
                    break;

                case 403:
                    window.alert('Acción no autorizada');
                    break;

                case 419:
                    window.alert('Ha caducado el token de seguridad');
                    break;

                case 500:
                    window.alert('Error de servidor');
                    break;

                default:
                    window.alert('Ocurrió un error inesperado');
                    break;
            }
        } else {
            window.alert('Ocurrió un error inesperado');
        }
        return Promise.reject();
    })
};

router.beforeEach((to, from, next) => {
    if (!router.app.$root.isConfig) {
        configureAxios();
        router.app.$root.isConfig = true;
    }
    next();
});

export default router;
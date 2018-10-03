// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import VeeValidate, { Validator } from 'vee-validate';
import VeeValidateLocale from 'vee-validate/dist/locale/es'
import Axios from 'axios'
import VueCookie from 'vue-cookie'
import 'babel-polyfill'
import 'vuetify/dist/vuetify.css'

Vue.config.productionTip = false;

Validator.localize('es', VeeValidateLocale);
Vue.use(VeeValidate);


Vue.use(Vuetify);
Vue.use(VueCookie);

const plugins = {
    install(Vue){
        Object.defineProperty(Vue.prototype, '$axios', {value: Axios});
    }
};

Vue.use(plugins);


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    components: {App},
    template: '<App/>',
    data() {
        return {
            isConfig: false
        }
    }
});


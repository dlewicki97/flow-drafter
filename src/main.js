import '@mdi/font/css/materialdesignicons.css';
import 'v-tooltip/dist/v-tooltip.css';
import Vue from 'vue';
import App from '@/App.vue';
import store from '@/store/store';
import router from '@/router/router';
import axios from 'axios';
import VueAxios from 'vue-axios';
import VueLazyload from 'vue-lazyload';
import mdiVue from 'mdi-vue/v2';
import * as mdijs from '@mdi/js';
import VTooltip from 'v-tooltip';
import { Dropdown } from 'v-tooltip';
import Echo from 'laravel-echo';

Vue.use(VTooltip, {
  defaultBoundariesElement: document.body,
});
Vue.component('VDropdown', Dropdown);

Vue.use(mdiVue, {
  icons: mdijs,
});

Vue.use(VueLazyload);

Vue.use(VueAxios, axios);
let baseURL = window.location.origin.includes('localhost')
  ? 'http://localhost:8080/'
  : 'https://www.api.flowdrafter.com/';

Vue.axios.defaults.baseURL = baseURL + 'api/';
Vue.axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  (error) => Promise.reject(error)
);
Vue.prototype.$pusher = require('pusher-js');

Vue.prototype.$echo = new Echo({
  authEndpoint: `${Vue.axios.defaults.baseURL}broadcasting/auth`,
  broadcaster: 'pusher',
  key: '7d029afbeef8648d2ff4',
  cluster: 'eu',
  forceTLS: false,
  encrypted: true,
});
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');

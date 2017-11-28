import locale from 'element-ui/lib/locale/lang/en';
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Vue from 'vue';
import axios from 'axios';

import App from './App';
import router from './router';
import store from './store';
import Loader from './components/Loader.vue';

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

Vue.use(ElementUI, { locale });

Vue.component('loader', Loader);

Vue.mixin({
  computed: {
    appLoading() {
      return this.$store.getters['core/appLoading'];
    },
  },
});

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>',
}).$mount('#app');

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import VueCarousel from 'vue-carousel';
import VueMeta from 'vue-meta';
import langToggle from './filters/language'

Vue.use(VueCarousel);
Vue.use(VueMeta);
Vue.filter('localize', langToggle)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

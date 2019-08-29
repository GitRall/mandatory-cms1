import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import { routes } from './routes';
import { store } from './store';
import VueSimpleMarkdown from 'vue-simple-markdown';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(VueSimpleMarkdown);

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')

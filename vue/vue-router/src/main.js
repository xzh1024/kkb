import Vue from 'vue';
import App from './App.vue';
import router from './router';
import '@/assets/css/main.scss';

// import router from './krouter';
import store from './store';

import './plugins/element.js';
// import store from './kstore';

Vue.config.productionTip = false;

import create from './utils/create';
import Notice from './components/message/Notice.vue';
Vue.prototype.$notice = function (opts) {
  const comp = create(Notice, opts);
  comp.show();
  return comp;
};

// 事件总线
Vue.prototype.$bus = new Vue();

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

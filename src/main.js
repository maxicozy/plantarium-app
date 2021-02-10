import Vue from 'vue';
import App from './App.vue';
import api from './plugins/api';
import vuetify from './plugins/vuetify';
import router from './router/router.js';

Vue.config.productionTip = false

//eigene router funktion die fehler verhindert wenn eine route doppelt aufgerufen wird
Vue.mixin({
  methods: {
    push: function (route) {
      if (route === this.$route.path) return;
      router.push(route);
    }
  }
});

Vue.use(api)

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

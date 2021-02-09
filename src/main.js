import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import vuetify from './plugins/vuetify';

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

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

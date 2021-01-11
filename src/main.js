import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false

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

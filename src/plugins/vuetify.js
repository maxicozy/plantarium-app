import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import CalendarIcon from '../components/icons/CalendarIcon.vue'

Vue.use(Vuetify);

export default new Vuetify({
  theme: {/* */},
  icons: {
    iconfont: 'mdiSvg',
    values: {
      calendar: {
        component: CalendarIcon,
      }
      
    },
  },
});

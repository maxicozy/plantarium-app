import Vue from 'vue';
import VueRouter from 'vue-router';
import SadParent from '../views/SadParent.vue';

Vue.use(VueRouter);

//definiert alle routen der app
const routes = [
  {
    path: '/settings',
    component: () => import('../views/Settings.vue'),
    children: [ 
      {
        path: '/',
        component: () => import('../views/settings/SettingsHome.vue'),
      },
    ],
  },
  {
    path: '/calendar',
    component: () => import('../views/Calendar.vue'),
    children: [ 
      {
        path: '/',
        component: () => import('../views/calendar/CalendarHome.vue'),
      },
    ],
  },
  {
    //im parent wird entweder einfach planthome gerendert mit dem ersten gefundenen garten wenn kein weiterer pfad angegeben wird
    path: '/',
    component: SadParent,
    children: [
      {
        path: '',
        component: () => import('../views/plant/PlantHome.vue'),
      } ,
      {
        //oder, wenn ein pfad angegeben wird dann wird trotzdem das parent gerendert aber diesmal mit planthome darin und mit einem bestimmten garten 
        path: ':garden',
        component: SadParent,
        children: [
          {
            path: '',
            component: () => import('../views/plant/PlantHome.vue'),
          },
          {
            path: ':module',
            component: () => import('../views/plant/PlantGarden.vue'),
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

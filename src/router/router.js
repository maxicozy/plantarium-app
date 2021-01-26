import Vue from 'vue';
import VueRouter from 'vue-router';
import Plant from '../views/Plant.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Plant',
    component: Plant,
    children: [ 
      {
        path: '/home',
        name: 'PlantHome',
        component: () => import(/* webpackChunkName: "about" */ '../views/plant/PlantHome.vue'),
      },
    ],
  },
  {
    path: '/settings',
    name: 'Settings',
    component: () => import(/* webpackChunkName: "about" */ '../views/Settings.vue'),
    children: [ 
      {
        path: '/home',
        name: 'SettingsHome',
        component: () => import(/* webpackChunkName: "about" */ '../views/settings/SettingsHome.vue'),
      },
    ],
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: () => import(/* webpackChunkName: "about" */ '../views/Calendar.vue'),
    children: [ 
      {
        path: '/home',
        name: 'CalendarHome',
        component: () => import(/* webpackChunkName: "about" */ '../views/calendar/CalendarHome.vue'),
      },
    ],
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

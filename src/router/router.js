import Vue from 'vue';
import VueRouter from 'vue-router';
import Plant from '../views/Plant.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Plant,
    children: [ 
      {
        path: '/',
        component: () => import('../views/plant/PlantHome.vue'),
      },
    ],
  },
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
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Plant from '../views/Plant.vue';

Vue.use(VueRouter);

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
    path: '/',
    component: Plant,
    children: [ 
      {
        path: '/:garden?',
        component: () => import('../views/plant/PlantHome.vue'),
        // children: [
        //   {
        //     path: '/:module?',
        //     component: () => import('../views/plant/PlantGarden.vue'),
        //   },
        // ],
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

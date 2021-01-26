<template>
  <div id="app">
    <statusbar />
    <router-view />
    <v-bottom-navigation dark class="unselectable" :value="value" absolute grow height=59 background-color=#c9d8e4 color= #6facd9>
      <v-btn @click="push('/calendar')" icon elevation="0">
        <v-icon size="32">{{ calendarMonthPath }}</v-icon>
      </v-btn>
      <v-btn @click="push('/home')" icon elevation="0">
        <v-icon size="32">{{ sproutPath }}</v-icon>
      </v-btn>
      <v-btn @click="push('/settings')" icon elevation="0">
        <v-icon size="32">{{ cogPath }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
  import { mdiSprout, mdiCog, mdiCalendarMonth } from '@mdi/js';
  import Statusbar from './components/Statusbar.vue';

  export default {
    data: () => ({
      value: 1,
      sproutPath: mdiSprout,
      cogPath: mdiCog,
      calendarMonthPath: mdiCalendarMonth,
    }),
    components: {
      Statusbar,
    },
  }
</script>

<style>
  @font-face {
  font-family: 'AvenirLTStd-Black';
  src: url('./fonts/AvenirLTStd-Black.woff2') format('woff2'),
       url('./fonts/AvenirLTStd-Black.woff') format('woff'),
       url('./fonts/AvenirLTStd-Black.ttf')  format('truetype');
  }
  
  #app {
    font-family: 'AvenirLTStd-Black', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .unselectable .theme--dark.v-btn:hover::before {
    opacity: 0;
  }

  div .v-item-group.v-bottom-navigation {
    box-shadow: none;
  }

  .v-btn--active.v-btn.v-btn--active.v-btn--icon.v-btn--round.theme--dark.v-size--default {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    border-bottom: 5px solid;
  }

</style>
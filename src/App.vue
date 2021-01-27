<template>
  <div id="app">
    <statusbar />
    <router-view />
    <v-bottom-navigation dark class="unselectable" :value="value" absolute grow height=59 background-color=#c9d8e4 color= #6facd9>
      <v-btn v-for="(icon, path) in pages" :key="path" @click="push('/' + path)" icon elevation="0">
        <v-icon size="32">{{ icon }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
  import { mdiSprout, mdiCog, mdiCalendarMonth } from '@mdi/js';
  import Statusbar from './components/Statusbar.vue';

  export default {
    name: "App",
    data: () => ({
      pages: {
        calendar: mdiCalendarMonth,
        '': mdiSprout,
        settings: mdiCog,
      }
    }),
    computed: {
      value() {
        const [parent] = this.$route.matched
        const current = parent?.path?.substring(1)
        return Object.keys(this.pages).findIndex(k => k === current);
      }
    },
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

  body {
    background-color: #e5e5e5;
  }
  #app {
    font-family: 'AvenirLTStd-Black', sans-serif;
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
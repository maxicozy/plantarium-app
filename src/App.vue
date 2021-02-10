<template>
  <div id="app">
    <statusbar />
    <router-view />
    <v-bottom-navigation fixed dark class="unselectable" :value="value" absolute grow height="51px" background-color=#c9d8e4>
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
      //gleicht den ausgewählten tab der navbar an an die aktuelle route an
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
  @font-face {
  font-family: 'AvenirLTStd-Medium';
  src: url('./fonts/AvenirLTStd-Medium.woff2') format('woff2'),
       url('./fonts/AvenirLTStd-Medium.woff') format('woff'),
       url('./fonts/AvenirLTStd-Medium.ttf')  format('truetype');
  }
  @font-face {
  font-family: 'AvenirLTStd-Light';
  src: url('./fonts/AvenirLTStd-Light.woff2') format('woff2'),
       url('./fonts/AvenirLTStd-Light.woff') format('woff'),
       url('./fonts/AvenirLTStd-Light.ttf')  format('truetype');
  }
  body {
    background-color: #e5e5e5;
  }
  #app {
    font-family: 'AvenirLTStd-Black', sans-serif;
    text-align: center;
    color: #515151;
  }
  /* hier werden unsere verschiedenen schriftgrößen & schnitte definiert*/
  .headbar {
    border-top-left-radius: 0.313rem;
    border-top-right-radius: 0.313rem;
    height: 2.438rem;
    padding-bottom: 1rem;
    text-align: left;
  }
  .title {
    margin-top: 0.375rem;
    color: #6facd9;
    font-size: 2rem;
    text-align: right;
  }
  .cardTitle {
    font-family: 'AvenirLTStd-Medium', sans-serif;
    font-size: 1.375rem;
    color: #ffffff;
    text-align: left;
  }
  .text {
    font-family: 'AvenirLTStd-Light', sans-serif;
    font-size: 1.375rem;
    text-align: left;
  }
  .info {
    font-family: 'AvenirLTStd-Light', sans-serif;
    font-size: 0.875rem;
  }
  /* und hier gestalten wir vuetify ein wenig um */
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
    color: #6facd9 !important;
  }
  .v-btn.v-btn--icon.v-btn--round.theme--dark.elevation-0.v-size--default {
    color: #ffffffff !important;
  }
</style>

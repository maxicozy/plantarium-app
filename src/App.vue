<template>
  <div id="app">
    <router-view />
    <v-bottom-navigation v-model="value" absolute grow height=59 background-color=#c9d8e4 color= #6facd9>
      <v-btn @click="push('/calendar')" icon>
        <v-icon>{{ calendarMonthOutlinePath }}</v-icon>
      </v-btn>
      <v-btn @click="push('/')" icon>
        <v-icon>{{ sproutPath }}</v-icon>
      </v-btn>
      <v-btn @click="push('/settings')" icon>
        <v-icon>{{ cogPath }}</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
  import { mdiSprout, mdiCog, mdiCalendarMonthOutline } from '@mdi/js'
  export default {
    data: () => ({
      value: 'recent',
      sproutPath: mdiSprout,
      cogPath: mdiCog,
      calendarMonthOutlinePath: mdiCalendarMonthOutline
    }),
  }
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .unselectable {
    -webkit-touch-callout:none;
    -webkit-tap-highlight-color:rgba(0,0,0,0);
    -moz-user-select: -moz-none;
    -khtml-user-select: none;
    -webkit-user-select: none;
    -o-user-select: none;
    user-select: none;
  }
</style>
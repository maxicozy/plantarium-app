<template>
  <div class="homebutton">
    <v-btn disabled @click="push('/home')" elevation="0" max-height="32" max-width="32" dark>
      <v-icon class="icon" size="24" left>{{ homeVariantOutlinePath }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mdiHomeVariantOutline } from '@mdi/js';

export default {
  name: 'Homebutton',
  data: () => ({
    homeVariantOutlinePath: mdiHomeVariantOutline,
  }),
  components: {

  },
}
</script>

<style scoped>
.homebutton {
  margin: 9px 0px 0px 13px;
  border-radius: 10px;
  text-align: left;
}
.homebutton .v-btn:not(.v-btn--round).v-size--default {
  min-width: 0;
  padding-right: 9px;
  padding-bottom: 1px;
}
.theme--dark.v-bottom-navigation .v-btn:not(.v-btn--active) {
  color: #ffffff !important;
}
.theme--dark.v-btn.v-btn--disabled.v-btn--has-bg {
  background-color: #c9d8e4 !important;
}
.theme--dark.v-btn.v-btn--disabled .v-icon {
  color: #ffffff !important;
}
</style>
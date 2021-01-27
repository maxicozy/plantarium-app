<template>
  <div class="homebutton">
    <v-btn @click="push(to)" color="#6facd9" elevation="0" max-height="32" max-width="32" :disabled="disabled" dark>
      <v-icon class="icon" size="24" left>{{ homeVariantOutlinePath }}</v-icon>
    </v-btn>
  </div>
</template>

<script>
import { mdiHomeVariantOutline } from '@mdi/js';

export default {
  name: 'Homebutton',
  props: {
    disabled: Boolean,
  },
  data: () => ({
    homeVariantOutlinePath: mdiHomeVariantOutline,
  }),
  components: {

  },
  computed: {
    to() {
      const [parent] = this.$route.matched
      return parent.path
    }
  },
}
</script>

<style scoped>
.homebutton {
  margin: 9px 0px 0px 13px;
  width: 32px;
  border-radius: 10px;
  text-align: left;
  position: absolute;
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
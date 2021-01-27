<template>
  <div class="plant">
    <homebutton :disabled="inHome" />
    <router-view />
  </div>
</template>

<script>
import Homebutton from '../components/Homebutton.vue';

export default {
  name: 'Plant',
  components: {
    Homebutton,
  },
  computed: {
    inHome() {
      return this.$route.path === '/'
    }
  }
}
</script>

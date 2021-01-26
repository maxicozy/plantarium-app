<template>
  <div class="home">
    <homebutton />
    <router-view />
  </div>
</template>

<script>
import Homebutton from '../components/Homebutton.vue';

export default {
  name: 'Plant',
  components: {
    Homebutton,
  }
}
</script>

<style scoped>

</style>

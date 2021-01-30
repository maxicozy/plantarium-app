<template>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'Settings',
  components: {

  }
}
</script>

<style>
.container {
  align-items: center;
  justify-content: center;
  flex: 1;
}
.heading {
  font-size: 30px;
  font-weight: bold;
  color: darkolivegreen;
  margin: 20px;
}
</style>

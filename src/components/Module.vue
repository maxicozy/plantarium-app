<template>
  <div @click="click" class="module" :style="{ background: data ? '#b1c3a8' : 'none' }">
    <span class="info moduleInfo" v-if="data">{{ data.plants }}</span>
  </div>
</template>

<script>

export default {
  name: "Module",
  props: {
    data: Object
  },
  data: () => ({
    activeColor: {
      backgroundColor: "#b1c3a8",
    }
  }),
  methods:{
    click() {
      if (this.data) this.push(`/${this.garden}/${this.formatName}`);
    },
  },
  computed: {
    garden() {
      return this.$route.params.garden;
    },
    formatName() {
      return this.data.position;
    },
  }
}
</script>

<style scoped>
.module {
  height: 2.25rem;
  background-color: white;
  border-radius: 0.313rem;
  border: solid #b1c3a8 0.1rem;
  padding-top: 0.5rem;
}
.moduleInfo {
  text-transform: capitalize;
}

</style>
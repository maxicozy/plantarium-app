<template>
  <div @click="click" class="module" :style="{ background: data ? '#b1c3a8' : 'none' }">
    <span class="info moduleInfo" v-if="data">{{ data.plant }}</span>
  </div>
</template>

<script>
export default {
  name: "Module",
  props: {
    data: Object,
  },
  data: () => ({
    activeColor: {
      backgroundColor: "#b1c3a8",
    },
  }),
  methods: {
    //falls es daten in diesem modulfeld gibt wird zu einer neuen route gepusht die die position des aktuellen moduls hintendran hat
    click() {
      if (this.data) this.push(`/${this.garden}/${this.formatName}`);
    },
  },
  computed: {
    //wird hier nur genutzt um das Modul an die bereits bestehende Gartenroute anzuhängen
    garden() {
      return this.$route.params.garden;
    },
    //hier wird die route um ein modul erweitert, daher muss formatName() hier nur die Position des Moduls zurückgeben
    formatName() {
      return this.data.position;
    },
  },
};
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

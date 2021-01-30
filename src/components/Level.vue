<template>
  <v-row class="info">
    <v-col cols="4">
      {{ name }}
    </v-col>
    <v-col cols="1" />
    <v-col cols="6">
      <div class="meterNegative">
        <div
          class="meter"
          :style="{ width: level + '%', backgroundColor: color }"
        />
      </div>
    </v-col>
    <v-col cols="1" />
  </v-row>
</template>

<script>
export default {
  name: "level",
  props: {
    name: String,
    level: Number,
  },
  data: () => ({
    colors: {
      "#9fbf77": 66,
      "#fdec7e": 33,
      "#ed9476": 0,
    },
  }),
  computed: {
    color() {
      return Object.entries(this.colors).find(
        ([, value]) => this.level >= value)[0];
    },
  },
};
</script>

<style scoped>
.info {
  text-align: right;
  color: #515151;
}
.meterNegative {
  background: #dfdfdf;
}
.meter {
  background-color: black;
  height: 9px;
  margin-top: 0.25rem;
}
.col-4 {
  padding: 0.5rem;
  text-transform: capitalize;
}
.col-6 {
  padding: 0.5rem;
  justify-content: left;
}
</style>
<template>
  <v-row class="delimiterRow">
    <v-col cols="1" class="delimiter" v-for="i in amount" :key="i" :style="{ backgroundColor: index === i-1 ? '#6facd9' : ' #c4c4c4' }">
      <v-col col="1"/>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "Delimiter",
  props: {
    index: Number,
    amount: Number,
  },
}
</script>

<style scoped>
  .col {
    padding: 0;
    max-width: 0;
  }
  .delimiter {
    margin: 1.25rem 0.25rem;
    padding: 0.25rem;
    height: 0.5rem;
    width: 0.5rem;
    border-radius: 1rem;
    background-color: #c4c4c4;
  }
  .delimiterRow {
    justify-content: center;
  }
</style>
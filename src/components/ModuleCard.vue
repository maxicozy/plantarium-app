<template>
  <div class="moduleCard">
    <v-row class="headbar">
      <v-col cols="1" />
      <v-col cols="6" class="cardTitle headPadding">
        {{ data.plant }}
      </v-col>
      <v-col cols="2" class="text headPadding">
        Status
      </v-col>
      <v-col cols="3">
        <div class="status" :style="currentStatus"/>
      </v-col>
    </v-row>
    
    <v-row v-if="data.phases" class="content" align="center">
      <v-col cols="1"/>
      <v-col cols="4" class="list">
        <p class="text inCardTitle">Phases</p>
        <ol class="info">
          <li v-for="(phase, i) in data.phases" :key="i">{{ phase }}</li>
        </ol>
      </v-col>
      <v-col cols="7">
        <pie-chart 
          :value="data.percentGrown" 
          :segments="data.phases.length" 
          :text="`Harvest ${data.harvestIn}`" 
        />
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="12">
        <p class="info smoothOnLoad"> Keine Daten verfügbar</p>
      </v-col>
    </v-row>

  </div>
</template>

<script>
import PieChart from "@/components/PieChart.vue";

export default {
  name: 'Garden',
  components: {
    PieChart
  },
  data: () => ({
    currentStatus: {
      backgroundColor: "#9fbf77",
    },
  }),
  props: {
    data: Object,
    index: Number,
    amount: Number,
  },
}
</script>

<style scoped>
li {
  margin-top: 0.25rem;
}
ol {
  margin-left: 0.9rem;
}
.list {
  height: min-content;
  text-align: left;
}
.moduleCard {
  background-color: #ffffff;
  margin-top: 0.6888rem;
  border-radius: 0.313rem;
  overflow: hidden;
  padding: 0.75rem 0;
}
.status {
  width: 2rem;
  height: 1rem;
  padding: 0.5rem;
  border-radius: 0.313rem;
  border: solid white 0.075rem;
  margin: auto;
}
.cardTitle {
  text-transform: capitalize;
}
.inCardTitle {
  font-size: 1.125rem;
  margin-top: 1.2rem; 
  margin-bottom: 0.5rem; 
  color: #515151;
} 
.headbar {
  background-color: #b1c3a8;
}
.headPadding {
  padding: 0.5rem;
}
.col-5 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.content {
  color: #333;
}
</style>
<template>
  <div class="statisticCard">
    <v-row class="headbar">
      <v-col cols="1" />
      <v-col cols="5" class="cardTitle headPadding">
        Statistic
      </v-col>
      <v-col cols="6">
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="1"/>
      <v-col cols="10">
        <p class="info graphInfo" style="margin-top: 1rem">{{ date }}</p>
      </v-col>
      <v-col cols="1"/>
    </v-row>
    <v-row>
      <v-col cols="1"/>
        <div class="line"/>
      <v-col cols="10" class="graphs">
      <v-sparkline
        class='graph'
        v-for="(stat, i) in stats" 
        :key="i" 
        :value="stat"
        :color="colors[i]" 
        :padding="10" 
        :height="100" 
        :line-width="2"
        stroke-linecap="round"
        smooth
        />
      </v-col>
      <v-col cols="1" />
    </v-row>
    <v-row>
      <v-col cols="1"/>
      <v-col cols="10">
        <div
          v-for="(stat, i) in stats" :key="i" 
          class="graphInfo"
          :style="{ color: colors[i] }">
          {{ names[i] }}
        </div>
      </v-col>
      <v-col cols="1"/>
    </v-row>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  data: () => ({
    colors: ['#A3C2D9', '#C479CE', '#E5CA6F'],
    names: ['Water Level', 'pH', 'Tds']
  }),
  computed: {
    stats() {
      const frames = [this.data.waterLevel, this.data.ph, this.data.tds]
      return frames.map(frame => frame.map(o => o.value))
    },
    date() {
      const date = this.data.waterLevel[this.data.waterLevel.length - 1]?.time
      return date ? new Date(date).toLocaleDateString('de-DE') : 'Kein Datum'
    }
  }
}
</script>

<style scoped>
.statisticCard {
  background-color: #ffffff;
  margin-top: 0.6888rem;
  border-radius: 0.313rem;
  padding: 0.75rem 0;
  overflow: hidden;
  color: #515151;
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
.graphInfo {
  font-family: 'AvenirLTStd-Medium';
  font-size: 0.875rem;
  margin-top: 0.1rem;
  text-align: right;
}
.col-10 {
  padding: 12px 0;
}
.graphs {
  margin-top: 0.5rem;
}
.line{
  margin-right: 0;
  margin-top: 2rem;
  border-right: solid #d1d1d1 2px;
  height: 10rem;
}
.graph:nth-child(n + 2) {
  margin-top: -75px;
}
</style>
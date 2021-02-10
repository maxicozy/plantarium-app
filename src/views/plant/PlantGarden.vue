<template>
  <v-container v-if="garden">
    <v-row>
      <v-col cols="1">
        <Homebutton :v-if="inHome" />
      </v-col>
      <v-col cols="11" class="title">
        {{ garden.name }}
      </v-col>
    </v-row>

    <v-carousel
      hide-delimiters
      hide-delimiter-background
      v-on:change="updateURL"
      :show-arrows="false"
      :continous="false"
      :value="mod"
      :height="642"
    >
      <v-carousel-item v-for="(mod, i) in garden.modules" :key="i">
        <ModuleCard :data="mod" />
        <StatisticCard />
      </v-carousel-item>
    </v-carousel>

    <Delimiter :amount="garden.modules.length" :index="mod" />

  </v-container>
</template>

<script>
import Homebutton from "@/components/Homebutton.vue";
import Delimiter from "@/components/Delimiter.vue";
import ModuleCard from "@/components/ModuleCard.vue";
import StatisticCard from "@/components/StatisticCard.vue";

export default {
  components: {
    Homebutton,
    Delimiter,
    ModuleCard,
    StatisticCard,
  },
  data() {
    return {
      garden: null,
    };
  },
  methods: {
    //definiert was bei fetch in dieser komponente passieren soll
    //holt daten vom GET /api/garden/:name endpoint
    fetch() { 
      const name = this.$route.params.garden
      this.$api.get(`garden/${name}`)
        .then(r => r.data)
        .then(g => this.garden = g)
        .catch(e => console.error(e))
    },
    //wird dem carousel mitgegeben, updatet die route beim swipen zum neuen Modul im Garten
    updateURL(index) {
      const position = this.garden.modules[index]?.position;
      const name = this.garden?.name;
      if (name) this.$router.push(`/${this.formatName(name)}/${position}`);
    },
    //formatiert den gartennamen, damit man aus ihm eine url machen kann
    formatName(name) {
      return name.toLowerCase().replace(/\s+/g, "-");
    },
  },
  computed: {
    //schaut ob mehr als ein "/" in der aktuellen route angezeigt wird, falls ja wird im template der homebutton gerendert 
    inHome() {
      return this.$route.path.match(/\//g).length < 1;
    },
    //bestimmt die position des aktuell ausgewählten moduls anhand des aktuellen routenparameters
    mod() {
      const position = Number.parseInt(this.$route.params.module);
      return this.garden.modules.findIndex(
        (m) => m.position === position
      );
    },
  },
};
</script>
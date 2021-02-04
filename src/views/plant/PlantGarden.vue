<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <Homebutton :v-if="inHome" />
      </v-col>
      <v-col cols="11" class="title">
        {{ gardens[garden].name }}
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
      <v-carousel-item v-for="(mod, i) in gardens[garden].modules" :key="i">
        <ModuleCard :data="mod" />
        <StatisticCard :data="mod" />
      </v-carousel-item>
    </v-carousel>
    <Delimiter :amount="gardens[garden].modules.length" :index="mod" />
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
      gardens: [
        {
          name: "Garden01",
          status: 0,
          fluidLevels: {
            natrium: 24,
            phosphor: 73,
            kalium: 54,
            osmosiswater: 94,
            tapwater: 68,
          },
          modules: [
            {
              position: 2,
              plants: "herbs",
              status: 0,
              plantedStamp: "27.01.2020",
              waterLevel: this.generate(20, 1000),
              ph: this.generate(20, 14),
              tds: this.generate(20, 500),
              harvestIn: "in 2 days",
              percentGrown: "86",
              phases: ["1st Roots", "1st Leaves", "Growing"],
            },
            {
              position: 3,
              plants: "rocket",
              status: 0,
              plantedStamp: "27.01.2020",
              waterLevel: this.generate(20, 1000),
              ph: this.generate(20, 14),
              tds: this.generate(20, 500),
              harvestIn: "in 1 Week",
              percentGrown: "75",
              phases: ["1st Roots", "1st Leaves", "Growing"],
            },
            {
              position: 4,
              plants: "chilis",
              status: 0,
              plantedStamp: "27.01.2020",
              waterLevel: this.generate(20, 1000),
              ph: this.generate(20, 14),
              tds: this.generate(20, 500),
              harvestIn: "in 2 Weeks",
              percentGrown: "43",
              phases: [
                "1st Roots",
                "1st Leaves",
                "Growing",
                "Pre-Flowering",
                "Flowering",
              ],
            },
          ],
        },
        {
          name: "Garden02",
          status: 0,
          fluidLevels: {
            natrium: 24,
            phosphor: 73,
            kalium: 54,
            osmosiswater: 94,
            tapwater: 68,
          },
          modules: [
            {
              position: 1,
              plants: "chilis",
              status: 0,
              plantedStamp: "27.01.2020",
              waterLevel: this.generate(20, 1000),
              ph: this.generate(20, 14),
              tds: this.generate(20, 500),
              harvestIn: "Soon",
              percentGrown: "98",
              phases: [
                "1st Roots",
                "1st Leaves",
                "Growing",
                "Pre-Flowering",
                "Flowering",
              ],
            },
            {
              position: 2,
              plants: "herbs",
              status: 0,
              plantedStamp: "27.01.2020",
              waterLevel: this.generate(20, 1000),
              ph: this.generate(20, 14),
              tds: this.generate(20, 500),
              harvestIn: "Constantly",
              percentGrown: "100",
              phases: ["1st Roots", "1st Leaves", "Growing"],
            },
            {
              position: 3,
              plants: "strawberries",
              status: 0,
              plantedStamp: "27.01.2020",
              waterLevel: this.generate(20, 1000),
              ph: this.generate(20, 14),
              tds: this.generate(20, 500),
              harvestIn: "in 4 Weeks",
              percentGrown: "7",
              phases: [
                "1st Roots",
                "1st Leaves",
                "Growing",
                "Pre-Flowering",
                "Flowering",
              ],
            },
            {
              position: 4,
              plants: "salad",
              status: 0,
              plantedStamp: "27.01.2020",
              waterLevel: this.generate(20, 1000),
              ph: this.generate(20, 14),
              tds: this.generate(20, 500),
              harvestIn: "Constantly",
              percentGrown: "100",
              phases: ["1st Roots", "1st Leaves", "Growing"],
            },
          ],
        },
      ],
    };
  },
  methods: {
    updateURL(index) {
      const position = this.gardens[this.garden].modules[index]?.position;
      const name = this.gardens[this.garden]?.name;
      if (name) this.$router.push(`/${this.formatName(name)}/${position}`);
    },
    formatName(name) {
      return name.toLowerCase().replace(/\s+/g, "-");
    },
    generate(size, max) {
      const start = new Date().getTime();
      return new Array(size).fill(null).map((_, i) => ({
        time: new Date(start + 1000 * 60 * 60 * i).toString(),
        value: Math.random() * max,
      }));
    },
  },
  computed: {
    inHome() {
      return this.$route.path.match(/\//g).length < 1;
    },
    garden() {
      const name = this.$route.params.garden;
      return this.gardens.findIndex(
        (g) => this.formatName(g.name) === name?.toLowerCase()
      );
    },
    mod() {
      const position = Number.parseInt(this.$route.params.module);
      return this.gardens[this.garden].modules.findIndex(
        (m) => m.position === position
      );
    },
  },
};
</script>
<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <Homebutton 
          v-if="inHome"
        />
      </v-col>
      <v-col cols="11" class="title">
        Home
      </v-col>
    </v-row>
    <div class="home">
      <v-row  class="economyCard">
        <v-col cols="12">
          <v-row class="headbar">
            <v-col cols="1" />
            <v-col cols="6" class="cardTitle headPadding">
              Economy
            </v-col>
            <v-col cols="5"/>
          </v-row>
          <v-row class="economyInfoElement"> 
            <v-col cols="2"/>
            <v-col cols="2">
              <O2icon/>
            </v-col>
            <v-col cols="1"/>
            <v-col cols="7" class="economyInfoText">
              You're producing<br/><span class="info">{{ producedOxygen }} l O2/Day</span>
            </v-col>
          </v-row>
          <v-row class="economyInfoElement"> 
            <v-col cols="2"/>
            <v-col cols="2">
              <Watericon/>
            </v-col>
            <v-col cols="1"/>
            <v-col cols="7" class="economyInfoText">
              You're saving<br/><span class="info">{{ savedWater }} l Water/Day</span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </div>
      <v-carousel 
        hide-delimiters 
        v-on:change="updateURL"
        hide-delimiter-background 
        :show-arrows="false" 
        :continous="false" 
        :value="garden"
        :height="450">
        
        <v-carousel-item 
          v-for="(garden, i) in gardens" :key="i">
          
          <GardenCard :garden="garden"/>

        </v-carousel-item>
    </v-carousel>
    <Delimiter :amount="gardens.length" :index="garden"/>
  </v-container>
</template>

<script>
  import O2icon from '@/components/icons/O2recycle';
  import Watericon from '@/components/icons/WaterRecycle.vue';  
  import Homebutton from '@/components/Homebutton.vue';
  import GardenCard from '@/components/GardenCard.vue';
  import Delimiter from '@/components/Delimiter.vue';

  export default {
    name: 'Plant',
    components: {
      O2icon,
      Watericon,
      Homebutton,
      GardenCard,
      Delimiter,
    },
    data() {
      return {
      savedWater: 5,
      producedOxygen: 1000,
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
    }
  },
    methods: {
      updateURL(index) {
        const name = this.gardens[index]?.name
        if(name) this.$router.push(`/${this.formatName(name)}`)
      },
      formatName(name) {
        return name.toLowerCase().replace(/\s+/g, '-')
      },
      generate(size, max) {
      const start = new Date().getTime();
      return new Array(size).fill(null).map((_, i) => ({
        time: new Date(start + 1000 * 60 * 60 * i).toString(),
        value: Math.random() * max, }));
      },
    },
    computed: {
      inHome() {
        return this.$route.path.match(/\//g).length < 1
      },
      garden() {
        const name = this.$route.params.garden
        return this.gardens.findIndex(g => 
          this.formatName(g.name) === name?.toLowerCase());
      }
    }, 
  } 
</script>
<style scoped>
  .home {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
  }
  .headbar {
    background-color: #6facd9;
  }
  .economyCard {
    margin-top: 0.688rem;
    background-color: #96c2e4;
    border-radius: 0.313rem;
    padding-bottom: 0.2rem;
  }
  .economyInfoElement {
    font-size: 0.875rem;
    margin-top: 1.05rem;
    text-align: left;
    color: #ffffff;
  }
  .economyInfoText {
    margin-top: 0.25rem;
  }
  .headPadding {
    padding: 0.5rem;
  }
</style>
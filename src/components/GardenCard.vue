<template>
  <div class="gardenCard">
    
    <v-row class="headbar">
      <v-col cols="1" />
      <v-col cols="6" dense class="cardTitle headPadding">
        {{ garden.name }}
      </v-col>
      <v-col cols="2" class="text headPadding">
        Status
      </v-col>
      <v-col cols="3">
        <div class="status" :style="currentStatus"/>
      </v-col>
    </v-row>
    
    <v-row>
      <v-col cols="1"/>
      <v-col cols="11" class="text inCardTitle">
        Filling Levels
      </v-col>
    </v-row>
    
    <template v-if="garden.fluidLevels">
      <Level v-for="(level, key) in garden.fluidLevels" :key="key" :name="key" :level="level"/>
    </template>
    <p v-else>No Fertilizer Module Added</p>

    <v-row>
      <v-col cols="1"/>
      <v-col cols="11" class="text inCardTitle">
        Modules
      </v-col>
    </v-row>
    
    <v-row class="modules">
      <v-col cols="5" v-for="(mod, key) in allModules" :key="key" >
        <Module :data="mod" />
      </v-col>
    </v-row>

  </div>
</template>

<script>
import Level from './Level.vue';
import Module from './Module.vue';

export default {
  name: 'Garden',
  components: {
    Level,
    Module,
  },
  data: () => ({
    currentStatus: {
      backgroundColor: "#9fbf77",
    },
  }),
  props: {
    garden: Object,
    index: Number,
    amount: Number,
  },
  computed: {
    //erstellt ein array mit der maximalen anzahl von modulen als leere einträge und fügt an den positionen an denen module sind diese ein
    allModules() {
      const array = new Array(6).fill(null)
      return array.map((_, i) => this.garden.modules.find(m => m.position === i) ?? null)
    },
  }
}
</script>

<style scoped>
  .gardenCard {
    background-color: #ffffff;
    margin-top: 1.75rem;
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
  .modules {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    justify-content: center;
  }
</style>
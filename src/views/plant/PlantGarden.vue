<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <Homebutton :v-if="inHome"/>
      </v-col>
      <v-col cols="11" class="title">
        {{  }} Garden01
      </v-col>
    </v-row>
      <v-carousel 
        hide-delimiters 
        hide-delimiter-background 
        :show-arrows="false" 
        :continous="false" 
        :value="garden"
        :height="450">
        
        <v-carousel-item 
          v-for="(garden, i) in gardens" :key="i">

        </v-carousel-item>
    </v-carousel>
    <Delimiter :amount="gardens" :index="garden"/>
  </v-container>
</template>

<script>
import Homebutton from '@/components/Homebutton.vue';
import Delimiter from '@/components/Delimiter.vue';

export default {
  components: {
    Homebutton,
    Delimiter,
  },
  data: () => ({
    
  }),
  computed: {
    inHome() {
      return this.$route.path.match(/\//g).length < 1;
    },
  }
}
</script>
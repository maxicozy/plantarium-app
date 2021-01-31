<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <homebutton 
          v-if="!inHome"
        />
      </v-col>
      <v-col cols="7"/>
      <v-col cols="4" class="title">
        {{ }}
      </v-col>
    </v-row>
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
          
          <Garden
            :data="garden"/>

        </v-carousel-item>
    </v-carousel>
    <Delimiter :amount="gardens.length" :index="garden"/>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    
  }),
}
</script>
<template>
  <main>
    <!-- ************************************************** -->

    




    <!-- ************************************************** -->
    <div class="container">
        <h2>Film </h2>

        <div class="col d-flex flex-wrap justify-content-center" >
              <div v-for="(card, index) in dataShared.moviesSearched" :key="index" >
                <Card :movieData="card" v-if="card.poster_path !== null"  />
              </div>
        </div>

         <h2>Serie Tv</h2>

        <div class="col d-flex flex-wrap justify-content-center" >
              <div v-for="(card, index) in dataShared.tvShowSearched" :key="index" >
                <Card :movieData="card" v-if="card.poster_path !== null"  />
              </div>
        </div>
    </div>
  </main>
</template>

<script>
import dataShared from '../../shared/dataShared';
import Card from '../commons/Card.vue'

export default {
    name: 'Main',
  data(){
       return{
           dataShared,
       };
   },
  components: {
    Card,
  },


 
};
</script>

<style lang="scss" scoped>
</style>
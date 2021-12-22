<template>
  <main>
    <!-- ************************************************** -->

    




    <!-- ************************************************** -->
    <div class="start d-flex justify-content-center align-items-center" v-if="dataShared.moviesSearched.length == 0">
      <h2>Ricerca film o Serie TV</h2>
    </div>

    <div  v-else class="container">
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
    .start{
      height: calc(100vh - 86px);
      border: 1px solid red;
      h2{
        font-size: 100px;
      }
    }
</style>
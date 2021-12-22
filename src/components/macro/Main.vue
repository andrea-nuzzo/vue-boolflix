<template>
  <main>
    <!-- ************************************************** -->

    




    <!-- ************************************************** -->
    <div class="container">
        <div class="col d-flex flex-wrap justify-content-center" >
              <CardMovie v-for="(card, index) in dataShared.moviesSearched" :key="index" :movieData="card"/>
        </div>

        <div class="col border border-ligth" v-for="(card, index) in dataShared.tvShowSearched" :key="index" >
              <CardTvShow :tvShowData="card"/>
        </div>
    </div>
  </main>
</template>

<script>
import dataShared from '../../shared/dataShared';
import CardMovie from '../commons/CardMovie.vue'
import CardTvShow from '../commons/CardTvShow.vue'

export default {
    name: 'Main',
  data(){
       return{
           dataShared
       };
   },
  components: {
    CardMovie,
    CardTvShow,
  },
 
}
</script>

<style lang="scss" scoped>
</style>
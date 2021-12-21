<template>
  <main>
      <div class="row p-2">
        <div class="col border border-ligth d-flex flex-wrap" >
              <CardMovie v-for="(card, index) in dataShared.moviesSearched" :key="index" :movieData="card"/>
        </div>
      </div>

      <div class="row p-2">
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
  ul{
    li{
      list-style: none;
    }
  }
</style>
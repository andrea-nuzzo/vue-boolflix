<template>
<div>
  <div class="result" v-for="(tvShow, index) in dataShared.tvShowSearched " :key="index">
        <!-- Immagine -->
        <div class="image">
            <img :src='`https://image.tmdb.org/t/p/w342`+tvShow.poster_path' alt="">
        </div>
        

        <!-- Titolo -->
        <div class="title">Titolo: {{tvShow.name}}</div>

        <!-- Titolo Originale -->
        <div class="originalTitle">Titolo Originale: {{tvShow.original_name}}</div>

        <!-- Bandiere lingua -->
        <lang-flag :iso="tvShow.original_language"/>

        <!-- Voto -->
        <div class="vote">
            Voto: <i class="fas fa-star" v-for="(time, index) in Math.round(tvShow.vote_average/2)" :key="index" ></i>
        </div>
    </div>
</div>
</template>

<script>
import dataShared from '../../shared/dataShared';

export default {
    name: 'CardMovie',

    data(){
        return{
            dataShared
        };
    },
}
</script>

<style lang ='scss' scoped>

</style>
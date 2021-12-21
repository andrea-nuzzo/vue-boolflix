<template>
<div>
  <div class="result" v-for="(film, index) in dataShared.moviesSearched " :key="index">
        <!-- Immagine -->
        <div class="image">
            <img :src='`https://image.tmdb.org/t/p/w342`+film.poster_path' alt="">
        </div>
        

        <!-- Titolo -->
        <div class="title">Titolo: {{film.title}}</div>

        <!-- Titolo Originale -->
        <div class="originalTitle">Titolo Originale: {{film.original_title}}</div>

        <!-- Bandiere lingua -->
        <lang-flag :iso="film.original_language"/>

        <!-- Voto -->
        <div class="vote">
            Voto: <i class="fas fa-star" v-for="(time, index) in Math.round(film.vote_average/2)" :key="index" ></i>
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
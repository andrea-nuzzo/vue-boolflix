<template>
<div>
  <div>
        <!-- Immagine -->
        <div class="image">
            <img :src='`https://image.tmdb.org/t/p/w342`+tvShowData.poster_path' alt="">
        </div>
        <!-- Titolo -->
        <div class="title">Titolo: {{tvShowData.name}}</div>

        <!-- Titolo Originale -->
        <div class="originalTitle">Titolo Originale: {{tvShowData.original_name}}</div>

        <!-- Bandiere lingua -->
        <lang-flag :iso="tvShowData.original_language"/>

        <!-- Voto -->
        <div class="vote">
            Voto: <i class="fas fa-star" v-for="(time, index) in Math.round(tvShowData.vote_average/2)" :key="index" ></i>
        </div>
    </div>
</div>
</template>

<script>

export default {
    name: 'CardMovie',

    props:{
        tvShowData: Object,
    },

}
</script>

<style lang ='scss' scoped>

</style>
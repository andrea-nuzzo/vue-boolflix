<template>
<div>
        <div class="row p-3 border border-danger" >
            <div class="col bgImage border border-primary" :style="{backgroundImage: `url('https://image.tmdb.org/t/p/w342${movieData.poster_path}')`}">
                <!-- Titolo -->
                <div class="title">Titolo: {{movieData.title}}</div>

                <!-- Titolo Originale -->
                <div class="originalTitle">Titolo Originale: {{movieData.original_title}}</div>

                <!-- Bandiere lingua -->
                <lang-flag :iso="movieData.original_language"/>

                <!-- Voto -->
                <div class="vote">
                    Voto: <i class="fas fa-star" v-for="(time, index) in Math.round(movieData.vote_average/2)" :key="index" ></i>
                </div>
            </div>
        </div>
</div>
</template>

<script>

export default {
    name: 'CardMovie',
    props:{
        movieData: Object
    },
}
</script>

<style lang ='scss' scoped>

    .row{
        height: 523px;
    }

    .bgImage{
        width: 342px;
        max-width: 342px;
        height: 100%;
        background-size: 100%;
        background-repeat:no-repeat;
    }
</style>
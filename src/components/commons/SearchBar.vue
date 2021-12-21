<template>
  <div>
      <form @submit.prevent="searchFilm(textSearch)" class="d-flex me-5">
        <input class="form-control me-3" v-model="textSearch" type="text" placeholder="Search">
        <button type="button" class="btn btn-outline-danger">Search</button>      
      </form>
  </div>
</template>

<script>
import axios from 'axios';
import dataShared from '../../shared/dataShared';


export default {
    name: 'SearchBar',

    data() {
        return{
            textSearch: "",
            dataShared,
        };
    },

    methods: {

        // Questa funzione importa il testo scritto dall'utente per cercare il film e serie tv
        searchFilm(text){

            //Request API Movies
            axios.get('https://api.themoviedb.org/3/search/movie',{
                params: {api_key: '012221f6f2f19b76150fb8c79d712a76',query: text}
            })
            .then((response) => {
                this.dataShared.moviesSearched = response.data.results;
            });

            //Request API TV Shows
            axios.get('https://api.themoviedb.org/3/search/tv',{
                params: {api_key: '012221f6f2f19b76150fb8c79d712a76',query: text}
            })
            .then((response) => {
                this.dataShared.tvShowSearched = response.data.results;
            });

            //Svuoto il campo input
            this.textSearch = '';
        }
    },
}
</script>

<style lang="scss" scoped>
button{
    &:hover{
        color: black;
    }
}
</style>
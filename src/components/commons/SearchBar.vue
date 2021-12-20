<template>
  <div>
      <input v-model="textSearch" type="text" placeholder="Search">
      <button @click="searchFilm(textSearch)">Search</button>

      <div class="result" v-for="(film, index) in filmResults " :key="index">
        
        <!-- Titolo -->
         <!-- Se il film.title non è presente (quindi siamo all'interno delle serie Tv) inserisco il titolo della serie altrimenti ...-->
        <div class="title" v-if="film.title === undefined ">Titolo: {{film.name}}</div>
        <div class="title" v-else >Titolo: {{film.title}}</div>

        <!-- Titolo Originale -->
        <!-- Se il film.original_title non è presente (quindi siamo all'interno delle serie Tv) inserisco il titolo della serie altrimenti ...-->
        <div class="originalTitle" v-if="film.original_title === undefined ">Titolo Originale: {{film.original_name}}</div>
        <div class="originalTitle" v-else>Titolo Originale: {{film.original_title}}</div>

        <!-- Bandiere lingua -->
        <lang-flag :iso="film.original_language"/>

        <!-- Voto -->
        <div class="vote">Voto: {{film.vote_average}}</div>
      </div>

  </div>
</template>

<script>
import axios from 'axios';
import LangFlag from 'vue-lang-code-flags';
export default {
    name: 'SearchBar',
    components: {
    LangFlag,
    },

    data() {
        return{
            textSearch: "",
            filmResults: [],
        };
    },

    methods: {

        // Questa funzione importa il testo scritto dall'utente per cercare il film
        searchFilm(text){

            function getMovie() {
                return  axios.get('https://api.themoviedb.org/3/search/movie',{
                params: {
                // Aggiungo il parametro api_key per l'accesso all'API e ...
                api_key: '012221f6f2f19b76150fb8c79d712a76',

                //il parametro query con il testo inserito dall'utente per la ricerca.
                query: text,
                }
                });
            }

             function getTvSeries() {
                return  axios.get('https://api.themoviedb.org/3/search/tv',{
                params: {
                // Aggiungo il parametro api_key per l'accesso all'API e ...
                api_key: '012221f6f2f19b76150fb8c79d712a76',

                //il parametro query con il testo inserito dall'utente per la ricerca.
                query: text,
                }
                });
            }

            // Unisco i dati delle due richieste axios Film e Serie TV nell'array filmResults
            axios.all([getMovie(), getTvSeries()])
            .then((results) => {
                this.filmResults = [...results[0].data.results, ...results[1].data.results];
            });

            //Svuoto il campo input
            this.textSearch = '';
        }
    },

}
</script>

<style lang="scss" scoped>
.result{
    margin: 20px;
    border: 3px solid pink;
}
</style>
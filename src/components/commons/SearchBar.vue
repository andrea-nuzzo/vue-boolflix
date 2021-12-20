<template>
  <div>
      <input v-model="textSearch" type="text" placeholder="Search">
      <button @click="searchFilm(textSearch)">Search</button>

      <div class="result" v-for="(film, index) in filmResults " :key="index">

        <div class="title" v-if="film.title == '' ">Titolo: {{film.name}}</div>
        <div class="title" v-else >Titolo: {{film.title}}</div>

        <div class="originalTitle" v-if="film.original_title == '' ">Titolo Originale: {{film.original_name}}</div>
        <div class="originalTitle">Titolo Originale: {{film.original_title}}</div>


        <lang-flag :iso="film.original_language"/>

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

            axios.all([getMovie(), getTvSeries()])
            .then((results) => {
                console.log(results[1].data.results);
                this.filmResults = [...results[0].data.results, ...results[1].data.results];
            });

            
            //Svuoto il campo input
            this.textSearch = '';
        }
    },
}
</script>

<style lang="scss" scoped>
lang-flag{
   height: 40px;
}
</style>
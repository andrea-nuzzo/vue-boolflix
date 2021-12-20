<template>
  <div>
      <input v-model="textSearch" type="text" placeholder="Search">
      <button @click="searchFilm(textSearch)">Search</button>

      <div class="result" v-for="(film, index) in filmResults " :key="index">
          <div class="title">Titolo: {{film.title}}</div>
          <div class="originalTitle">Titolo Originale: {{film.original_title}}</div>
          <div class="language">Lingua: {{film.original_language}}</div>
          <div class="vote">Voto: {{film.vote_average}}</div>
      </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SearchBar',

    data() {
        return{
            textSearch: "",
            filmResults: [],
        };
    },

    methods: {

        // Questa funzione importa il testo scritto dall'utente per cercare il film
        searchFilm(text){
            //Creo una chiamata axios per la ricerca dei film
            axios.get('https://api.themoviedb.org/3/search/movie', {
                
                params: {
                // Aggiungo il parametro api_key per l'accesso all'API e ...
                api_key: '012221f6f2f19b76150fb8c79d712a76',

                //il parametro query con il testo inserito dall'utente per la ricerca.
                query: text,
                }
            })
            .then((response) => {

                // Inserisco i risultati della ricerca in una variabile
                this.filmResults = response.data.results;
            })
            .catch(function (error) {
                console.log(error);
            })

            //Svuoto il campo input
            this.textSearch = '';
        }
    },
}
</script>

<style lang="scss" scoped>
</style>
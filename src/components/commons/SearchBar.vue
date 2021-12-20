<template>
  <div>
      <input type="text" placeholder="Search">
      <button @click="searchFilm()">Search</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'SearchBar',

    methods: {
        // Questa funzione importa il testo scritto dall'utente per cercare il film
        searchFilm(){
            axios.get('https://api.themoviedb.org/3/search/movie', {
                params: {
                api_key: '012221f6f2f19b76150fb8c79d712a76',
                query: 'ritorno al futuro'
                }
            })
            .then(function (response) {
                console.log(response.data.results);
            })
            .catch(function (error) {
                console.log(error);
            })
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
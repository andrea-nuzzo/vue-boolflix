<template>
  <div>
    <div class="row m-1 d-flex align-items-start flex-column backgroundContainer" :class="{active: isActive }">
      <div class="topCard" @mouseenter="isActive = true" @mouseleave="isActive = false">
          <img :src="`https://image.tmdb.org/t/p/w342${movieData.poster_path}`" alt="">
      </div>

      <div class="bottomCard" v-show="isActive" >
        <h1 class="title">{{movieData.title || movieData.name }}</h1>

        <h5 class="originalTitle">
         {{movieData.original_title || movieData.original_name }}
        </h5>

        <div>
          <lang-flag class="flag" :iso="movieData.original_language"/>
        </div>

        <h5 class="vote">
          <i class="fas fa-star" v-for="(time, index) in Math.round(movieData.vote_average / 2)" :key="index"></i>
          <i class="far fa-star" v-for="(time, index) in (5 - Math.round(movieData.vote_average / 2))" :key="index"></i>
        </h5>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    movieData: Object,
  },

  data(){
    return{
      isActive: false,
    }
  }
};
</script>

<style lang ='scss' scoped>


    .topCard{
      width: 200px;
      margin: 0 auto;
      border-top-left-radius: 2rem;
      border-top-right-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;

        img {
        width: 200px;
        border-top-left-radius: 2rem;
        border-top-right-radius: 2rem;
      }
      
    }
    .active{
      transition: .5s;
      transform: scale(1.1);
    }

    .bottomCard{
      max-width:200px;
      padding: 20px;
      margin: 0 auto;
      border-bottom-left-radius: 2rem;
      border-bottom-right-radius: 2rem;
      color: white;
      background-color: black;

      h1{
        font-size: 14px;
      }

       h5{
        font-size: 12px;
      }

      .flag{
        font-size: 20px;
        border-radius: 50%;
      }

      .vote{
        margin-top: 10px;
      }
     
    }


</style>
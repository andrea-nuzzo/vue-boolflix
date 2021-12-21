<template>
  <main>
    <CardMovie/>
    <CardTvShow/>
  </main>
</template>

<script>

import CardMovie from '../commons/CardMovie.vue'
import CardTvShow from '../commons/CardTvShow.vue'

export default {
    name: 'Main',

  components: {
    CardMovie,
    CardTvShow,
  },
}
</script>

<style lang="scss" scoped>

</style>
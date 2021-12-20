<template>
  <header>
      <SearchBar/>
  </header>
</template>

<script>

import SearchBar from '../commons/SearchBar.vue';

export default {
    name: 'Header',
    components: {
    SearchBar,
  }

}
</script>

<style lang="scss" scoped>

</style>
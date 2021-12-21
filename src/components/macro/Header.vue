<template>
  <header>
    <div class="container-fluid">
      <div class="row">
        <div class="col d-flex align-items-center justify-content-between border border-danger">
            <div class="logo">
              <img src="../../assets/img/Logo_Big.png" alt="">
            </div>
            <SearchBar/>
        </div>
      </div>
    </div>
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
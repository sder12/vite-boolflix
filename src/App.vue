<!-- APP VUE -->

<script>
import { store } from "./store";
import axios from "axios";

import AppLogo from "./components/AppLogo.vue";
import AppSearch from './components/AppSearch.vue';
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppLogo,
    AppSearch,
    AppMain
  },
  data() {
    return {
      store
    }
  },
  methods: {
    searchApi() {
      let urlApi = `${this.store.apiSearch}${this.store.apiGenreMovie}`
      let urlApiSeries = `${this.store.apiSearch}${this.store.apiGenreTv}`
      //PARAMS ObJ
      let params = {};
      params[store.apiKeyParams] = this.store.apiKey;
      params[store.apiSearchParams] = this.store.apiSearchInput;
      if (this.store.apiSearchInput !== "") {
        //MOVIES
        axios.get(urlApi, { params })
          .then((resp) => {
            console.log("movies", resp.data.results),
              this.store.movies = resp.data.results
          }
          )
          .catch((err) => ("Error", err))
        //SERIES
        axios.get(urlApiSeries, { params })
          .then((resp) => {
            console.log("series", resp.data.results),
              this.store.seriesTv = resp.data.results
          }
          )
          .catch((err) => ("Error", err))
      }
    }
  }
}
</script>
 
<template>
  <!-- CONTAINER -->
  <div class="container">

    <!-- HEADER -->
    <header class="header">
      <div class="header__menu">
        <AppLogo />
      </div>
      <div class="header__search">
        <AppSearch @btnClicked="searchApi()" />
      </div>
    </header>
    <!-- / HEADER -->

    <!-- MAIN -->
    <AppMain />
    <!--/MAIN -->
  </div>
  <!-- /CONTAINER -->
</template>
 
<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/mixins" as *;


.header {
  @include flex(row, space-between, center);
  padding: 3em 0 1em;
}
</style>
<!-- APP VUE -->

<script>
import { store } from "./store";
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppSearch from './components/AppSearch.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppSearch
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
  <div class="container">
    <AppHeader />
    <AppSearch @btnClicked="searchApi()" />
    <AppMain />
  </div>
</template>
 
<style lang="scss">
@use "./styles/general.scss" as *;
</style>
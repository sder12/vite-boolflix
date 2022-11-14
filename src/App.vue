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
  created() {
    this.searchApi()
  },
  methods: {
    searchApi() {

      let urlApi = `${this.store.apiSearch}${this.store.apiGenre}`
      //params
      let params = {};
      params[store.apiKeyParams] = this.store.apiKey;
      params[store.apiSearchParams] = this.store.apiSearchInput;
      if (this.store.apiSearchInput !== "") {
        axios.get(urlApi, { params })
          .then((resp) => {
            console.log(resp.data.results),
              this.store.movies = resp.data.results
          }
          )
          .catch((err) => ("Error", err))
      }
    },
    // showConsole() {
    //   console.log(this.store.apiSearchInput);
    // }
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
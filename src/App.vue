<!-- APP VUE -->

<script>
import { store } from "./store";
import axios from "axios";

import AppLogo from "./components/AppLogo.vue";
import AppNav from "./components/AppNav.vue"
import AppSearch from './components/AppSearch.vue';
import AppMain from "./components/AppMain.vue";

export default {
  components: {
    AppLogo,
    AppNav,
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
      this.store.activePag = "shows";
      //URLs
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
          .finally(() => { this.store.loadingMovies = true })
        //SERIES
        axios.get(urlApiSeries, { params })
          .then((resp) => {
            console.log("series", resp.data.results),
              this.store.seriesTv = resp.data.results
          }
          )
          .catch((err) => ("Error", err))
          .finally(() => { this.store.loadingSeries = true })
      }
    },
    restartSearching() {
      // this.store.activePag = "home";
      this.store.loadingSeries = false;
      this.store.loadingMovies = false;
      this.store.seriesTv = [];
      this.store.movies = [];
    }
  }
}

</script>
 
<template>
  <!-- CONTAINER -->
  <div class="container">

    <!-- HEADER -->
    <header class="bg-header header">
      <div class="wrapper header__flex">
        <section class="header__menu">
          <AppLogo @click="restartSearching" />
          <AppNav
            @click="this.store.activePag == 'home' || this.store.activePag == 'about' ? restartSearching() : ''" />
        </section>
        <section class=" header__search">
          <AppSearch @btnClicked="searchApi()" />
        </section>
      </div>
    </header>
    <!-- / HEADER -->

    <!-- MAIN -->
    <main class="bg-main main">
      <div class="wrapper">
        <AppMain />
      </div>
    </main>
    <!--/MAIN -->
  </div>
  <!-- /CONTAINER -->
</template>
 
<style lang="scss">
@use "./styles/general.scss" as *;
@use "./styles/partials/mixins" as *;


.header {
  height: $header-height;
  @include flex(row, center, center);

  &__flex {
    @include flex(row, space-between, center);
  }

  &__menu {
    @include flex(row, flex-start, center);
    gap: 2em
  }

  &__search {
    width: 40%;
    @include flex(row, flex-end, center);
  }
}

.main {
  height: calc(100vh - $header-height);
  overflow-y: scroll;
}
</style>
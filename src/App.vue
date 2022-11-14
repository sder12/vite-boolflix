<!-- APP VUE -->

<script>
import { store } from "./store";
import axios from "axios";

import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
export default {
  components: {
    AppHeader,
    AppMain,
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
      let params = {};
      let urlApi = this.store.apiSearchMovie;
      params[store.apiKeyParams] = this.store.apiKey;
      params[store.apiSearchParams] = this.store.apiSearchInput;
      if (this.store.apiSearchInput !== "") {
        axios.get(urlApi, { params })
          .then((resp) =>
            console.log(resp.data.results),
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
    <AppMain />
  </div>
</template>
 
<style lang="scss">
@use "./styles/general.scss" as *;
</style>
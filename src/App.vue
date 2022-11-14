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
    axios.get(this.store.apiExampleMovie)
      .then((resp) => console.log(resp))
      .catch((err) => ("Error", err))
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
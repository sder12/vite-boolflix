<!-- APP VUE -->

<script>
import { store } from "./store"
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
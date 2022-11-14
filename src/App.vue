<script>
import { store } from "./store"
export default {
  data() {
    return {
      store
    }
  }
}
</script>
 
<template>
  <h1> Movies & Series Tv</h1>
  <h2>{{ store.debug }} </h2>
</template>
 
<style lang="scss">

</style>
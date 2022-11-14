<!-- SEARCH BAR INSIDE HEADER -->
<script>
import { store } from "../store"
export default {
    name: "AppSearch",
    data() {
        return {
            store
        }
    },
    methods: {
        printConsole() {
            console.log(store.apiSearchInput)
        }


    }
}
</script>
 
<template>

    <label for="search" class="sr-only">Search a movie or a series TV</label>
    <input type="text" id="search" placeholder="Search a movie" v-model="store.apiSearchInput">

    <button @click="printConsole()"> Search</button>
</template>
 
<style lang="scss" scoped>

</style>
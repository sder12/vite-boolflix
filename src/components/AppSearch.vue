<!-- SEARCH BAR INSIDE HEADER -->
<script>
import { store } from "../store"
export default {
    name: "AppSearch",
    data() {
        return {
            store,
            input: "",
        }
    },
    methods: {
        saveInput() {
            //Save user input in the store
            this.store.apiSearchInput = this.input;
            console.log(this.store.apiSearchInput)
        }
    }
}
</script>
 
<template>

    <label for="search" class="sr-only">Search a movie or a series TV</label>
    <input type="text" id="search" placeholder="Search a movie" v-model="input">

    <button @click="saveInput()"> Search </button>
</template>
 
<style lang="scss" scoped>

</style>
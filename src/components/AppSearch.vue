<!-- SEARCH BAR  -->
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
    emits: {
        btnClicked: null,
    },
    methods: {
        saveInput() {
            //Save user input in the store
            this.store.apiSearchInput = this.input;
            // console.log(this.store.apiSearchInput)
            this.$emit('btnClicked');
            this.input = "";
        }
    }
}
</script>
 
<template>

    <label for="search" class="sr-only">Search a movie or a series TV</label>
    <input type="text" id="search" placeholder="Search a movie" v-model="input">

    <button class="btn btn-search" @click="saveInput()"> Search </button>
</template>
 
<style lang="scss" scoped>

</style>
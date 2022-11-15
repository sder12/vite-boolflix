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
            //Emit the click 
            this.$emit('btnClicked');
            //Clean the input
            this.input = "";
        }
    }
}
</script>
 
<template>

    <label for="search" class="sr-only">Search a movie or a series TV</label>
    <input type="search" id="search" placeholder="Search a movie" v-model="input" @keyup.enter="saveInput()">

    <button class="btn btn-search" @click="saveInput()"> Search </button>
</template>
 
<style lang="scss" scoped>

</style>
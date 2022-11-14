<!-- MAIN -->
<script>
import { store } from "../store"
import AppMainCard from './AppMainCard.vue';
export default {
    name: "AppMain",
    components: {
        AppMainCard,
    },
    data() {
        return {
            store,
        }
    }
}
</script>
 
<template>
    <h4>MAIN</h4>

    <div class="poster-wrapper" v-if="store.apiSearchInput">
        <AppMainCard class="poster-cards" v-for="(movie, index) in store.movies" :key="index" :titleMain="movie.title"
            :titleOriginal="movie.original_title" :language="movie.original_language" :vote="movie.vote_average" />
    </div>
    <div v-else>
        <span>Search</span>
    </div>
</template>
 




<style lang="scss" scoped>
.poster-wrapper {
    display: flex;
    flex-wrap: wrap;


    .poster-cards {

        //DEBUG
        border: 2px solid black;
        background-color: white;
        margin: .5em;
    }

}
</style>
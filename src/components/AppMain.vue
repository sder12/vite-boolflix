<!-- MAIN -->
<script>
import { store } from "../store"
import AppMainCard from './AppMainCard.vue';
export default {
    name: "AppMain",
    components: {
        AppMainCard
    },
    data() {
        return {
            store
        }
    },
    computed: {
        firstSearch() {
            if (store.seriesTv.length == 0 && store.movies.length == 0
                && this.store.loadingSeries == false && this.store.loadingMovies == false) {
                return true
            }
        },
        notFoundSearch() {
            if (store.seriesTv.length == 0 && store.movies.length == 0
                && this.store.loadingSeries == true && this.store.loadingMovies == true) {
                return true
            }
        }
    }
}
</script>
 
<template>
    <!-- first research -->
    <div v-if="firstSearch">
        <span>fai la tua prima ricerca </span>
    </div>

    <!--  research without result -->
    <div v-if="notFoundSearch">
        <span> Nessun elemento trovato </span>
    </div>

    <!-- research with results -->
    <div v-else>
        <!-- MOVIES CARDS -->
        <section v-if="store.movies.length !== 0">
            <h4>MOVIES</h4>
            <div class="poster-wrapper">
                <AppMainCard class="poster-cards" v-for="movie in store.movies" :key="movie.id" :item="movie" />
            </div>
        </section>

        <!-- SERIES TV CARDS -->
        <section v-if="store.seriesTv.length !== 0">
            <h4>SERIES</h4>
            <div class="poster-wrapper">
                <AppMainCard class="poster-cards" v-for="serie in store.seriesTv" :key="serie.id" :item="serie" />
            </div>
        </section>
    </div>


</template>
            
            
            
            
            
<style lang = "scss" scoped >
h4 {
    // DEBUG
    background-color: white;
    padding: 2em 0;
}

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
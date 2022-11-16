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
                && !this.store.loadingSeries && !this.store.loadingMovies) {
                return true
            }
        },
        notFoundSearch() {
            if (store.seriesTv.length == 0 && store.movies.length == 0
                && this.store.loadingSeries && this.store.loadingMovies) {
                return true
            }
        },
        thereAreMovies() {
            return this.store.movies.length !== 0 ? true : false
        },
        thereAreSeries() {
            return this.store.seriesTv.length !== 0 ? true : false
        }
    }
}
</script>
 
<template>
    <!-- first research -->
    <div v-if="firstSearch" id="search-first">
        <span>
            <i class="fa-solid fa-magnifying-glass"></i>
            fai la tua prima ricerca
        </span>
    </div>

    <!--  research without result -->
    <div v-if="notFoundSearch" id="search-not-found">
        <span>
            <i class="fa-solid fa-triangle-exclamation"></i>
            Nessun elemento trovato
        </span>
    </div>

    <!-- research with results -->
    <div v-else>
        <!-- MOVIES CARDS -->
        <section v-if="thereAreMovies">
            <h4>Movies</h4>
            <div class="poster-wrapper">
                <AppMainCard class="poster-cards" v-for="movie in store.movies" :key="movie.id" :item="movie" />
            </div>
        </section>

        <!-- SERIES TV CARDS -->
        <section v-if="thereAreSeries">
            <h4>Series Tv</h4>
            <div class="poster-wrapper">
                <AppMainCard class="poster-cards" v-for="serie in store.seriesTv" :key="serie.id" :item="serie" />
            </div>
        </section>
    </div>


</template>
            
            
            
            
            
<style lang = "scss" scoped >
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

//DIV without movies
#search-first,
#search-not-found {
    text-align: center;
    padding: 4em;
    font-size: 1rem;
    text-transform: uppercase;
}

#search-not-found {
    color: red;
}

//Movies-Series Cards styling

h4 {
    padding: 1em .5em;
    margin: 0 1em;
    font-weight: 500;
    font-size: .8rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    background-color: lighten($bg-color, 10%);
}

.poster-wrapper {
    @include flex(row, flex-start, flex-start);
    flex-wrap: wrap;
    gap: 1em;
    margin-left: 1em;



    .poster-cards {
        width: calc(100% / 4 - 1em);
        // border: 1px solid white;
    }

}
</style>
            
            
            

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
        <div v-if="this.store.activePag !== 'about'">
            <h2>Welcome to Boolfix</h2>
            <h3> We are glad you're here! </h3>
            <div>
                <span v-if="this.store.activePag == 'home'">This is a website made with Vue+Vite</span>
                <span v-if="this.store.activePag == 'shows'"> Look for any movie or TV show in our search bar</span>
            </div>
        </div>

        <div class="about-us" v-if="this.store.activePag == 'about'">
            <h2>About Us</h2>
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
    </div>

    <!--  research without result -->
    <div v-if="notFoundSearch" id="search-not-found">
        <span>
            <i class="fa-solid fa-triangle-exclamation"></i> No results <i class="fa-solid fa-triangle-exclamation"></i>
            <br>
            There were no matches for your search term
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
}

#search-first {
    line-height: 3em;

    h2 {
        font-size: 3rem;
    }

    h3 {
        font-size: 2rem;
        font-weight: 200;
    }
}

#search-not-found {
    color: red;
    text-transform: uppercase;
    font-size: 1rem;
    line-height: 2em;
}

.about-us span {
    font-style: italic;
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
            
            
            

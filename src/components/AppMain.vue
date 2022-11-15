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
    }
}
</script>
 
<template>
    <!-- IF WE TYPE IN THE INPUT + BTN -->
    <div v-if="store.apiSearchInput">

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

        <!--  "Nessun elemento trovato" +  "Loading"
        PROBLEMI CHIAMATA AXIOS ARRIVA DOPO COMPARE MSG PRIMA DEL CARICAMENTO DELLO STORE       
        <div v-if="store.movies.length == 0 && store.seriesTv.length == 0 && store.apiSearchInput">
            Nessun elemento trovato
        </div> -->
    </div>

    <!-- ELSE EMPTY INPUT -->
    <div v-else>
        <span>fai la tua prima ricerca </span>
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
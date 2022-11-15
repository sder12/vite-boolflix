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
    },
    methods: {
        //Language IMG  Flag ---> return src content
        getImageUrl(lan) {
            let urlImg = "";
            if (this.store.languages.includes(lan)) {
                urlImg = `../assets/languages/${lan}.svg`
            } else {
                urlImg = `data:,`
            }
            return new URL(urlImg, import.meta.url).href
        },
        //Languages TEXT showing Img or Text--> return Boolean
        showImgOrTxt(lan) {
            if (this.store.languages.includes(lan)) {
                //true showing Img
                return true
            } else {
                //false showing Text
                return false
            }
        },
        //Full Star 
        fifthsNumbers(number) {
            let numbersFifth = Math.round(number / 2);
            return numbersFifth
        },
        //Empty Star
        calcOutOfFive(number) {
            // const numbersFifth = fifts;
            const numbersMinus = 5 - this.fifthsNumbers(number);
            return numbersMinus
        }
    }

}
</script>
 
<template>
    <!-- IF WE TYPE IN THE INPUT + BTN -->
    <div v-if="store.apiSearchInput">

        <!-- MOVIES CARDS -->
        <div v-if="store.movies.length !== 0">
            <h4>MOVIES</h4>
            <div class="poster-wrapper">
                <AppMainCard class="poster-cards" v-for="(movie, index) in store.movies" :key="index"
                    :titleMain="movie.title" :titleOriginal="movie.original_title"
                    :languageTxt="movie.original_language" :vote="fifthsNumbers(movie.vote_average)"
                    :voteNot="calcOutOfFive(movie.vote_average)" :languageImg="getImageUrl(movie.original_language)"
                    :languageInStore="showImgOrTxt(movie.original_language)"
                    :imgPoster="`${this.store.imgLink}${movie.poster_path}`" />
            </div>
        </div>

        <!-- SERIES TV CARDS -->
        <div v-if="store.seriesTv.length !== 0">
            <h4>SERIES</h4>
            <div class="poster-wrapper">
                <AppMainCard class="poster-cards" v-for="(series, index) in store.seriesTv" :key="index"
                    :titleMain="series.name" :titleOriginal="series.original_name"
                    :languageTxt="series.original_language" :vote="fifthsNumbers(series.vote_average)"
                    :voteNot="calcOutOfFive(series.vote_average)" :languageImg="getImageUrl(series.original_language)"
                    :languageInStore="showImgOrTxt(series.original_language)"
                    :imgPoster="`${this.store.imgLink}${series.poster_path}`" />
            </div>
        </div>

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
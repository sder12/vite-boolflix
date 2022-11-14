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
        getImageUrl(lan) {
            let urlImg = "";
            if (lan == "en" || lan == "it" || lan == "es" || lan == "fr" || lan == "pt" || lan == "ja" || lan == "de" || lan == "ko") {
                urlImg = `../assets/languages/${lan}.svg`
            } else {
                urlImg = `data:,`
            }
            return new URL(urlImg, import.meta.url).href

            // let urlImg = "";
            // this.store.languages.forEach((item) => {
            //     if (lan === item) {
            //         urlImg = `../assets/languages/${lan}.svg`
            //     } else {
            //         urlImg = `data:,`
            //     }
            // })
            // return new URL(urlImg, import.meta.url).href

        },
        showImgOrTxt(lan) {
            if (lan == "en" || lan == "it" || lan == "es" || lan == "fr" || lan == "pt" || lan == "ja" || lan == "de" || lan == "ko") {
                //true showing Img
                return true
            } else {
                //false showing Text
                return false
            }


            // this.store.languages.forEach((item) => {
            //     if (lan === item) {
            //         //true si vedono bandiere
            //         return true
            //     } else {
            //         //false 
            //         return false
            //     }
            // })

        },

    }
}
</script>
 
<template>
    <div v-if="store.apiSearchInput">
        <div v-if="store.movies.length !== 0">
            <h4>MOVIES</h4>
            <div class="poster-wrapper">
                <AppMainCard class="poster-cards" v-for="(movie, index) in store.movies" :key="index"
                    :titleMain="movie.title" :titleOriginal="movie.original_title"
                    :languageTxt="movie.original_language" :vote="movie.vote_average"
                    :languageImg="getImageUrl(movie.original_language)"
                    :languageInStore="showImgOrTxt(movie.original_language)" />
            </div>
        </div>

        <div v-if="store.seriesTv.length !== 0">
            <h4>SERIES</h4>
            <div class="poster-wrapper">
                <AppMainCard class="poster-cards" v-for="(series, index) in store.seriesTv" :key="index"
                    :titleMain="series.name" :titleOriginal="series.original_name"
                    :languageTxt="series.original_language" :vote="series.vote_average"
                    :languageImg="getImageUrl(series.original_language)"
                    :languageInStore="showImgOrTxt(series.original_language)" />
            </div>
        </div>

        <div v-if="store.movies.length == 0 && store.seriesTv.length == 0">
            Nessun elemento trovato
        </div>
    </div>

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
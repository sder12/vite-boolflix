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

        }

    }
}
</script>
 
<template>
    <h4>MAIN</h4>


    <div class="poster-wrapper" v-if="store.apiSearchInput">
        <AppMainCard class="poster-cards" v-for="(movie, index) in store.movies" :key="index" :titleMain="movie.title"
            :titleOriginal="movie.original_title" :languageTxt="movie.original_language" :vote="movie.vote_average"
            :languageImg="getImageUrl(movie.original_language)"
            :languageInStore="showImgOrTxt(movie.original_language)" />
    </div>

    <div v-else>
        <span>fai la tua prima ricerca </span>
    </div>
</template>
            
            
            
            
            
<style lang = "scss" scoped >
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
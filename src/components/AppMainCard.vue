<!-- CARD in MAIN -->
<script>
import { store } from "../store"
export default {
    name: "AppMainCard",
    props: {
        item: Object,
    },
    data() {
        return {
            store
        }
    },
    methods: {
        //Language IMG  Flag ---> return src content
        getImageUrl(lan) {
            let urlImg = `../assets/languages/${lan}.svg`
            return new URL(urlImg, import.meta.url).href
        }
    },
    computed: {
        fullStars() {
            const numbersStars = Math.round(parseInt(this.item.vote_average) / 2);
            return numbersStars
        },
        emptyStars() {
            const numbersNotStars = 5 - (Math.round(parseInt(this.item.vote_average) / 2));
            return numbersNotStars
        },
        getTitle() {
            return this.item.title ? this.item.title : this.item.name
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name
        }
    }
}
</script>
 
<template>
    <ul>
        <li>
            <div>
                <img :src="`${this.store.imgLink}${item.poster_path}`" :alt="item.title">
            </div>

            <div>
                <!-- TITLE -->
                <div>
                    {{ getTitle }}
                </div>
                <!-- ORIGINAL TITLE -->
                <div v-show="getOriginalTitle !== getTitle">
                    {{ getOriginalTitle }}
                </div>
                <!-- LANGUAGE -->
                <div>
                    <div v-if="this.store.languages.includes(item.original_language)">
                        <img :src="getImageUrl(item.original_language)" :alt="item.original_language">
                    </div>
                    <div v-else>
                        <p>{{ item.original_language }}</p>
                    </div>
                </div>
                <!-- STARS -->
                <div>
                    <ul>
                        <li v-for="n in fullStars"> &starf; </li>
                        <li v-for="m in emptyStars"> &star;</li>
                    </ul>
                </div>
            </div>

        </li>
    </ul>
</template>
 
<style lang="scss" scoped>
ul {
    display: flex;
}

img {
    width: 40px;
}
</style>
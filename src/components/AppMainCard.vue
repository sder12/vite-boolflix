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
    <ul id="card">
        <li>
            <!-- FRONT -->
            <div id="poster-front">
                <img :src="`${this.store.imgLink}${item.poster_path}`" :alt="item.title">
            </div>

            <!-- BACK -->
            <div id="poster-back">
                <ul>
                    <!-- TITLE -->
                    <li>
                        <div>
                            <h5> Titolo </h5>{{ getTitle }}
                        </div>
                    </li>

                    <!-- ORIGINAL TITLE -->
                    <li>
                        <div v-show="getOriginalTitle !== getTitle">
                            <h5> Titolo originale</h5>
                            {{ getOriginalTitle }}
                        </div>
                    </li>

                    <!-- STARS -->
                    <li>
                        <h5>Voto</h5>
                        <ul id="stars-vote">
                            <li v-for="n in fullStars">
                                <i class="fa-solid fa-star"></i>
                            </li>
                            <li v-for="m in emptyStars">
                                <i class="fa-regular fa-star"></i>
                            </li>
                        </ul>
                    </li>

                    <!-- LANGUAGE -->
                    <li id="language">
                        <h5>Language </h5>
                        <div v-if="this.store.languages.includes(item.original_language)">
                            <img :src="getImageUrl(item.original_language)" :alt="item.original_language">
                        </div>
                        <div v-else>
                            <p>{{ item.original_language }}</p>
                        </div>
                    </li>

                </ul>
            </div>
        </li>
    </ul>
</template>
 
<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

// HOVER
#poster-back {
    display: none;
}

#card:hover #poster-front {
    display: none;
}

#card:hover #poster-back {
    display: block;
}

#card {
    background-color: $bg-header;
}

// STYLE
#poster-front {
    width: 100%;

    img {
        width: 100%;
        display: block;
    }
}

#poster-back {
    width: 100%;
    padding: 10px 20px;

    li {
        margin: 5px 0;
    }

    h5 {
        text-transform: uppercase;
        color: darken(white, 30%);
        padding: 6px 0 px;
    }

    #language {
        img {
            width: 20px;
        }
    }

    #stars-vote {
        @include flex(row, flex-start, center);
    }

}
</style>
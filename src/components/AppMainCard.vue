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
        //GET IMG BASIC 
        getImagePath(pathImg) {
            return new URL(pathImg, import.meta.url).href
        },
        //GET IMG for Language IMG  Flag ---> return src content
        getImageLanguage(lan) {
            let urlImg = `../assets/languages/${lan}.svg`
            return new URL(urlImg, import.meta.url).href
        }
    },
    computed: {
        fullStars() {
            return Math.round(parseInt(this.item.vote_average) / 2);
        },
        // emptyStars() {
        //     return 5 - (Math.round(parseInt(this.item.vote_average) / 2));
        // },
        getTitle() {
            return this.item.title ? this.item.title : this.item.name
        },
        getOriginalTitle() {
            return this.item.original_title ? this.item.original_title : this.item.original_name
        },
        getImage() {
            return this.item.poster_path ? `${this.store.imgLink}${this.item.poster_path}` : this.getImagePath('../assets/not_found.jpg')
        }
    }
}
</script>
 
<template>
    <div id="card">
        <div id="inner">

            <!-- FRONT -->
            <div id="poster-front">
                <!-- <img :src="`${this.store.imgLink}${item.poster_path}`" :alt="item.title"> -->
                <!-- <img src="../assets/no-image.png" :alt="getTitle"> -->
                <img :src="getImage" :alt="getTitle">
            </div>

            <!-- BACK -->
            <div id="poster-back">
                <!-- TITLE -->
                <div>
                    <h5> Title </h5>
                    {{ getTitle }}
                </div>
                <!-- ORIGINAL TITLE -->
                <div v-show="getOriginalTitle !== getTitle">
                    <h5> Original title</h5>
                    {{ getOriginalTitle }}
                </div>
                <!-- STARS -->
                <div id="stars-vote">
                    <h5>Vote</h5>
                    <!-- <ul>
                        <li v-for="n in fullStars">
                            <i class="fa-solid fa-star"></i>
                        </li>
                        <li v-for="m in emptyStars">
                            <i class="fa-regular fa-star"></i>
                        </li>
                    </ul> -->
                    <i v-for="n in 5" key="n" class="fa-star" :class="n <= fullStars ? 'fa-solid' : 'fa-regular'"> </i>
                </div>

                <!--LANGUAGE -->
                <div id="language">
                    <h5>Language </h5>
                    <div v-if="this.store.languages.includes(item.original_language)">
                        <img :src="getImageLanguage(item.original_language)" :alt="item.original_language">
                    </div>
                    <div v-else>
                        <p>{{ item.original_language }}</p>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>
 
<style lang="scss" scoped>
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

//BACKGROUND CARD
#card {
    background-color: $bg-header;
    height: 350px;
    object-fit: cover;
    position: relative;
}

#inner {
    height: 100%;
}

// HOVER
// #poster-back,
// #card:hover #poster-front {
//     display: none;
// }

// #card:hover #poster-back {
//     display: block;
// }


//TRANSFORM 3D
#poster-back {
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    background-color: rgba($bg-header, .8);
    transform: rotateY(180deg);
}

// STYLE
#poster-front {
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}

#poster-back {
    width: 100%;
    padding: 10px 20px;

    >* {
        margin-bottom: 5px;
    }

    h5 {
        text-transform: uppercase;
        color: darken(white, 30%);
        padding: 5px 0px;
    }

    #language {
        img {
            max-width: 40px;
        }
    }

    // #stars-vote ul {
    //     @include flex(row, flex-start, center);
    // }

}
</style>
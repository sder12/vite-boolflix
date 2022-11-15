<!-- CARD in MAIN -->
<script>
export default {
    name: "AppMainCard",
    props: {
        //TITLE
        titleMain: String,
        titleOriginal: String,
        //LANGUAGE
        languageImg: String,
        languageTxt: String,
        //true countries flag // false  txt
        languageInStore: Boolean,
        //VOTE STARS NUMBERS
        vote: Number,
        voteNot: Number,
        //POSTER IMG
        imgPoster: String,
    }
}
</script>
 
<template>
    <ul>
        <li>
            <div>
                <img :src="imgPoster" :alt="titleMain">
            </div>

            <div>
                <!-- TITLE -->
                <div>
                    {{ titleMain }}
                </div>
                <!-- ORIGINAL TITLE -->
                <div v-show="titleMain !== titleOriginal">
                    {{ titleOriginal }}
                </div>
                <!-- LANGUAGE -->
                <div>
                    <div v-if="languageInStore">
                        <img :src="languageImg" :alt="languageTxt">
                    </div>
                    <div v-else>
                        <p>{{ languageTxt }}</p>
                    </div>
                </div>
                <!-- STARS -->
                <div>
                    <ul>
                        <li v-for="n in vote"> &starf;</li>
                        <li v-for="m in voteNot"> &star;</li>
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
<!-- CARD in MAIN -->
<script>
export default {
    name: "AppMainCard",
    props: {
        titleMain: String,
        titleOriginal: String,
        languageImg: String,
        languageTxt: String,
        vote: Number,
        //true countries flag // false  txt
        languageInStore: Boolean,
        //img cover
        imgPoster: String,
    },
}
</script>
 
<template>
    <ul>
        <li>

            <div>
                <img :src="imgPoster" :alt="titleMain">
            </div>

            <div>
                <div>{{ titleMain }} </div>
                <div>{{ titleOriginal }}</div>
                <div>
                    <div v-if="languageInStore">
                        <img :src="languageImg" :alt="languageTxt">
                    </div>
                    <div v-else>
                        <p>{{ languageTxt }}</p>
                    </div>
                </div>
                <div>{{ vote }}</div>
            </div>
        </li>
    </ul>
</template>
 
<style lang="scss" scoped>
img {
    width: 40px;
}
</style>
<!-- CARD in MAIN -->
<script>
export default {
    name: "AppMainCard",
    props: {
        titleMain: String,
        titleOriginal: String,
        language: String,
        // String or Number?
        vote: Number,
    }
}
</script>
 
<template>
    <ul>
        <li>
            <div>
                <div>{{ titleMain }} </div>
                <div>{{ titleOriginal }}</div>
                <div>{{ language }}</div>
                <div>{{ vote }}</div>
            </div>
        </li>
    </ul>
</template>
 
<style lang="scss" scoped>

</style>
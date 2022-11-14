<!-- CARD in MAIN -->
<script>
export default {
    name: "AppMainCard",
    props: {
        title: String,
        titleOriginal: String,
        language: String,
        // String or Number?
        vote: String,
    }
}
</script>
 
<template>
    <ul>
        <li>
            <div>
                <div>{{ title }} </div>
                <div>{{ titleOriginal }}</div>
                <div>{{ language }}</div>
                <div>{{ vote }}</div>
            </div>
        </li>
    </ul>
</template>
 
<style lang="scss" scoped>

</style>
<!-- MAIN -->
<script>
import AppMainCard from './AppMainCard.vue';
export default {
    name: "AppMain",
    components: {
        AppMainCard,
    }
}
</script>
 
<template>
    <hr>
    <h4>Movies & Series TV</h4>
    <hr>
    <AppMainCard title="titolo" titleOriginal="titoloOriginale" language="it" vote="3" />
</template>
 
<style lang="scss" scoped>

</style>
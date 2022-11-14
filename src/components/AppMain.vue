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
        return { store }
    }
}
</script>
 
<template>
    <hr>
    <h4>{{ store.apiKey }}</h4>
    <hr>
    <AppMainCard title="titolo" titleOriginal="titoloOriginale" language="it" vote="3" />
</template>
 
<style lang="scss" scoped>

</style>
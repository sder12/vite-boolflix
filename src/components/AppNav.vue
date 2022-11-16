<!-- NAV-->
<script>
import { store } from "../store";
export default {
    name: "AppNav",
    data() {
        return { store }
    }
}
</script>
 
<template>
    <nav class="navigation">
        <ul class="navigation__menu">
            <li class="navigation__item pointer" v-for="(nav, index) in store.navigation" :key="index"
                :class="nav == this.store.activePag ? 'active' : ''" @click="this.store.activePag = nav">
                {{ nav }}
            </li>
        </ul>
    </nav>
</template>
 
<style lang="scss" scoped>
@use "../styles/partials/variables" as *;
@use "../styles/partials/mixins" as *;

.navigation {
    &__menu {
        @include flex(row, flex-start, center);
        gap: 1em;
    }

    &__item {
        text-transform: uppercase;
        font-size: .8rem;
        color: lighten($bg-color, 60%);
        line-height: $header-height;
        vertical-align: middle;
        border-bottom: 3px solid transparent;

        &:hover {
            color: white;
        }

    }

    .active {
        color: white;
        border-bottom: 3px solid $logo-color;
    }
}
</style>
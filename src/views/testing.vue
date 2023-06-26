<script setup>
import MobileMenu from '../components/menu-bar-mobile.vue';
</script>

<template>
    <MobileMenu></MobileMenu>
</template>

<script>
export default {
    data() {
        return {
            opened: false
        }
    }
}
</script>
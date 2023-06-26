<script setup>
import Menu from '../components/Menu.vue';
</script>

<template>
    <div style="position: absolute; top: 20px; right: 20px; z-index: 50;">
        <i class="fa fa-bars" aria-hidden="true" @click="opened = !opened"></i>
    </div>
<Menu :opened=opened @menuClosed="()=> opened = !opened"></Menu>

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

<style>
    .fa-bars {
        font-size: 35px;
        color: white;
    }
</style>
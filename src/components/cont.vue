<template>
    <section class="body w-100">
    <div class="d-flex flex-column align-content-center flex-wrap" :class="width">
       <slot></slot>
    </div>
    </section>
</template>

<script>
    export default {
        props: {
            width:"width-75"
        }
    }
</script>
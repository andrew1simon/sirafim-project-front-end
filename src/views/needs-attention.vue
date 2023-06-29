
<template>
    <Hero color="bg-primary" title="title here"/>
    <cont width="w-90">
        <div class="pt-3 w-100">
            <needsAttentionList :filter="filter"/>

        </div>
    </cont>

</template>


<script>
    import Hero from '../components/Hero.vue';
    import cont from '../components/cont.vue';
    import needsAttentionList from '../components/needs-attention-list.vue';
    export default {
        data() {
            return {
                filter: "warning",
            }
        }, components: {
    Hero,
    cont,
    needsAttentionList,
}
    }
    //            <AttendenceFilterBtns filter="warning" :currentFilter="filter"  @changeFilter="(Newfilter) => switchFilter(Newfilter)"/>

</script>

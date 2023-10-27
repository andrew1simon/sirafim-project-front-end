<script>
    import Hero from '../../components/Hero.vue';
    import cont from '../../components/cont.vue';
    import AttendanceViewerCheckList from '../../components/admin/attendence-viewer-checkList.vue';
    import AttendenceFilterBtns from '../../components/attendence-filter-btns.vue';
    export default {
        data() {
            return {
                filter: "all",
                action: "",
                titles: {attendence:"attendence" , aktma3:"Servants metting" , "lesson-prep":"Lesson prepration"}
            }
        }, components: {
    Hero,
    cont,
    AttendanceViewerCheckList,
    AttendenceFilterBtns
},
        methods: {
            switchFilter (filter) {
                this.filter = filter
            }
        },
        created() {
            this.action =  new URLSearchParams(window.location.search).get('action');

        }
    }
    //            <AttendenceFilterBtns filter="warning" :currentFilter="filter"  @changeFilter="(Newfilter) => switchFilter(Newfilter)"/>

</script>


<template>
    <Hero color="bg-primary" title="View class Attendence"/>
    <cont width="w-90">
        <div class="w-100 pt-2 pb-2 hor-scroll position-relative">
        <div class="w-100 position-absolute"></div>
            <AttendenceFilterBtns filter="all" :currentFilter="filter"  @changeFilter="(Newfilter) => switchFilter(Newfilter)"/>
            <AttendenceFilterBtns filter="att" :currentFilter="filter"  @changeFilter="(Newfilter) => switchFilter(Newfilter)"/>
            <AttendenceFilterBtns filter="dAtt" :currentFilter="filter"  @changeFilter="(Newfilter) => switchFilter(Newfilter)"/>
        </div>
        <AttendanceViewerCheckList :filter="filter"/>
    </cont>

</template>

<style>
    .hor-scroll {
        overflow: auto;
        white-space: nowrap;
    }

</style>
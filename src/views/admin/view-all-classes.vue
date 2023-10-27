<template>
<Hero :title="`View classes Attendance`" color="bg-primary"></Hero>
<Cont width="w-90">
    
    <div class="d-flex w-100 align-content-center flex-wrap justify-content-between mb-2 mt-1">
        <h2 class="fs-1 mb-0">Select Class</h2>
    </div>
    
        
                <div v-if="loading" class="d-flex justify-content-center"><i class='fas fa-circle-notch fa-spin text-primary mt-3 loading-cont-icon'></i></div>
                <div v-if="!loading" class="d-flex justify-content-center flex-column">
                    <router-link v-for="classC in allClasses" :to="`/admin/classes/attendence-sing-class-date?date=${date}&class=${classC['id']}` " class="text-reset text-decoration-none d-flex w-90 justify-content-center">
                        <div class="row w-100 justify-content-center align-content-center">
                        <div class="col-2 d-flex align-content-center justify-content-center flex-wrap"><div class="box d-flex align-content-center justify-content-center flex-wrap"><i class="fa box-icon" aria-hidden="true"></i></div></div>
                        <div class="col d-flex justify-content-center flex-wrap flex-column"><h4 class="m-0"><i class="fa fa-user me-1" aria-hidden="true"></i> {{ classC['name'] }}</h4></div>
                        <div class="col-2 d-flex align-content-center justify-content-center flex-wrap text-muted">
                            <i class="fa fa-arrow-right" aria-hidden="true"></i>
                        </div>
                        <div class= "seprator my-2"></div>
                        </div>
                </router-link>
                </div>
               

</Cont>

        


</template>

<script>
import Hero from '../../components/Hero.vue';
import Cont from '../../components/cont.vue';
import {AuthUser} from '../../State/Auth';
import axios from 'axios';

const AuthStore = AuthUser();

export default {
    data() {
        return {
            loading: true,
            titles: {attendence:"attendence" , aktma3:"Servants metting" , "lesson-prep":"Lesson prepration"},
            date: "",
            totalAttended: "",
            total: "",
            allClasses: ""

        };
    },
    created() {
        this.date =  new URLSearchParams(window.location.search).get('date');
        this.fetchData();
    },
    methods: {
        async fetchData() {
            axios.defaults.headers.common["Authorization"] = `Bearer ${AuthStore.getUserTok.value}`
            const res = await axios.get(`/admin/get-all-classes?date=${this.date}`)
            let data = await res.data
            //"date" => $date , "totalAttended"=> $totalAttended , "total"=>$totalAll , "allClasses" => $AllClasses
            const {date , totalAttended , total , allClasses} = data
            this.date = date
            this.totalAttended = totalAttended
            this.total = total
            this.allClasses = allClasses
            this.loading = false
        },
        
    },
    components: { Hero, Cont }
}

</script>
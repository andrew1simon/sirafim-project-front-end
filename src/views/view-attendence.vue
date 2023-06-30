<template>
<Hero title="title here" color="bg-primary"></Hero>
<Cont width="w-90">
    
    <router-link to="/new-attendence" class="text-reset text-decoration-none w-90"><h2 class="fs-6 mb-1 mt-2 text-end"><i class="fa fa-plus" aria-hidden="true"></i> Add New Attendence</h2></router-link>

    <h2 class="fs-1 mb-2">Select Date</h2>
        
                <div v-if="loading" class="d-flex justify-content-center"><i class='fas fa-circle-notch fa-spin text-primary mt-3 loading-cont-icon'></i></div>
                <div v-if="!loading" class="d-flex justify-content-center">
                    <router-link v-for="date in dates" :to="'/view-attendence-sing?date=' + date.date" class="text-reset text-decoration-none d-flex w-90">
                        <div class="row w-100 justify-content-center align-content-center">
                        <div class="col-2 d-flex align-content-center justify-content-center flex-wrap"><div class="box d-flex align-content-center justify-content-center flex-wrap"><i class="fa box-icon" aria-hidden="true"></i></div></div>
                        <div class="col d-flex justify-content-center flex-wrap flex-column"><h4 class="m-0"><i class="fa fa-calendar me-1" aria-hidden="true"></i> {{ date.date }}</h4></div>
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
import Hero from '../components/Hero.vue';
import Cont from '../components/cont.vue';
import {AuthUser} from '../State/Auth';
import axios from 'axios';

const AuthStore = AuthUser();

export default {
    data() {
        return {
            dates: [],
            loading: true
        };
    },
    created() {
        this.fetchData();
    },
    methods: {
        async fetchData() {
            axios.defaults.headers.common["Authorization"] = `Bearer ${AuthStore.getUserTok.value}`
            const res = await axios.get('/get-submited-events')
            let data = await res.data
            this.dates = data.data;
            this.loading = false
        },
    },
    components: { Hero, Cont }
}

</script>
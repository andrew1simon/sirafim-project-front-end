<script setup>
    import Hero from '../components/Hero.vue';
    import cont from '../components/cont.vue';
    import homeCard from '../components/home-card.vue';
    import {AuthUser} from '../State/Auth';
    import axios from 'axios';
</script>

<template>
    <Hero color="bg-primary"  title="Welcome," :name = "uName" home="yes"/>
    <cont width="w-90">
        <div class="container w-100 mt-2">
            
            <homeCard link="/view-attendence" color="text-warning" icon="fa-calendar" title="View attendence" />
            <homeCard link="/new-attendence" color="text-warning" icon="fa-calendar-plus" title="Add new attendence" />
            <homeCard link="/view-sheet" color="text-warning" icon="fa-table" title="View sheet" />

            
            
            </div>
    </cont>
</template>

<script>
export default {
    data() {
        return {
            uName: "",
        }
    },
    components: {
        Hero,cont
    },
    created() {
        const AuthStore = AuthUser();
        this.uName = AuthStore.getName
        this.GetUser(AuthStore)
    },
    methods: {
        async GetUser(AuthStore) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${AuthStore.getUserTok.value}`
            /*let user = await axios.get('/check-user')
            let userData = await user.data
            console.log(userData)*/
        }
    }
}

</script>

<style>
    .names-checkbox-boxs {
        width: 20px;
        height: 20px;
        margin-left: 10px;
    }
    .names-checkbox-text {
        font-size: 15px;
        font-weight: 500;
    }

</style>
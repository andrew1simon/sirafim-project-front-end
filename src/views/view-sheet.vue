<script setup>
    import Hero from '../components/Hero.vue';
    import cont from '../components/cont.vue';
    import {AuthUser} from '../State/Auth';
    import axios from 'axios';
</script>

<template>
    <Hero color="bg-primary"  title="Class sheet" home="yes"/>
    <cont width="w-90">
        <div class="container w-100 mt-2">
            <div v-if="loading" class="d-flex justify-content-center"><i class='fas fa-circle-notch fa-spin text-primary mt-3 loading-cont-icon'></i></div>
            <div v-if="!loading" class="d-flex align-content-center justify-content-center flex-column flex-wrap">
                <a :href="`https://docs.google.com/spreadsheets/d/1BONqn8u1clz6wucM1bA3V8tsB-GM-Scs9h2CuRxfxzY/export?format=xlsx&gid=${sheetId}`" download class="mx-auto"><button class="btn bg-success text-white ms-auto me-auto"><i class="fa fa-download" aria-hidden="true"></i> Download excel sheet</button></a>
                <iframe :src="`https://docs.google.com/spreadsheets/d/e/2PACX-1vRrCgPQ1PJUSkfU8V24wdGymJZZzkUr0KmEPjncAl9TfRT-w78fnmEJ9v7Kpc9w3JNGEs19x3T71FSk/pubhtml?gid=${sheetId}&single=true`" height="500" seamless="seamless" frameborder="0" scrolling="no" style="width: 100%;"></iframe>            
            </div>
            
            </div>
    </cont>
</template>

<script>
    const AuthStore = AuthUser();
    axios.defaults.headers.common["Authorization"] = `Bearer ${AuthStore.getUserTok.value}`
export default {
    data() {
        return {
            uName: "",
            sheetId: "",
            loading: true
        }
    },
    components: {
        Hero,cont
    },
    created() {
        this.uName = AuthStore.getName
        this.getSheetId()
    },
    methods: {
        async getSheetId() {
            const res = await axios.get('/get-sheetid')
            let data = await res.data
            this.sheetId = data.sheetId.sheet_id
            console.log(this.sheetId)
            this.loading = false
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
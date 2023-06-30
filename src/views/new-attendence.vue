<script setup>
    import Hero from '../components/Hero.vue';
    import cont from '../components/cont.vue';
    import axios from 'axios';
    import { AuthUser } from '../State/Auth';
</script>

<template>
    <Hero color="bg-primary" title="title here"/>
    <cont width="w-90">
        <div v-if="loading"><i class='fas fa-circle-notch fa-spin text-primary mt-3 loading-cont-icon'></i></div>
        <div class="container px-1 pt-3" v-if="!loading">
    <div class="bg-success text-light p-1 fw-bold mb-2" v-if="submitStates == 'success'">Attendence Added successfully</div>
    <div class="bg-warning text-light p-1 fw-bold mb-2" v-if="submitStates == 'taken before'">Event attendence was recorded before</div>
    <div class="bg-danger text-light p-1 fw-bold mb-2" v-if="submitStates == 'error'">Error</div>

    <form id="contactForm" @submit.prevent = "postAttendence">
        <div class="form-floating mb-2">
            <select class="form-control" id="date">
                    <option v-for="date in dates" :value="[date.date]">{{ date.date }}</option>
                
            </select>
            <label for="date">Date</label>
        </div>
        <div class="mb-1">
            <label class="form-label d-block">Attended</label>
            <div class="form-check" dir="rtl" v-for="(mem, index) in classMems">
                <input type="checkbox" class="names-checkbox-boxs" :id="`name-${mem.id}`" :value="mem.id" v-model="checkedNames" />
                <label class="form-check-label names-checkbox-text" :for="[mem.id]" >{{ mem.name }}</label>
                <div :class= " [index == classMems.length -1 ? 'd-none' : 'seprator my-1'] "></div>
            </div>
        </div>
        <div class="d-grid mb-3 mt-2">
            <button class="w-100 mt-1 submit-btn"><i class='fas fa-circle-notch fa-spin' v-if="btnClicked"></i> Submit</button>

        </div>
    </form>
</div>
    </cont>
</template>

<script>
const AuthStore = AuthUser()
axios.defaults.headers.common["Authorization"] = `Bearer ${AuthStore.getUserTok.value}`
export default {
    data() {
        return {
            dates: [],
            classMems: [],
            checkedNames: [],
            selectedDate: "",
            submitStates: "",
            btnClicked: false,
            loading: true
        }
    },
    components: {
        Hero,cont
    },
    created() {
        this.fetchData()
    },
    methods: {
        async fetchData() {
            const res = await axios.get('/get-events')
            let data = await res.data
            this.dates = data.data;

            let resClassMems = await axios.get('/get-class-mems')
            let dataClassMems = await resClassMems.data;
            this.classMems = dataClassMems

            this.loading = false
        },
        async postAttendence() {
            this.btnClicked = true
            let date = document.getElementById('date').value;
            console.log(`date:${date} \n attended:${this.checkedNames}`)
            let PostData = await axios.post("/post-attendence" , {
                date: date,
                attended: this.checkedNames
            }).then((PostData) => {
                this.btnClicked = false
                if(PostData.status == 200) {
                this.submitStates = "success"
            }
            }).catch((PostData) => {
                this.btnClicked = false
                if (PostData.response.status == 406) {
                this.submitStates = "taken before"
                }else {
                this.submitStates = "error"
            }
            })
            
            let PostRes = await PostData.data;
            console.log(PostRes);
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
        font-size: 17px;
        font-weight: 500;
    }

</style>
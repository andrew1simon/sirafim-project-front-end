<template>
    <div class="d-flex flex-column align-content-center flex-wrap">
        <div v-if="loading" class="d-flex justify-content-center"><i class='fas fa-circle-notch fa-spin text-primary mt-3 loading-cont-icon'></i></div>
        <div class="w-90" v-if="!loading">
            <div v-for="(user, index ) in filteredUsers" v-auto-animate>
                <SingClassMem :unattended='user["unAttended_times"]' :key="user['id']" :name="user['name']" :noDrop="user['no_drop_time']" :attendenceDates= "user['attendence_dates_primary'].slice(0,-1).split(',') || []" :lastElement= "usersLen - 1 == index " :attendedArr="attendedUsersNames" />
            </div>
        </div>
    </div>
    
    
    <div class="mb-3"></div>
</template>

<script>
import { isProxy, toRaw } from 'vue';
import axios from 'axios';
import SingClassMem from './sing-class-mem.vue';
import {AuthUser} from '../State/Auth';

const AuthStore = AuthUser();

    export default {
    props: {
        filter:String
    },
    data() {
        return {
            allUsersAttendence: [],
            attendedOnly: [],
            dAttendedOnly: [],
            AllUsersAttendenceRendered: "",
            usersLen: 0,
            filteredUsers: [],
            attendedUsersNames: [],
            loading: true
        };
    },
    created() {
        this.fetchAttendence();

    },
    watch: { 
        filter: function() { 
            if (this.filter != 'all') {
                let flUsers
                if(this.filter == 'att') {
                    flUsers = this.attendedOnly //.filter(this.filterUsers)
                }
                else {
                    flUsers = this.dAttendedOnly //.filter(this.filterUsers)
                }
                console.log(this.attendedOnly)
                this.filteredUsers =  toRaw (flUsers)
            }else {
                this.filteredUsers = toRaw(this.allUsersAttendence)
            }
           
        }
    },
    methods: {
        async fetchAttendence() {
            let date =  new URLSearchParams(window.location.search).get('date');
            axios.defaults.headers.common["Authorization"] = `Bearer ${AuthStore.getUserTok.value}`
            const res = await axios.get(`/get-attendence?date=${date}`)
            let data = await res.data
            let attended = data["attended"];
            let dAttended = data["d_attend"];
            let allUsers = attended.concat(dAttended);
            this.allUsersAttendence = allUsers.sort(this.sortById());
            this.attendedOnly = attended;
            this.dAttendedOnly = dAttended;
            this.usersLen = this.allUsersAttendence.length
            this.filteredUsers = toRaw(this.allUsersAttendence)
            this.genAttArr()
            this.loading = false
        },
        sortById() {
            return function (elem1, elem2) {
                if (elem1.id < elem2.id) {
                    return -1;
                }
                else if (elem1.id > elem2.id) {
                    return 1;
                }
                else {
                    return 0;
                }
            };
        },
        filterUsers(user) {
            let filterVar = {
                att:  1,
                dAtt: 3
            }
            if (this.filter == 'att') {
                return toRaw (user['unAttended_times'] < 1)
            }else if (this.filter == 'dAtt') {
                return user['unAttended_times'] < 3 && user['unAttended_times'] !=0
            } else {
                return toRaw (user['unAttended_times'] >= 3)
            }
        },
        clear() {
            this.filteredUsers = []
        }, 
        genAttArr() {
            this.attendedOnly.forEach((user) => {
                this.attendedUsersNames.push(user.name)
            })
            console.log("attended users" , this.attendedUsersNames)
        }
    },
    components: { SingClassMem }
}
</script>
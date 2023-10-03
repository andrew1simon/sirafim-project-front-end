<script setup>
    import Hero from '../components/Hero.vue';
    import cont from '../components/cont.vue';
    import {AuthUser} from '../State/Auth';
    import router from '../router';
    import axios from 'axios';
</script>

<template>
    <Hero color="bg-primary" title="Login" :MenuAllowed="false"/>
    <cont width="w-90">
        <div class="container px-1 pt-3 w-90">
        <div class="bg-danger text-light p-1 fw-bold mb-2" v-if="loginStatus == 'not a user'">Username or password is incorrect</div>

    <form @submit.prevent="postLogin">
        <div>
            <div class="text-danger p-1 fw-bold text-start" v-if="loginStatus == 'user miss' || loginStatus == 'user pass miss'">Please, write your Username</div>
            <input type="text" name="username" class="form-control" v-model="username" placeholder="Username"/>
        </div>
        <div class="mt-2">
            <div class="text-danger p-1 fw-bold text-start" v-if="loginStatus == 'pass miss' || loginStatus == 'user pass miss'">Please, write your Password</div>
            <input type="password" name="password" class="form-control" v-model="password" placeholder="Password" />
        </div>
        <button class="w-100 mt-1 submit-btn"><i class='fas fa-circle-notch fa-spin' v-if="btnClicked"></i> Login</button>
    </form>
</div>
    </cont>
</template>

<script>
export default {
    data() {
        return {
            username: "",
            password: "",
            loginStatus: "",
            btnClicked: false
        }
    },
    components: {
        Hero,cont
    },
    created() {
    },
    methods: {
        async postLogin() {
            this.btnClicked = true
            if (this.username == "" || this.password == "") {
                this.btnClicked = false
                if (this.username == "" && this.password == "") {
                    this.loginStatus = 'user pass miss'
                }
                else if (this.username == "") {
                    this.loginStatus = 'user miss'
                }
                else if (this.password == "") {
                    this.loginStatus = 'pass miss'
                }
                console.log(this.loginStatus)
            }
            else {
                const AuthStore = AuthUser();
                console.log('from login' , AuthStore.getUserTok.value)
                console.log(`username:${this.username} \n password:${this.password}`)

                            
                await axios.post('/login', {
                    username: this.username,
                    password: this.password
                }).then(
                    (PostData) => {
                        console.log(PostData)
                        if (PostData.status == 201) {
                            console.log("in")
                            AuthStore.toggleAuth();
                            AuthStore.changeName(PostData.data.user.name)
                            let token = PostData.data.token
                            AuthStore.changeUserTok(token)
                            console.log('done Auth')
                            router.push('/')
                    }
                    }
                
                ).catch((PostData) => {
                    this.btnClicked = false
                    if(PostData.response.status == 401) {
                        this.loginStatus = "not a user"
                    }
                })
            }
            
  
    },
        async getInfo() {
            axios.defaults.withCredentials = true;
            const {data} = await axios.get('/user', {
            withCredentials: true,
            crossDomain: true
            })
            console.log(data); // should output user details
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
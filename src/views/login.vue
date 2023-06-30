<script setup>
    import Hero from '../components/Hero.vue';
    import cont from '../components/cont.vue';
    import {AuthUser} from '../State/Auth';
    import router from '../router';
    import axios from 'axios';
</script>

<template>
    <Hero color="bg-primary" title="Login"/>
    <cont>
        <div class="container px-1 pt-3 w-90">
        <div class="bg-danger text-light p-1 fw-bold mb-2" v-if="loginStatus == 'not a user'">Username or password is incorrect</div>

    <form>
        <div>
            <input type="text" name="username" class="form-control" v-model="username" placeholder="Username"/>
        </div>
        <div class="mt-2">
            <input type="password" name="password" class="form-control" v-model="password" placeholder="Password" />
        </div>
        <input type="button" class="btn btn-primary w-100 mt-1" @click="postLogin" value="Login"/>
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
            loginStatus: ""
        }
    },
    components: {
        Hero,cont
    },
    created() {
    },
    methods: {
        async postLogin() {
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
                        router.push('/')
                 }
                }
            
            ).catch((PostData) => {
                if(PostData.response.status == 500) {
                    this.loginStatus = "not a user"
                }
            })
  
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
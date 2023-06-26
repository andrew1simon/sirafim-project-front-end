<script setup>
    import Hero from '../components/Hero.vue';
    import cont from '../components/cont.vue';
    import {AuthUser} from '../State/Auth';
</script>

<template>
    <Hero color="bg-primary" title="Login"/>
    <cont width="w-90">
        <h2 class="text-center mt-2 fs-1">{{ uName }}</h2>
        <div class="container w-100">
            <router-link to='/view-attendence' class="text-reset text-decoration-none">
                <div class="card">
                    <div class="p-2">
                        <i class="fa fa-calendar mb-2 text-warning text-center w-100" style="font-size: 50px;" aria-hidden="true"></i>
                        <h5 class="card-title fs-1 text-center">View attendence</h5>
                
            </div>
            </div>
            </router-link>
            <router-link  to="/new-attendence" class="text-reset text-decoration-none">

                <div class="card mt-2">
                    <div class="p-2">
                        <i class="fa fa-calendar-plus mb-2 text-warning text-center w-100" style="font-size: 50px;" aria-hidden="true"></i>
                        <h5 class="card-title fs-1 text-center">Add new attendence</h5>
                
            </div>
            </div>
            </router-link>
            
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
    },
    methods: {
        async postLogin() {
            console.log(`username:${this.username} \n password:${this.password}`)

            
            let PostData = await fetch("http://127.0.0.1:8000/api/login",
            {
                headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify({
                    username: this.username,
                    password: this.password
                })
            
            })
            let PostRes = await PostData.json();
            console.log(PostRes);
            const AuthStore = AuthUser();
            if (PostData.status == 200) {
                AuthStore.toggleAuth();
                AuthStore.changeName(PostRes[0].name)
                console.log(AuthStore.userAuthed , AuthStore.uname);
            }
            
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
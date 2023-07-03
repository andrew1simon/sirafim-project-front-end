<script setup>
    import Hero from '../components/Hero.vue';
    import cont from '../components/cont.vue';
    import homeCard from '../components/home-card.vue';
    import {AuthUser} from '../State/Auth';
</script>

<template>
    <Hero color="bg-primary"  title="Welcome," :name = "uName" home="yes"/>
    <cont width="w-90">
        <div class="container w-100 mt-2">
            
            <homeCard link="/view-attendence" color="text-warning" icon="fa-calendar" title="View attendence" />
            <homeCard link="/new-attendence" color="text-warning" icon="fa-calendar-plus" title="Add new attendence" />

            
            
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
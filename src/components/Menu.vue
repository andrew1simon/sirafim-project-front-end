<template>
    <div class="w-100 menu-background" style="position: absolute; top: 0; z-index: 1000; height: 100vh;" :class="opened ? 'd-block' : 'd-none' ">
        <div style="position: absolute; right: 20px;" class="mt-1 ms-1">
          <i class="fa fa-close" aria-hidden="true" @click="$emit('menuClosed')"></i>  
        </div>
        <div class="d-flex flex-wrap align-content-center justify-content-center h-100 menu-cont">
            <ul>
                <router-link  to="/" class="text-reset text-decoration-none"> <li class="py-1">Home</li> </router-link>
                <router-link  to="/view-attendence" class="text-reset text-decoration-none"> <li class="py-1">View attendence</li> </router-link>
                <router-link  to="/new-attendence" class="text-reset text-decoration-none"> <li class="py-1">Add attendence</li> </router-link>
                <router-link  to="/needs-attention" class="text-reset text-decoration-none"> <li class="py-1">Needs attendtion list</li> </router-link>


            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        props: {opened:Boolean}
    }
</script>
   
<style scoped>
    .fa {
        color: #212529;
        font-size: 35px;
    }
    .menu-cont > ul {
        color: #212529;
        font-size: 30px;
        font-weight: 800;
        text-decoration: none;
        list-style: none;
        padding: 0px;
    }
    .menu-background {
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 7.5px );
        -webkit-backdrop-filter: blur( 7.5px );
    }
</style>
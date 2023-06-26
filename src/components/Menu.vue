<template>
    <div class="w-100 menu-background" style="position: absolute; top: 0; z-index: 1000; height: 100vh;" :class="opened ? 'd-block' : 'd-none' ">
        <div style="position: absolute; right: 20px;" class="mt-1 ms-1">
          <i class="fa fa-close" aria-hidden="true" @click="$emit('menuClosed')"></i>  
        </div>
        <div class="d-flex flex-wrap align-content-center justify-content-center h-100 menu-cont">
            <ul>
                <li>Home</li>
                <li>Test</li>
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
        font-size: 50px;
        font-weight: 800;
        text-decoration: none;
        list-style: none;
        padding: 0px;
    }
    .menu-cont > ul > li {
        padding: 10px 0;
    }
    .menu-background {
        background: rgba( 255, 255, 255, 0.25 );
        box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
        backdrop-filter: blur( 7.5px );
        -webkit-backdrop-filter: blur( 7.5px );
    }
</style>
<script setup>
    import Nav from "./Nav.vue"
    import MobileMenu from '../components/menu-bar-mobile.vue';

</script>
<template>
        <Nav :color="color"/>
        <MobileMenu></MobileMenu>
     <section :class="color" class="d-flex align-content-center justify-content-center pt-1 pb-3 h-40 text-white position-fixed hero">
        <div class="hero-cont w-75 d-flex align-content-center justify-content-center flex-wrap">
            <h3 class="align-center m-0 font-large text-center">{{ title }}</h3>
            <h3 class="align-center mt-1 fs-2 text-center" v-if="home">{{ name }}</h3>
        </div>
        <div class="custom-shape-divider-bottom-1684081511">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z" class="shape-fill"></path>
            </svg>
        </div>
    </section>
</template>

<script>
export default {
    props: {
        title:String,
        color:String,
        home:Boolean,
        name: String
    },
}
</script>

<style>
    .bm-burger-button {
      position: fixed;
      width: 36px;
      height: 30px;
      left: 36px;
      top: 36px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 20%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }

    .bm-overlay {
      background: transparent;
    }
    .bm-item-list {
      color: #b8b7ad;
      margin-left: 10%;
      font-size: 20px;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      margin-left: 10px;
      font-weight: 700;
      color: white;
    }
    .font-large {
      font-size: 40px;
    }
</style>
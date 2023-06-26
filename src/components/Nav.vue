<template>
     <div>
  
  <nav
       class="w-100 py-1 align-center position-fixed text-white shadow-sm p-3 mb-1 animate__animated"
       :class=" [showBar ? 'd-block animate__slideInDown animate__faster' : 'd-none' , color]"  :scroll="handelNavSQ(event)"
       style="min-height: 65px;">
    <div class="d-flex align-content-center justify-content-center"><MobileMenu></MobileMenu></div>
  </nav>
</div>
</template>

<script>
    import MobileMenu from '../components/menu-bar-mobile.vue';

export default {
    props: {
        color:String
    },
    data() {
        return {
            showBar: false
        }
    },
    created() {
        if(true){
             window.addEventListener("scroll", this.handelNavSQ);
        }

  },
    methods: {
        handelNavSQ(event) {
            this.showBar = (window.pageYOffset > 300) ? true : false
        }
    }, 
    components: {MobileMenu}
}
</script>
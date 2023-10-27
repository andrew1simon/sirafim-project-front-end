<template>
    <div class="mb-2" :class="miniCard && 'w-40' ">
        <router-link :to='link' class="text-reset text-decoration-none" >
                <div class="card card-cont">
                    <div class="p-2 d-flex align-items-center flex-column my-auto flex-wrap">
                        <div class="mb-2 d-flex align-content-center justify-content-center card-icon">
                            <i class="fa text-center" :class="icon + ' ' + color" style="font-size: 50px;" aria-hidden="true"></i>
                        </div>
                        <h5 class="card-title fs-1 text-center">{{title}}</h5>
                
            </div>
            </div>
            </router-link>
    </div>
    
</template>

<script>
    export default {
        data() {

        }, 
        props: {
            link:String,
            icon:String,
            title:String,
            color:String,
            miniCard: {
                type:Boolean,
                default:false
            }
        }
    }
</script>

<style scoped>

.card-icon{
    width: 90px;
    height: 90px;
    background: #f6f6f6;
    padding: 20px;
    border-radius: 15px;
    -webkit-box-shadow: 2px 8px 35px -17px rgba(0,0,0,0.75);
    -moz-box-shadow: 2px 8px 35px -17px rgba(0,0,0,0.75);
    box-shadow: 2px 8px 35px -17px rgba(0,0,0,0.75);
    border: solid 1px #d7d7d7;
}
.card-cont{
    -webkit-box-shadow: -3px 12px 40px -19px rgba(163,163,163,1);
    -moz-box-shadow: -3px 12px 40px -19px rgba(163,163,163,1);
    box-shadow: -9px 5px 38px -17px rgb(141 141 141);
    background: #fff;
}
.w-40 {
    width: 40%;
}

</style>
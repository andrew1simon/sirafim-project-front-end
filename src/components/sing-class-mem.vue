<script setup>
    import { vAutoAnimate } from '@formkit/auto-animate'
</script>

<style scoped>
h4 {
    margin: 0;
}
.fa-plus {
    font-size: 20px;
}
button {
  width: 40px;
  height: 35px;
  border: 0;
  background-color: white;
  font-size: 1.5em;
  position: relative;
}

button span {
  position: absolute;
  transition: 300ms;
  background: #6c757d;
  border-radius: 2px;
}

/* Create the "+" shape by positioning the spans absolutely */
button span:first-child {
  top: 25%;
  bottom: 25%;
  width: 10%;
  left: 45%;
}

button span:last-child {
  left: 25%;
  right: 25%;
  height: 10%;
  top: 45%;
}

/* Morph the shape when the button is hovered over */
.active span {
  transform: rotate(90deg);
}

.active span:last-child {
  left: 50%;
  right: 50%;
}
</style>

<template>
        <div dir="rtl" class="row w-100 justify-content-center align-content-center">
            <div class="col-2 d-flex align-content-center justify-content-center flex-wrap"><div :class="elementVar[currentAttendence].color" class="box d-flex align-content-center justify-content-center flex-wrap"><i :class="elementVar[currentAttendence].icon" class="fa box-icon" aria-hidden="true"></i></div></div>
            <div class="col d-flex justify-content-center flex-wrap flex-column"><h4>{{ name }}</h4></div>
            <div class="col-2 d-flex align-content-center justify-content-center flex-wrap text-muted">
                <button @click = "expanded = !expanded" :class="expanded && 'active' ">
                    <span></span>
                    <span></span>
                </button>
            </div>
            <div v-auto-animate>
                <div class="mt-1 w-90" v-if="expanded">
                    <h5 class="text-primary">{{ unattended == 0 ? "عدد ايام الحضور بنتظام: " :" عدد مرات الغياب المتكرر:"}} <span class="text-dark"> {{unattended == 0 ? noDrop : unattended}}</span></h5>
                <h5 class="text-primary">حضور في :</h5>
                <div class="row row-cols-3 text-center" dir="ltr">
                    <div v-for="date in attendenceDates" class="col">
                        <h5>{{ date }} </h5>
                    </div>
                </div>
                </div>
               
            </div>
        </div>
        <div :class= " [lastElement ? 'd-none' : 'seprator my-2'] "></div>
</template>

<script>
export default {
        props: {
            attStatus:String,
            name:String,
            lastElement:Boolean,
            fristElement:String,
            unattended:Number,
            noDrop:Number,
            attendenceDates:Array,
            attendedArr:Array,
            needsAttendtion:Boolean
        },
        data() {
            return {
                elementVar : {
                    att: {
                    color: "bg-success" ,
                    icon: "fa-check"
                    },
                dAtt: {
                    color: "bg-warning" ,
                    icon: "fa-times"
                },
                warning: {
                    color: "bg-danger",
                    icon: "fa-exclamation"
                }
                } ,
                currentAttendence: "",
                expanded: false
            }
            
        },
        created() {
            this.setState()
            
        },
        computed() {
            console.log("hi")
        },
        methods: {
            setState() {
                let unattendedTimes = parseInt(this.unattended) 
                let state;
                if(this.needsAttendtion) {
                    state = "warning"
                }
                else if (this.attendedArr.includes(this.name)) {
                    state = "att"
                }else {

                    state = "dAtt"
                }
                this.currentAttendence = state
            }
        }
    }
</script>
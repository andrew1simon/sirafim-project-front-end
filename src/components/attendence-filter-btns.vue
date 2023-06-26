<template>
    <button @click="$emit('changeFilter' , filter)" class="me-1 btn fw-bold  all-fil-btn border-3" :class="currentFilter== filter ? `bg-${elementVar[filter].color} text-white` : `border-${elementVar[filter].color} text-${elementVar[filter].color}`" ><i class="fa" :class=" elementVar[filter].icon" aria-hidden="true"></i> {{elementVar[filter].text}}</button>
</template>

<script>
    export default {
        props: {
            filter:String,
            currentFilter:String
        },
        data() {
            return {
                elementVar : {
                    all: {
                        color:"primary",
                        icon: "fa-users",
                        text: "All"
                    },
                    att: {
                    color: "success" ,
                    icon: "fa-check",
                    text: "Attended"

                    },
                dAtt: {
                    color: "warning" ,
                    icon: "fa-times",
                    text: "Didn't Attend"
                },
                warning: {
                    color: "danger",
                    icon: "fa-exclamation",
                    text: "Needs Attention"
                }
                }
        }

        },
        
    }
</script>
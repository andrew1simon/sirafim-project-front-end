<script setup>
    import SingClassMem from './sing-class-mem.vue';
    import cont from './cont.vue';
</script>


<template>
    <cont>
        <SingClassMem attStatus="att" name="كاراس مينا" fristElement="true"/>
        <SingClassMem attStatus="dAtt" name="أبانوب جرجس"/>
        <SingClassMem attStatus="warning" name="بافلي انطونيوس" lastElement="true"/>
    </cont>
</template>

<script>
    export default {
        components: {
            SingClassMem
        }
    }
</script>
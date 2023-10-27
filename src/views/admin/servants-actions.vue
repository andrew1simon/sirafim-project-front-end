<script setup>
    import Hero from '../../components/Hero.vue';
    import cont from '../../components/cont.vue';
    import homeCard from '../../components/home-card.vue';
    import {AuthUser} from '../../State/Auth';
    import axios from 'axios';
</script>

<template>
    <Hero color="bg-primary"  title="Servants actions"/>
    <cont width="w-90">
        <div class="container w-100 mt-2">
            
           <homeCard title="Attendance" icon="fa-calendar" color="text-warning" link="/admin/servants-actions/view?action=attendence"></homeCard>
            
           <homeCard title="Servants metting" icon="fa-calendar" color="text-warning" link="/admin/servants-actions/view?action=aktma3"></homeCard>

           <homeCard title="Lesson prepration" icon="fa-calendar" color="text-warning" link="/admin/servants-actions/view?action=lesson-prep"></homeCard>

            </div>
    </cont>
</template>

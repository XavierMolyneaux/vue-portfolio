<template>
    <section>
            <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8">Overview</h2>
            <br/>
            <p class="xl:text-lg text-base lg:indent-8 md:indent-4 sm:indent-0">
                Xavier is a full stack engineer focused on Python, VueJS, SQL and AWS. He possesses soft 
                skills that bring value to his personal, academic and career journeys. No stranger to startup culture 
                (pre and post acquisition), Xavier thrives in different paced environments by maintaining 
                cross functional communication, understanding business context behind developement,
                owning project deadlines and effectively taking constructive criticism. Always striving to be 
                the best version of himself has brought Xavier many opportunities to discover new and hone 
                existing skills.
            </p>
    </section> 
    <section>
        <h2 class="lg:text-2xl text-lg mt-10 font-bold underline underline-offset-8">Technology</h2>
        <SkillsDisplay class="shadow-2xl" :skillTypes="types" />
    </section>
</template>

<script>
import SkillsDisplay from '@/components/SkillsDisplay.vue';

export default {
    name: 'SkillsPage',
    components: {SkillsDisplay},
    data() {
        return {
            types: ['Frontend', 'Backend', 'Infrastructure']
        }
    }    
}
</script>

<style>
.shadow-cust {
    box-shadow: 0 6px 6px hsl(0deg 0% 0% / 0.3);
}
</style>
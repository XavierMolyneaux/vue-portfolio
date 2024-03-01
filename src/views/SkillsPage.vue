<template>
    <section>
            <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8">Overview</h2>
            <br/>
            <p class="lg:text-lg text-sm lg:indent-8 md:indent-4 sm:indent-0">
                Xavier is a full stack engineer focused on Python, VueJS, SQL and AWS. He also possesses soft 
                skills that greatly increase his value to any team. Being experienced with startup culture 
                (pre and post acquisition), Xavier thrives in different paced environments by maintaining 
                cross functional communication, owning project deadlines and effectively taking constructive 
                criticism.
            </p>
    </section> 
    <section>
        <h2 class="lg:text-2xl text-lg mt-10 font-bold underline underline-offset-8">Technology</h2>
        <SkillsDisplay :skillTypes="types"/>
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
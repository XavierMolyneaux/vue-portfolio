<template>
    <Section>
        <h1 class="text-4xl font-bold">Xavier Molynueax</h1>
        <h3 class="text-lg">Full Stack Engineer</h3>
    </Section>
    <Section class="pt-4">
        <h2 class="text-2xl font-bold underline ">Backgroud</h2>
        <p></p>
        <br/>

        <h2 class="text-5xl font-bold underline">Timeline</h2>
        <br/>
        <ul>
            <li v-for="(event, index) in eventData"
                :key= "index"
                class="list-disc list-inside">
            </li>
        </ul>
    </Section>
</template>

<script>
import Events from '../components/TimelineEvents.vue';

export default {
    name: 'LandingPage',
    data() {
        return {
          eventData: Events
        };  
    }
}
</script>
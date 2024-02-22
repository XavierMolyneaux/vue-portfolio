<template> 
    <div class="w-auto"
        v-for="(event, index) in eventdata"
        :key="index">
        <p class="md:inline-block mr-4"><strong>{{ event.Timeframe }}:</strong> {{ event.Title }}</p>
        <br>
        <TagComponent class="md:inline-block sm:mb-4" :tagSettings="event.Tags"/> 
    </div>
</template>

<script>

import TagComponent from './Tags.vue';
import EventData from './TimelineEvents.json'

export default {
    name: 'TimelineEvents',
    components:{TagComponent},
    props: {},
    data() {
        return {
        eventdata: EventData,
        }
    }
}
</script>
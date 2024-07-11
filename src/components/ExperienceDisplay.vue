<template>
    <div class="px-4">
        <div class="flex flex-row">
            <div
                v-for="(topic, index) in topics"
                :key="index">
                <button class="px-3 font-bold"
                    @click="currentSelectedTopic(index)"
                    :class="
                    selectedTopic === topic 
                    ? 'animate-pulse sm:border-b-4 border-blue-700' 
                    : null"> 
                    {{ topic }}
                </button>
            </div>
        </div>
        <div
            v-for="(data, index) in experienceData"
            :key="index">
            <ul class="py-3 list-disc list-inside" 
                v-if="data.title == selectedTopic">
                    <li class="xl:py-2 py-1"
                        v-for="(experince, index) in data.experiences"
                        :key="index">
                            {{ experince }}
                    </li>
            </ul>
        </div>
    </div> 
</template>

<script>
import ExperienceData from './ExperienceDisplay.json'

export default {
    name: 'ExperienceDisplay',
    props: {
        topics: {
            type: Array,
            required: true
        }
    },
    
    data() {
        return {
            experienceData: ExperienceData,
            selectedTopic: this.currentSelectedTopic(0)
        }
    },

    mounted() {
        this.currentSelectedTopic(0)
    },

    methods: {
		currentSelectedTopic(index) {
			switch (index) {
                case 0:
                    this.selectedTopic = 'Understanding Business Context';
                    break;
                case 1:
                    this.selectedTopic = 'Product Development';
                    break;
                case 2:
                    this.selectedTopic = 'Leadership';
                    break;
                case 3:
                    this.selectedTopic = 'Critical Thinking & Execution';
                    break;
            }
        } 
    } 
}
</script>
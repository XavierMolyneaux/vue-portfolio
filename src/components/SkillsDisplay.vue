<template>
    <div class="flex flex-col mt-6 sm:flex-row">
        <div class="flex flex-row sm:flex-col">
            <button class="px-4 py-3 text-left text-lg sm:border-l-4 border-l-0 font-bold"
                v-for="(skill, index) in skillTypes"
                :key="index"
                @click="currentSelectedTechnology(index)"
                :class="
                    selectedSkill === skill 
                    ? 'animate-pulse border-blue-700' 
                    : null">
                {{ skill }}
            </button>
        </div>

        <div class="flex flex-row sm:flex-col"
            v-for="(skill, index) in skillsData"
            :key="index">
            <div class="flex flex-wrap"
                v-if="skill.type == selectedSkill">
                <TechCards 
                v-for="(tech, techIndex) in skill.technologies"
                :key="techIndex"
                :technology="tech"/>
            </div>
        </div>
    </div>
</template>

<script>
import SkillsData from './SkillsDisplay.json'
import TechCards from './TechCards.vue';

export default {
    name: 'SkillsDisplay',
    components: {TechCards},        
    props: {
        skillTypes: {
            type: Array,
            required: true
        }
    },

    data() {
        return {
            skillsData: SkillsData,
            selectedSkill: this.currentSelectedTechnology(0)
        }
    },

    mounted() {
		this.currentSelectedTechnology(0);
	},

	methods: {
		currentSelectedTechnology(index) {
			switch (index) {
                case 0:
                    this.selectedSkill = 'Frontend';
                    break;
                case 1:
                    this.selectedSkill = 'Backend';
                    break;
                case 2:
                    this.selectedSkill = 'Infrastructure';
                    break;
			}
		}
    }    
}
</script>
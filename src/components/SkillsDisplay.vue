<template>
    <section class="flex flex-col mt-6 sm:flex-row">
        <div class="flex flex-row sm:flex-col">
            <button class="px-4 py-3 selector-bg-hover left-border-one text-left text-lg sm:border-l-2 sm:border-b-0 border-l-0 border-b-2 transition ease-in-out delay-100 translate font-bold"
                v-for="(skill, index) in skillTypes"
                :key="index"
                @click="currentSelectedTechnology(index)">
                {{ skill }}
            </button>
        </div>

        <div class="flex flex-row sm:flex-col"
            v-for="(skills, index) in skillsData"
            :key="index">
            <div class=""
                v-if="skills.type == selectedSkill">
                {{ skills.technologies }}
            </div>
        </div>
    </section>
</template>

<script>
import SkillsData from './SkillsDisplay.json'

export default {
    name: 'SkillsDisplay',
    components: {},        
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
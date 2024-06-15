<template>
    <section>
        <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8">Overview</h2>
        <br/>
        <div class="xl:text-lg text-base lg:indent-8 md:indent-4 sm:indent-0">
            <p>
                Xavier's journey began with his first job cutting grass as a kid, instilling a strong 
                work ethic and ensuring he understood the value of a dollar from an early age. At 18, 
                he transitioned from an event rental delivery driver/installer to a web developer within 
                a different vertical of the same company. The CEO, and personal mentor, of the company 
                valued Xavier's maturity, leadership and critical thinking. When he found out that Xavier 
                would be attending the University of Texas at Dallas to study Computer Science, he decided 
                to offer him an opportunity to gain real life web and business development experience.   
            </p>
            <br/>
            <p>
                Xavier's passion for software engineering was ignited through uniquely challenging work 
                experiences, including navigating the challenges of production deployments of a distributed 
                system, modernizing legacy code, witnessing the transformative effects of internal process 
                automation, and heavily contributing to product roadmap planning. These experiences have shaped 
                him into a well-rounded and driven software engineer, adept at both technical and strategic 
                aspects of development.

            </p>
        </div>
    </section>
    <section>
        <p class="my-3 text-lg font-bold">Select a topic to view related experiences:</p>
        <ExperienceDisplay class="shadow-2xl" :topics=topics />
    </section>
</template>

<script>
import ExperienceDisplay from '../components/ExperienceDisplay.vue';

export default {
    name: 'ExperiencePage',
    components: {ExperienceDisplay},
    
    data() {
        return {
            topics: [
                'Understanding Business Context', 
                'Product Development', 
                'Team Player', 
                'Critical Thinking & Execution'
            ]
        }
    }
}
</script>
<template>
    <div>
        <!-- image, animated text or animated image. -->
    </div>
    <div class="flex flex-col gap-[2.5rem]">
        <section>
            <h1 class="text-4xl font-bold">Xavier Molynueax</h1>
            <h3 class="text-lg">Full Stack Engineer</h3>
        </section>
        <section>
            <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8">Backgroud</h2>
            <br/>
            <p class="lg:text-lg text-sm lg:indent-8 md:indent-4 sm:indent-0">
                With a robust 5-year professional background, Xavier has played a pivotal role in the success of 
            various products and applications. Beyond my technical expertise, he brings to the table strong 
            analytical and communication skills, allowing him to adeptly collect requirements, convert them into 
            technical specifications, and efficiently communicate project progress to stakeholders.
            </p>
            <br/>
            <p class="lg:text-lg text-sm lg:indent-8 md:indent-4 sm:indent-0">
                Thriving in dynamic settings, Xavier is known for adaptability and a keen enthusiasm for continuous 
                learning, ensuring he remains well-versed in the latest industry trends and technologies.
            </p>
        </section>

        <section>
            <h2 class="lg:text-2xl text-lg font-bold underline underline-offset-8">Bio</h2>
            <br/>
            <p class="lg:text-lg text-sm lg:indent-8 md:indent-4 sm:indent-0">
                Born and raised in Austin Texas, with an Afro-Caribbean background, Xavier has a passion for
                technology and creating a better future. Outside of his career, he spends his time traveling,
                tending to his 30+ plants and living a holistic lifestyle.
            </p>
        </section>

        <section>
            <h2 class="lg:text-5xl text-lg font-bold underline underline-offset-8">Timeline</h2>
            <br/>
            <div class="shadow-2xl px-3" >
                <TimelineEvents/>
            </div>
        </section>
    </div>
</template>

<script>
import TimelineEvents from '../components/TimelineEvents.vue';

export default {
    name: 'LandingPage',
    components: {TimelineEvents}
}
</script>
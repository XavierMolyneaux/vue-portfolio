<template>
    <section class="inline-flex flex-row py-3 w-full shadow-lg">
        <div class="flex">
            <h1 class="text-4xl font-bold underline ml-5">
                <router-link to="/" @click="scrollTop">Xavier</router-link>
            </h1>
        </div>
        <div class="text-2xl flex ml-10 pt-2">
            <ul class="flex">
            <li
                class="px-3 hover:bg-gradient-to-b from-transparent to-blue-300 rounded-lg"
                v-for="(value, index) in webRoutes"
                :key="index"
            >
                <button>
                <router-link :to="value.route">{{
                    value.title
                }}</router-link>
                </button>
            </li>
            </ul>
        </div>
        <div class="flex absolute right-20">
            <NavBarIcons class="mr-2" :selectedIcon="'gitSource'"/>
            <NavBarIcons :selectedIcon="'linkedIn'"/>
            <!-- <NavBarIcons :selectedIcon="'burgerMenu'"/> -->
        </div>
    </section>
</template>

<script>
import NavBarIcons from '../components/NavBarIcons';

export default { 
    components: {
        NavBarIcons
    },

    setup() {
        const webRoutes = {
			skills: {
				title: 'Skills',
				route: '/'
			},
			works: {
				title: 'Experience',
				route: '/'
			}, 
            projects: {
                title: 'Projects',
                route: '/'
            },
            contact: {
				title: 'Contact',
				route: '/'
			}
		};

        const scrollTop = () => {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		};

        return {
            webRoutes,
            scrollTop
        };
    }
}
</script>
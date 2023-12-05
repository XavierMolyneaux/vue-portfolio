<template>
    <div class="mt-5">
        <ul class="flex flex-row gap-5 flex-wrap">
        <li
            v-for="(value, index) in tagSettings"
            :key="index"
            class="tags lg:text-md text-sm text-center rounded-md xl:p-2 xl:px-4 p-1 px-3 cursor-default transition ease-in-out hover:rotate-6"
        >
            {{ value }}
        </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'TagComponent',
    props: {
        tagSettings: {
            type: Array,
            required: false,
        },
    },
};
</script>

<style scoped>
.tags:hover {
color: #4786cf
}
.tags{
    background-color: lightgray;
}
</style>
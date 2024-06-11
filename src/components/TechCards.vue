<template>
    <div class="py-1 hover:shadow-lg hover:rotate-6 w-[8rem] h-[6rem] hover:border-2">
        <div class="flex flex-col items-center">
            <i :class="technology.image" class="text-6xl" style="font-weight: normal" />
            <p class="font-bold whitespace-nowrap">
                {{ technology.title }}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TechCards',
    props: {
        technology: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            isHovering: false,
            isClicked: false
        };
    }
}
</script>   
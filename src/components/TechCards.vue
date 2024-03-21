<template>
    <div>
        <div
        class="selector py-1 pt-2 rounded-lg transition ease-in-out border-wrapper-hover"
        @mouseenter="isHovering = true"
        @mouseleave="
            isHovering = false;
            isClicked = false;
        "
        @click="isClicked = !isClicked"
        :class="[
            isParagraph
            ? 'px-2 overflow-y-scroll h-[12rem] w-[12rem] icon-highlight-focus'
            : 'div-center hover:rotate-6 w-[10rem] h-[8rem] icon-highlight hover:border-2',
            isClicked && isParagraph
            ? 'icon-highlight border-2'
            : 'paragraph-option'
        ]"
        >
        <div
            class="flex flex-col items-center gap-2 animate__animated animate__fadeIn animate__fast"
            v-if="!isParagraph"
        >
            <i :class="image" class="text-7xl" style="font-weight: normal" />
            <p class="font-bold whitespace-nowrap">
            {{ title }}
            </p>
        </div>
        <div v-else>
            <div class="transition ease-in-out px-2 text-lg">
            {{ isClicked ? argOne : title }}
            </div>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: TechCards,
    props: {
        technologies: {
            type: Array,
            required: true
        },
    }
}
</script>   
<template>
    <div>
        <div class="selector py-1 pt-2 rounded-lg transition ease-in-out border-wrapper-hover"
            @mouseenter="isHovering = true"
            @mouseleave="
            isHovering = false;
            isClicked = false;"
            @click="isClicked = !isClicked"
            :class="
                isClicked
                ? 'icon-highlight border-2'
                : 'paragraph-option'">
            <div class="flex flex-col items-center gap-2 animate__animated animate__fadeIn animate__fast">
                <i :class="technology.image" class="text-7xl" style="font-weight: normal" /><!--showing Size Of  0x0-->
                <p class="font-bold whitespace-nowrap">
                    {{ technology.title }}
                </p>
            </div>
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
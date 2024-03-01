<template>
    <div class="container">
        <p>Hello!</p>
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
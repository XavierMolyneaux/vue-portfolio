<template>
    <div class="text-center">
        <p>
            Submission form for business inquiries, proposals, job opportunities or to discuss cool tech :).
        </p>
        <br>
        <ContactForm/>
    </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue'
export default {
    name: 'ContactPage',
    components: {ContactForm}
}
</script>
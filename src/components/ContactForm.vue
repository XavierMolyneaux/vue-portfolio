<template>
<!-- Netlify Forms solution alternative to EmailJS integration. Submissions sent to Netlify dashboard.-->
    <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="contact" />
        <p class="hidden">
            <label>
                Hello! <input name="bot-field" />
            </label>
        </p>
        <p>
            <label>Your Name: <input type="text" name="name" /></label>
        </p>
        <br>
        <p>
            <label>Your Email: <input type="email" name="email" /></label>
        </p>
        <br>
        <p>
            <label>Subject: <input type="text" name="subject" /></label>
        </p>
        <br>
        <p>
            <label>Message: <textarea name="message"></textarea></label>
        </p>
        <br>
        <p>
            <button class="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none" type="submit">
                Send
            </button>
        </p>
    </form>
</template>
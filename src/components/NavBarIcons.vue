<template>
    <div>
  
      <div v-if="selectedIcon === 'burgerMenu'">
        <button class="">
          <div class="border-black border-2 rounded-md p-[0.48rem] -mt-[1px]">
            <div class="bg-black h-[0.15rem] w-[1.5rem]"></div>
            <div class="bg-black h-[0.15rem] w-[1.5rem] mt-2"></div>
            <div class="bg-black h-[0.15rem] w-[1.5rem] mt-2"></div>
          </div>
        </button>
      </div>
  
      <div v-else-if="selectedIcon === 'gitSource'">
        <a href="https://github.com/XavierMolyneaux/vue-portfolio" target="_blank" rel="noreferrer noopener">
        <button
          class="border-black border-2 rounded-md p-[0.35rem]">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            class="inline min-w-[25px] min-h-[25px]"
            width="20px"
            height="20px"
          />
        </button></a>
      </div>

      <div v-else-if="selectedIcon === 'linkedIn'">
        <a href="https://www.linkedin.com/in/xavier-molyneaux/" target="_blank" rel="noreferrer noopener">
        <button class="border-black border-2 rounded-md p-[0.35rem]">
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            class="inline min-w-[25px] min-h-[25px]"
            width="20px"
            height="20px"
          />
        </button></a>
      </div>
    </div>
</template>
  
<script>  
export default {
    props: {
        selectedIcon: {
            type: String,
            required: false,
            default: null,
        },
    }
};
</script>
  
<style>
</style>
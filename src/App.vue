<template>
  <NavBar/>
  <div class="mt-10 xl:px-[20rem] lg:px-[14rem] md:px-[10rem] sm:px-[7rem] px-[4rem]">
  <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './views/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background-color: darkgray;
  /* margin-top: 60px; */
}
</style>

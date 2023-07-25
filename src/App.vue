<template>
  <NavBar/>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <Tags :tagSettings="['tag1', 'tag2', 'tag3', 'tag4']"/> -->
</template>

<script>
// import Tags from './components/Tags.vue'
import NavBar from './views/NavBar.vue'

export default {
  name: 'App',
  components: {
    // Tags,
    NavBar
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
  /* margin-top: 60px; */
}
</style>

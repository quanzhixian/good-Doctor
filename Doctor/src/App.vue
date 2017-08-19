<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './static/lib/reset.css' 
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  overflow-x:auto;
  height:100%;
}
</style>

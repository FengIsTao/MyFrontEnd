<template>
  <div id="app">
    <FatherList/>
  </div>
</template>

<script>
import FatherList from '@/components/FatherList'
export default {
  name: 'App',
  components:{
    FatherList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

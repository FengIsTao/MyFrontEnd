<template>
  <div id="app">
    <FatherDemo2/>
  </div>
</template>

<script>
import FatherDemo2 from '@/components/FatherDemo2'
export default {
  name: 'App',
  components:{
   FatherDemo2
  },
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

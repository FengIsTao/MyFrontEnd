<template>
  <div class="hello">
    <input
      type="text"
      v-model="value1"
      @change="inputChange('hello', $event)"
    />
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    },
  },
    methods:{
      inputChange(msg,e){
        console.log(msg,e);
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

<template>
  <div class="custom-input">
      <input :value="value" @change="$_handleChange">
  </div>
</template>

<script>
export default {
    props:{
        value:{
            type:String,
            default:""
        }
    },
    methods:{
        $_handleChange(e){
            this.$emit('input',e.target.value)
        }
    }
}
</script>

<style>

</style>
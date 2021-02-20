<template>
  <div class="custom-overlay" v-show="visible" @click="$_handleClick">
  </div>
</template>

<script>
export default {
name:'HiddenDialog',
props:{
    visible:{
        type:Boolean,
        default:false
    }
},
methods:{
    $_handleClick(){
        this.$emit('update:visible',false)
    }
}
}
</script>

<style>

</style>
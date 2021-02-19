<template>
  <Demo2>
    <template #toilet="scope">
      <span v-if="scope.washer">这里可以放洗衣机</span>
    </template>
  </Demo2>
</template>

<script>
import Demo2 from '@/components/Demo2'
export default {
  name:'FatherDemo2',
  components:{
    Demo2
  },
}
</script>

<style>

</style>
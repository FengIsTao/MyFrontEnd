<template>
  <div>
    <label for="bookNum">数量</label>
    <button @click="setCount(count+1)">+</button>
    <span>{{count}}</span>
    <button @click="setCount(count-1)">-</button>
  </div>
</template>

<script>
import {store,mutations} from '../store/index'
export default {
  name:'Demo1',
  computed:{
    count(){
      return store.count
    }
  },
  methods:{
    setCount:mutations.setCount
  }
}
</script>

<style>
</style>

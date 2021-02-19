<template>
 <el-form :model="formData" size="small">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="formData.name" />
    </el-form-item>
    <el-form-item label="年龄" prop="age">
      <el-input-number v-model="formData.age" />
    </el-form-item>
    <el-button>提交</el-button>
  </el-form>
</template>

<script>
export default {
  name: "Demo3",
  data(){
      return {
          formData:{
              name:'',
              age:0
          }
      }
  }
};
</script>

<style>
</style>
<template>
  <div class="info">
    <component :is="roleCom" v-if="roleCom"></component>
  </div>
</template>

<script>
import AdminInfo from './admin-info'
import BookkeeperInfo from './bookkeeper-info'
import HrInfo from './hr-info'
import UserInfo from './user-info'

export default {
name:"DynicCom",
components:{
  AdminInfo,
  BookkeeperInfo,
  HrInfo,
  UserInfo
},
data(){
  return{ 
    roleCom:{
      admin:AdminInfo,
      bookkeeperInfo:BookkeeperInfo,
      hr:HrInfo,
      user:UserInfo,
    },
    role:'user',
    roleCom:undefined
  }
},
created(){
  const {role,roleCom}=this
  this.roleCom=roleCom[role]
}
}
</script> 

<style>

</style>
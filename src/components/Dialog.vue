<template>
  <el-dialog :visible.sync="visibleDialog">
    <!--内容区域的默认插槽-->
    <slot></slot>
    <!--使用弹框的footer插槽添加按钮-->
    <template #footer>
      <!--对外继续暴露footer插槽，有个别弹框按钮需要自定义-->
      <slot name="footer">
        <!--将取消与确定按钮集成到内部-->
        <span>
          <el-button @click="$_handleCancel">取 消</el-button>
          <el-button type="primary" @click="$_handleConfirm"> 确 定 </el-button>
        </span>
      </slot>
    </template>
  </el-dialog>
</template>

<script>
export default {
  name: "Dialog",
  props:{
    visable:{
      type:Boolean,
      default:false
    }
  },
  computed:{
    visibleDialog:{
      get(){
        return this.visable
      }
    }
  }
};
</script>

<style>
</style>
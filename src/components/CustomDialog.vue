<template>
  <div>
    <Dialog
      :visible.sync="visibleDialog"
      title="测试弹窗"
      @opened="$_handleOpened"
      >这是一段内容</Dialog>
  </div>
</template>

<script>
import Dialog from "@/components/Dialog";
export default {
  name: "CustomDialog",
  components: {
    Dialog,
  },
};
</script>

<style>
</style>
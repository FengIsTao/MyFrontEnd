<template>
  <div>
    <div class="two-bedroom">
      <div class="toilet">
        <slot name="toilet" v-bind="{ washer: true }"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Demo2",
  pageVisible() {
    console.log("页面显示出来");
  },
  pageHidden() {
    console.log("页面隐藏起来");
  },
};
</script>

<style>
</style>
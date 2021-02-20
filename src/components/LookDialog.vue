<template>
  <HiddenDialog :visible.sync="visible" />
</template>

<script>
import HiddenDialog from "@/components/HiddenDialog";
export default {
  name: "LookDialog",
  components: {
    HiddenDialog,
  },
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<style>
</style>
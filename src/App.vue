<template>
  <div id="app">
    <LookDialog />
  </div>
</template>

<script>
import LookDialog from "@/components/LookDialog";
export default {
  name: "App",
  components: {
    LookDialog,
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

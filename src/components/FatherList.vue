<template>
  <div class="list-detail">
    <List :list="list"></List>
  </div>
</template>

<script>
import List from "@/componnets/List";
export default {
  name: "FatherList",
  components: {
    List,
  },
  data() {
    return {
      list: [
        {
          name: "经济",
          children: [{ name: "四川成都" }, { name: "四川绵阳" }],
        },
           {
          name: "经济",
          children: [{ name: "四川成都" }, { name: "四川绵阳" }],
        },
      ],
    };
  },
};
</script>

<style>
</style>
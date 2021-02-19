<template>
  <CustomForm size="small">
    <CustomFormItem label="姓名">
      <CustomInput v-model="formData.name"></CustomInput>
    </CustomFormItem>
  </CustomForm>
</template>

<script>
import CustomForm from "@/components/CustomForm";
import CustomFormItem from "@/components/CustormFormItem";
import CustomInput from "@/components/CustomInput";
export default {
  name: "Custom",
  components: {
    CustomForm,
    CustomInput,
    CustomFormItem,
  },
  data() {
    return {
      formData: {
        name: "",
        age: 0,
      },
    };
  },
};
</script>

<style>
</style>
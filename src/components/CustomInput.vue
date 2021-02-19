<template>
  <div
    class="custom-input"
    :class="[
      `custom-input--${getSize}`,
      getDisabled && `custom-input--disabled`,
    ]"
  >
    <input class="custom-input__input" :value="value" @input="$_handleChange" />
  </div>
</template>

<script>
export default {
  name: "CustomInput",
  props: {
    value: {
      type: String,
      default: "",
    },
    size: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
  },
  inject: ["customForm"],
  computed: {
    getSize() {
      return this.size || this.customForm.size;
    },
    getDisabled(){
        const {disabled}=this
        if(disabled !== undefined){
            return disabled
        }
        return this.customForm.disabled
    }
  },
  methods:{
      $_handleChange(e){
          this.$emit('input',e.target.value)
      }
  }
};
</script>

<style>
</style>
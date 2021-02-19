import Vue from "vue";

//通过$options获取生命周期函数
const notifyVisibilityChange = (lifeCycleName, vm) => {
  const lifeCycles = vm.$options[lifeCycleName];
  if (lifeCycles && lifeCycles.length) {
    lifeCycles.forEach(lifecycle => {
      lifecycle.call(vm);
    });
  }
  if (vm.$children && vm.$children.length) {
    vm.$children.forEach(child => {
      notifyVisibilityChange(lifeCycleName, child);
    });
  }
};

//定义两个生命周期函数和beforeCreate和created一样的功能
export function init() {
  const optionMergeStrategies = Vue.config.optionMergeStrategies;
  optionMergeStrategies.pageVisible = optionMergeStrategies.beforeCreate;
  optionMergeStrategies.pageHidden = optionMergeStrategies.created;
}

//将事件绑定到根节点上去
export function bind(rootVm) {
  window.addEventListener("visibilitychange", () => {
    let lifeCycleName = undefined;
    if (document.visibilityState === "hidden") {
      lifeCycleName = "pageHidden";
    } else if (document.visibilityState === "visible") {
      lifeCycleName = "pageVisible";
    }
    if (lifeCycleName) {
      notifyVisibilityChange(lifeCycleName, rootVm);
    }
  });
}

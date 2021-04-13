<script>
import { defineComponent } from "vue";
import { ref } from 'vue'
import useVisible from "@/api/useVisible.js";
export default /*#__PURE__*/ defineComponent({
  name: "MDropDownItem", // vue component name
  props: {
    icon: {
      type: String,
      default: null,
    },
  }
});
</script>

<template>
  <div>
    <a
     class="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
      role="menuitem"
    >
      <component
        class="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500"
        :is="icon"
        v-if="icon"
      ></component>
      <slot></slot>
    </a>
  </div>
</template>

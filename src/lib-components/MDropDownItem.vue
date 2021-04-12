<script>
import { defineComponent } from "vue"
import { ChevronDownIcon } from '@heroicons/vue/solid'
import useVisible from "@/api/useVisible.js"
export default /*#__PURE__*/ defineComponent({
  name: "MDropDownItem", // vue component name
  components: {
    ChevronDownIcon,
  },
  props: {
  },
  setup(props) {
    
    return {
      ...useVisible()
    }
  }
});
</script>

<template>
    <div>
      <a
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
          role="menuitem"
          ><slot></slot>
        </a>  
    </div>
</template>

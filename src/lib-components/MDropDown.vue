<script>
import { defineComponent } from "vue"
import { ChevronDownIcon } from '@heroicons/vue/solid'
import useVisible from "@/api/useVisible.js"
export default /*#__PURE__*/ defineComponent({
  name: "MDropDown", // vue component name
  components: {
    ChevronDownIcon,
  },
  props: {
    title: {
      type: String,
      default: ''
    },
  },
  setup(props) {
    
    return {
      ...useVisible()
    }
  }
});
</script>

<template>
<div class="relative inline-block text-left">
  <button
    type="button"
    @click="visible = !visible"
    class="inline-flex justify-center rounded-md border w-full border-gray-300 shadow-sm px-4 py-2 bg-green-light text-sm font-medium text-white hover:bg-green-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-green-light"
    id="options-menu"
    aria-expanded="true"
    aria-haspopup="true"
  >
    {{ title }} 
    <!-- Heroicon name: solid/chevron-down -->
    <ChevronDownIcon class="h-5 w-5 text-white -mr-1 ml-2"/>
  </button>

  <div v-show="visible" class="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    <div class="py-1" role="none">
      
      <slot></slot>
    </div>
  </div>
</div>
</template>

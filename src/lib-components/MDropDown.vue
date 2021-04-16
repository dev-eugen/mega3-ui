<script>
  import {
    defineComponent
  } from "vue"
  import {
    ref
  } from 'vue'
  import useVisible from "@/api/useVisible.js"
  export default /*#__PURE__*/ defineComponent({
    name: "MDropDown", // vue component name
    props: {
      noIcon: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: 'indigo'
      },
      small: {
        type: Boolean,
        default: false
      }
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
    <button v-if="!small" type="button" @click.stop="visible = !visible" v-click-outside="visibleFalse"
      :class="`inline-flex justify-center items-center rounded-md border w-full border-gray-300 shadow-sm px-4 py-2 bg-${color}-600 text-sm font-medium text-white hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-${color}-600`"
      id="options-menu" aria-expanded="true" aria-haspopup="true">
      <slot name="body"></slot>
      <ChevronDownIcon v-show="!noIcon" class="h-5 w-5 text-white -mr-1 ml-2" />
    </button>
    <button @click="visibleTrue" v-click-outside="visibleFalse" v-else type="button"
      :class="`bg-white rounded-full flex items-center text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-${color}-600`"
      id="options-menu" aria-expanded="true" aria-haspopup="true">
      <dots-vertical-icon class="h-5 w-5"></dots-vertical-icon>
    </button>
    <transition enter-active-class="opacity-0 scale-50" leave-active-class="opacity-0 scale-50">
      <div v-show="visible"
        class="transition duration-200 transform origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
        role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
        <div class="py-1" role="none">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>
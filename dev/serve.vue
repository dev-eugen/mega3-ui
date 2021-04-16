<script>
  import {
    defineComponent, ref
  } from "vue";
  import test from '../src/lib-components/test'
  export default defineComponent({
    name: "ServeDev",
    components: {
     test
    },
    setup(props) {
      //const test = (v) => console.log(v)
      const name = ref("name")
      const surname = ref("surname")
      const open = ref(true)
      return{ name, surname, open }
    }
  });
</script>

<template>
  <div id="app" class="p-3 flex justify-center bg-gray-200 w-full">
    <m-modal color="indigo" :open="open" @accept="open = true" @close="open = false" ok-title="Accept" icon="HomeIcon" title="Title" text="Asdajd adjaodj aodad auidjaoid iojdoaidjaoid aijdaoisdjovxcvxcvxv xvxcv xvx v xv xv x v xv xv x vx v xv">
      sdfsdfsfdsdfsfsdf
    </m-modal>
  </div>
</template>
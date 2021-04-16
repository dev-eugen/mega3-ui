<script>
  import {
    defineComponent, ref
  } from "vue";
import MModalConfim from "../src/lib-components/MModalConfim.vue"
  export default defineComponent({
  components: { MModalConfim },
    name: "ServeDev",
    setup(props) {
      const name = ref("name")
      const surname = ref("surname")
      const open = ref(true)
      return{ name, surname, open }
    }
  });
</script>

<template>
  <div id="app" class="p-3 flex justify-center bg-gray-200 w-full">
    <m-modal-confim color="pink" :open="open" @accept="open = true" @close="open = false" ok-title="Accept" icon="HomeIcon" title="Title" text="Asdajd adjaodj aodad auidjaoid iojdoaidjaoid aijdaoisdjovxcvxcvxv xvxcv xvx v xv xv x v xv xv x vx v xv">
      sdfsdfsfdsdfsfsdf
    </m-modal-confim>
  </div>

  <div>
<div id="app" class="p-3 flex justify-center bg-gray-200 w-full">

<!-- <m-input label="Email" placeholder="example@gmail.com" id="name" type="number"></m-input> -->
</div>


</div>
</template>
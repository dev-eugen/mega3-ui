<script>
  import {
    defineComponent, ref
  } from "vue";
  export default defineComponent({
    name: "ServeDev",
    // components: {
    //  Mega3UiSample,
    // }
    setup(props) {
      const x =ref("wrwr")
      return{ x }
    }
  });
</script>

<template>
  <div id="app" class="p-3 flex justify-center bg-gray-200 w-full">
    <m-input :label="x" placeholder="example@com" id="name" type="number" error="Only namber" v-model="x"></m-input>
  </div>
</template>
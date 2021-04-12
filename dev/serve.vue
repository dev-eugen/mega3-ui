<script>
import { defineComponent } from "vue";
// Uncomment import and local "components" registration if library is not registered globally.
import { MDropDown } from "@/entry.esm";
import { MDropDownItem } from "@/entry.esm";

export default defineComponent({
  name: "ServeDev",
  // components: {
  //  Mega3UiSample,
  // }
});
</script>

<template>
  <div id="app" class="p-3 flex justify-center bg-gray-200 w-full h-screen">
    <m-drop-down title="Options">
      <m-drop-down-item>Account Settings</m-drop-down-item>
      <m-drop-down-item>Options</m-drop-down-item>
      <m-drop-down-item>Logout</m-drop-down-item>
    </m-drop-down>
  </div>
</template>

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
  <div id="67">
    <m-drop-down title="Options">
      <template #body>
        sdfsf
      </template>
      <m-drop-down-item icon="CogIcon">Account Settings</m-drop-down-item>
      <m-drop-down-item>Options</m-drop-down-item>
      <m-drop-down-item>Logout</m-drop-down-item>
    </m-drop-down>

    <m-drop-down title="Options">
      <template #body>
        sdfsf
      </template>
      <m-drop-down-item icon="CogIcon">Account Settings</m-drop-down-item>
      <m-drop-down-item>Options</m-drop-down-item>
      <m-drop-down-item>Logout</m-drop-down-item>
    </m-drop-down>
  </div>
    
  </div>
</template>

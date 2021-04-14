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
      <m-drop-down>
        <template #body>
          <img
            class="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=eG1lRgrgwG&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <span class="hidden ml-3 text-white text-sm font-medium lg:block"
            ><span class="sr-only">Open user menu for </span>Emilia Birch</span
          >
        </template>
        <m-drop-down-item>Account Settings</m-drop-down-item>
        <m-drop-down-item>Preferences</m-drop-down-item>
        <m-drop-down-item>Logout</m-drop-down-item>
      </m-drop-down>
    </div>
  </div>
</template>

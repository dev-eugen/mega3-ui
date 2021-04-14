<script>
  import {
    defineComponent
  } from "vue";
  export default defineComponent({
    name: "ServeDev",
    // components: {
    //  Mega3UiSample,
    // }
  });
</script>

<template>
  <div id="app" class="p-3 flex justify-center bg-gray-200 w-full">
    <div>
      <m-panel justify="start">
      <template #head>Head</template>
      <template #body>We useody sectionsWe use less vertical padding on card footers at all sizes than on headers or body sectionsWe use less vertical padding on card footers at all sizes than on headers or body sections</template>
      <template #footer>Head</template>
    </m-panel>
    </div>
    <!-- <div>
      <m-drop-down>
        <template #body>
          <img class="h-8 w-8 rounded-full"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=eG1lRgrgwG&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt="" />
          <span class="hidden ml-3 text-white text-sm font-medium lg:block"><span class="sr-only">Open user menu for
            </span>Emilia Birch</span>
        </template>
        <m-drop-down-item>Account Settings</m-drop-down-item>
        <m-drop-down-item>Preferences</m-drop-down-item>
        <m-drop-down-item>Logout</m-drop-down-item>
      </m-drop-down>
    </div> -->
  </div>
</template>
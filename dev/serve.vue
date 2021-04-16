<script>
  import {
    defineComponent,
    ref
  } from "vue";
  import MModalConfim from "../src/lib-components/MModalConfim.vue";
  export default defineComponent({
    components: {
      MModalConfim
    },
    name: "ServeDev",
    setup(props) {
      const name = ref("name")
      const surname = ref("surname")
      const open = ref(false)
      const visible = ref(false)
      return {
        name,
        visible,
        surname,
        open
      }
    }
  });
</script>

<template>
  <div id="app" class="p-3 flex justify-center flex-col items-center w-full">
    <m-panel class="mb-5 w-min">
      <template #head>
        Buttons
      </template>
      <template #body>
        <m-button size="sm" color="green">Button</m-button>
        <m-button size="md" color="blue">Button</m-button>
        <m-button size="md" rounded color="blue">Button</m-button>
        <m-button size="lg" color="red">Button</m-button>
        <m-button size="sm" icon="MailIcon" color="indigo">Button</m-button>
        <m-button size="md" icon="MailIcon" color="indigo">Button</m-button>
        <m-button size="lg" icon="MailIcon" color="indigo">Button</m-button>
      </template>
    </m-panel>

    <m-panel class="mb-5">
      <template #head>
        Icon butons
      </template>
      <template #body>
        <m-button-icon icon="PlusIcon" size="sm" color="indigo">button</m-button-icon>
        <m-button-icon icon="PlusIcon" size="md" color="indigo">button</m-button-icon>
        <m-button-icon icon="PlusIcon" size="lg" color="indigo">button</m-button-icon>
      </template>
    </m-panel>

    <m-panel class="mb-5">
      <template #head>
        Modals
      </template>
      <template #body>
        <m-button @click="visible = true" size="md" color="indigo">Simple</m-button>
        <m-modal color="red" :open="visible" @accept="visible = false" @close="visible = false" ok-title="GO"
          cancel-title="No, back">
          This block is in slot
        </m-modal>
        <m-button size="md" @click="open = true" color="red">Confim</m-button>
        <m-modal-confim color="red" :open="open" @accept="open = false" @close="open = false" ok-title="Accept"
          icon="ShieldExclamationIcon" title="Title"
          text="Lorem inpus of this text you would like this and many more about if you want to cinfim pres Accept if no press Cancel">
        </m-modal-confim>
      </template>
    </m-panel>

    <m-panel class="mb-5">
      <template #head>
        Avatars
      </template>
      <template #body>
        <m-avatar color="green" name="asd asd" size="lg" status="lg"></m-avatar>
        <m-avatar color="green" name="asd asd" size="md" status="md"></m-avatar>
        <m-avatar color="green" name="asd asd" size="sm" status="sm"></m-avatar>
        <m-avatar color="red" name="asd asd" size="lg" status="lg"></m-avatar>
        <m-avatar color="red" name="asd asd" size="md" status="md"></m-avatar>
        <m-avatar color="red" name="asd asd" size="sm" status="sm"></m-avatar>
        <m-avatar color="gray" name="asd asd" size="lg" status="lg"></m-avatar>
        <m-avatar color="gray" name="asd asd" size="md" status="md"></m-avatar>
        <m-avatar color="gray" name="asd asd" size="sm" status="sm"></m-avatar>
        <m-avatar color="red" name="asd asd" size="lg" status="lg" rounded></m-avatar>
        <m-avatar color="green" name="asd asd" size="md" status="md " rounded></m-avatar>
        <m-avatar color="gray" name="asd asd" size="sm" status="sm" rounded></m-avatar>
      </template>
    </m-panel>

    <m-panel class="mb-5">
      <!-- <template #head>
        Dropdowns
      </template> -->
      <template #head>
        <m-drop-down noIcon>
          <template #body>
            <img class="h-7 w-7 rounded-full"
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=eG1lRgrgwG&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="" />
            <span class="hidden ml-3 text-white text-sm font-medium lg:block"><span class="sr-only">Open user menu for
              </span>Emilia Birch</span>
          </template>
          <m-drop-down-item>Account Settings</m-drop-down-item>
          <m-drop-down-item>Preferences</m-drop-down-item>
          <m-drop-down-item>Logout</m-drop-down-item>
        </m-drop-down>
      </template>
    </m-panel>




  </div>
</template>
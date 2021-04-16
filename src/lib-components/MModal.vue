<template>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" static class="fixed z-10 inset-0 overflow-y-auto" @close="close" :open="open">
      <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <DialogOverlay class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </TransitionChild>

        <!-- This element is to trick the browser into centering the modal contents. -->
        <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
          <div class="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6">
            <div :class="`text-${textSize}`">
              <slot></slot>
            </div>
            <div class="mt-5 sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense">
              <button @click="accept" type="button" :class="`w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-${color}-600 text-base font-medium text-white hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 sm:col-start-2 sm:text-sm`">
                {{ okTitle }}
              </button>
              <button @click="cancel" type="button" :class="`mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500 sm:mt-0 sm:col-start-1 sm:text-sm`" ref="cancelButtonRef">
                {{ cancelTitle }}
              </button>
            </div>
          </div>
        </TransitionChild>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script>
export default {
  props: {
      textSize:{
          type: String,
          default: 'md'
      },
      color:{
          type: String
      },
      open: {
          type: Boolean,
          require: false 
      },
      icon: {
          type: String,
          default: null
      },
      okTitle:{
          type: String,
          default: 'Accept'
      },
      cancelTitle:{
          type: String,
          default: 'Cancel'
      }
  },
  setup(props, { emit }) {
    const accept = () => {
      emit('close')
      emit('accept')
    }
    const cancel = () => {
      emit('close')
      emit('cancel')
    }
    return{ cancel, accept }
  }
}
</script>

## Example

```
<m-modal color="indigo" :open="open" @accept="open = true" @close="open = false" ok-title="Accept" icon="HomeIcon" title="Title" text="Asdajd adjaodj aodad auidjaoid iojdoaidjaoid aijdaoisdjovxcvxcvxv xvxcv xvx v xv xv x v xv xv x vx v xv">
      sdfsdfsfdsdfsfsdf
    </m-modal>
    ```
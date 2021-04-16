<script>
    import {
        defineComponent,
        watch
    } from 'vue'
    import SetupFormComponent from '@/api/SetupFormComponent'
    import UniqueID from '@/api/UniqueID'

    export default defineComponent({
        props: {
            modelValue: {
                type: String,
                default: ''
            },
            label: {
                type: String,
                default: null
            },
            error: {
                type: String,
                default: null
            },
            placeholder: {
                type: String,
                default: null
            },
            ariaDescribedby: {
                type: String,
                default: null
            },
            name: {
                type: String,
                default: null
            }
        },
        setup(props, context) {
            context.emit('update:modelValue', props.modelValue)
            const { updateValue } = SetupFormComponent(props, context)
            const uuid = UniqueID().getID()
            return {
                updateValue,
                uuid
            }
        },
    })
</script>


<template>
    <div>
        <label v-show="label" :for="uuid" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <div class="mt-1">
            <input @input="updateValue" :id="uuid" :value="modelValue" :aria-describedby="error ? `${uuid}-error` : null"
                :aria-invalid="error ? true : false" type="text" :name="name"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                :placeholder="placeholder">
        </div>
        <p v-show="error" class="mt-2 text-sm text-red-600" id="ariaDescribedby">{{ error }}</p>
    </div>
</template>
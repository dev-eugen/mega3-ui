

<script>
import { defineComponent } from 'vue'
import useVModel from '@/api/useVModel.js'

export default defineComponent({
    props: {
        value: {
            type: String,
            default: null
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
        id: {
            type: String,
            default: null
        },
        type: {
            type: String,
            default: 'text'
        },
        name: {
            type: String,
            default: null
        }
    },
    setup(props, {emit}) {
        return{
            ...useVModel(props, emit)
        }
    },
})
</script>


<template>
    <div>
        <label v-show="label" :for="id" class="block text-sm font-medium text-gray-700">{{ label }}</label>
        <div class="mt-1">
            <input v-model="data" :type="type" :name="name" :id="id" pattern="#[0-9A-Fa-f]{6}"
                class="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                :placeholder="placeholder" aria-describedby="ariaDescribedby">
        </div>
        <p v-show="error" class="mt-2 text-sm text-red-600" id="ariaDescribedby">{{ error }}</p>
    </div>
</template>
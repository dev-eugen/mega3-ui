<script setup="props">
    import {
        defineProps
    } from "vue";
    defineProps({
        justify: {
            type: String,
            default: "start",
        },
        noHead: {
            type: Boolean,
            default: false
        }
    });
</script>
<template>
    <!-- This example requires Tailwind CSS v2.0+ -->
    <div class="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div v-show="!noHead" :class="'px-4 py-5 sm:px-6 flex justify-' + justify">
            <slot name="head"></slot>
        </div>
        <div :class="'px-4 py-5 sm:p-6 flex justify-' + justify">
            <slot name="body"></slot>
            <!-- Content goes here -->
        </div>
    </div>
</template>
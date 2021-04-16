<template>
    <button type="button" 
        :class='` m-1 flex justify-center items-center w-${h} h-${h} border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-${color}-600 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`'>
      <component :class="`h-${size} w-${size}`" :is="icon" v-if="icon"></component>
    </button>
</template>

<script>
    import {
        defineProps,
        computed
    } from "vue";

    export default {
        props: {
            color: {
                type: String,
                default: "indigo",
            },
            icon: {
                type: String,
                default: null
            },
            size: {
                type: String,
                default: 'md'
            }
        },
        setup(props) {

            const size = computed(() => {
                return props.size === 'lg' ? 6 : props.size === 'md' ? 4 : 3
            })

            const h = computed(() => {
                return props.size === 'lg' ? 14 : props.size === 'md' ? 12 : 10
            })
            return { h }
        }
    }
</script>
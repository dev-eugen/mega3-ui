<template>
    <button type="button" 
        :class='` m-1 flex justify-center items-center px-${px} h-${h} border border-transparent font-medium rounded-${round} shadow-sm text-white bg-${color}-600 hover:bg-${color}-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-${color}-500`'>
      <component class="h-4 w-4 mr-2 -ml-1.5" :is="icon" v-if="icon"></component>
        <slot></slot>
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
            rounded: {
                type: Boolean,
                default: false
            },
            size: {
                type: String,
                default: 'md'
            }
        },
        setup(props) {
            const round = computed(() => {
                return props.rounded ? 'full' : 'md'
            })

            const font = computed(() => {
                return props.size === 'lg' ? '3xl' : props.size === 'md' ? 'lg' : 'sm'
            })

            const h = computed(() => {
                return props.size === 'lg' ? 11 : props.size === 'md' ? 10 : 8
            })

            const px = computed(() => {
                return props.size === 'lg' ? 8 : props.size === 'md' ? 6 : 3
            })

            return { round, px, h, font }
        }
    }
</script>
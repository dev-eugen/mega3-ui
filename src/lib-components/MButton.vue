<template>
    <button type="button" 
        :class='`inline-flex items-center px-${sz*2} py-${sz} border border-transparent text-base font-medium rounded-${round} shadow-sm text-white bg-green-light hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-light`'>
      <component class="-ml-0.5 mr-2 h-4 w-4" :is="icon" v-if="icon"></component>
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
                default: "primary",
            },
            icon: {
                type: String,
                default: null
            },
            rounded: {
                type: Boolean,
                default: false
            },
            noHead: {
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

            const sz = computed(() => {
                return props.size === 'lg' ? 3 : props.size === 'md' ? 2 : 1 
            })

            return { round,sz }
        }
    }
</script>
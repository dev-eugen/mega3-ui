<template>
    <button type="button"
        :class='`inline-flex items-center p-${sz} border border-transparent rounded-full shadow-sm text-white bg-green-light hover:bg-green-light focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-light`'>
      <component class="h-6 w-6" :is="icon" v-if="icon"></component>
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
                require: true
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
                return props.size === 'lg' ? 4 : props.size === 'md' ? 3 : 2
            })

            return {
                round,
                sz
            }
        }
    }
</script>
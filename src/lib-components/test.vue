<template>
    <m-input placeholder="example@com" id="name" v-model="name"></m-input>
    <m-input placeholder="example@com" id="name" v-model="surname"></m-input>
    {{ name }} {{ surname }}
</template>

<script>
import { watchEffect } from 'vue'
    export default {
        props: {
            name: {
                type: String,
                default: null
            },
            surname: {
                type: String,
                default: null
            }
        },
        setup(props, { emit }) {
            watchEffect(() => { emit('update:name', props.name), emit('update:surname', props.surname)})
            return {  }
        }
    }
</script>

<style lang="scss" scoped>

</style>
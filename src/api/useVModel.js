import { ref, watchEffect } from 'vue'

export default function useVModel(props, emit) {
    const data = ref(props.value)
    watchEffect(() => emit('input', data.value))
    return {
        data
    }
}
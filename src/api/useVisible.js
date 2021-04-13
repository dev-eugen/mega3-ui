import { ref } from 'vue'

export default function useVisible(){
    const visible = ref(false)

    const visibleFalse = () => visible.value = false
    const visibleTrue = () => visible.value = true

    return { visible, visibleFalse, visibleTrue }
}
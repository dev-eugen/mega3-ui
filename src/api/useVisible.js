import { ref } from 'vue'

export default function useVisible(){
    const visible = ref(false)

    return { visible }
}
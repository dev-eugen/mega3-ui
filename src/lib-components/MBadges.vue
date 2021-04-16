<template>
  <span :class='`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-${color}-100 text-indigo-800`'>
    <button class="h-1 w-2 bg-black rounded-full mr-1 " @click="$emit('delete') ">
      close
    </button>
    Small
  </span>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: "indigo",
      }
    }
  }
</script>
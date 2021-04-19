<template>
  <span :class='`inline-flex items-center px-${pdngx} py-${pdngy} rounded-${round} text-${txtsz} font-medium bg-${color}-200 text-indigo-800`'>
      

    <button :class='`bg-${color}-200 rounded-full mr-1 `' @click="$emit('delete') " >
     <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /> 
  </svg>
    </button>
    {{text}}
    
  </span>
</template>

<script>
  export default {
    props: {
      color: {
        type: String,
        default: "indigo",
      },
      round: {
          type: String,
          default: 'full'
      },
      text: {
          type: String,
          default: 'Small'
      },
      pdngx: {
          type: String,
          default: '2'
      },
      pdngy: {
          type: String,
          default: '0.5'
      },
      txtsz: {
          type: String,
          default: 'sm'
      },
      shower:{
          type: String,
          default: 'false'
      },

    }
  }
</script>
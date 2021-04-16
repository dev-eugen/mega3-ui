<template>
  <div>
    <span class="relative z-0 inline-flex shadow-sm">
      <button
        type="button"
        :class='`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-${round}`'
      >
        Years
      </button>
    </span>
  </div>
</template>

<script>
export default {
  props: {
    rounded: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const round = computed(() => {
      return props.rounded ? "r" : "";
    });
    return { round };
  },
};
</script>
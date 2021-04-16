<script>
import { defineProps, computed } from "vue";

export default {
  props: {
    color: {
      type: String,
      default: "indigo",
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
    },
    status: {
      type: String,
      default: "md",
    },
    img: {
      type: String,
      default:
        "https://images.unsplash.com/photo-1601592935678-406968278b1e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    },
  },
  setup(props) {
    const round = computed(() => {
      return props.rounded ? "full" : "md";
    });
    const sz = computed(() => {
      return props.size === "lg"
        ? 20
        : props.size === "md"
        ? 12
        : props.size === "sm"
        ? 8
        : 24;
    });

    const statussz = computed(() => {
      return props.status === "lg"
        ? 6
        : props.status === "md"
        ? 4
        : props.status === "sm"
        ? 3
        : 3;
    });

    return { round, sz, statussz };
  },
};
</script>


<template>
  <div>
    <span class="inline-block relative m-1">
      <img
        :class="`h-${sz} w-${sz}  rounded-${round}`"
        :src="`${img}`"
        alt=""
      />
      <span
        class="absolute bottom-1 right-1 transform translate-y-1/2 translate-x-1/2 block border-2 border-white rounded-full"
      >
        <span
          :class="`block h-${statussz} w-${statussz} rounded-full bg-${color}-600`"
        />
      </span>
    </span>
  </div>
</template>
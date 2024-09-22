<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    stroke-width="3"
    stroke="currentColor"
    :class="[
      'size-4 transition-transform duration-200',
      !isExpanded ? '-rotate-90' : '',
    ]"
  >
    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      d="m19.5 8.25-7.5 7.5-7.5-7.5"
    />
  </svg>
</template>

<script>
export default {
  name: "ChevronDownIcon",
  props: {
    isExpanded: {
      type: Boolean,
      required: true,
    },
  },
};
</script>

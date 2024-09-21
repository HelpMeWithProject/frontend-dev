<template>
  <li
    @dblclick="console.log('double-clicked')"
    class="hover:pl-2 mb-2 text-zinc-400 hover:text-zinc-200 hover:cursor-pointer select-none rounded-md focus:pl-2 transition-all duration-200"
  >
    {{ fileName }}
  </li>
</template>

<script>
export default {
  name: "FileBrowserItem",

  props: {
    fileName: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped></style>

<script setup>
import { fileBrowserStates } from "./fileBrowserStore.js";
</script>
<template>
  <li
    @dblclick="handleFileDoubleClick"
    :class="[
      'hover:pl-5 mb-2 pl-3 py-1 text-zinc-400 hover:text-zinc-200 hover:cursor-pointer select-none rounded-md focus:pl-5 transition-all duration-200',
      fileBrowserStates.selectedFile?.name === fileName
        ? 'bg-zinc-700 text-zinc-200'
        : '',
    ]"
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

  methods: {
    handleFileDoubleClick() {
      fileBrowserStates.selectFileByName(this.fileName);
    },
  },
};
</script>

<style scoped></style>

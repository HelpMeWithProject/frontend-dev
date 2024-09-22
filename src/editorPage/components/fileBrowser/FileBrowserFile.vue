<script setup>
import { fileBrowserStates } from "./fileBrowserStore.js";
</script>

<template>
  <div
    @dblclick="handleFileDoubleClick"
    :class="[
      'hover:pl-8  pl-6 py-1 text-zinc-400 hover:text-zinc-200 hover:cursor-pointer select-none rounded-md transition-all duration-200',
      fileBrowserStates.selectedFile?.name === fileName
        ? 'bg-zinc-700 text-zinc-200'
        : '',
    ]"
  >
    {{ fileName }}
  </div>
</template>

<script>
export default {
  name: "FileBrowserFile",

  props: {
    fileName: {
      type: String,
      required: true,
    },
  },

  data() {
    return {
      isExpanded: false,
    };
  },

  methods: {
    handleFileDoubleClick() {
      fileBrowserStates.selectFileByName(this.fileName);
    },
  },
};
</script>

<style lang="scss" scoped></style>

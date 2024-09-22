<script setup>
import { fileBrowserStates } from "./fileBrowserStore.js";
</script>

<template>
  <li
    :class="[
      ' py-1 text-zinc-400 select-none rounded-md transition-all duration-200',
    ]"
  >
    <FileBrowserFile v-if="!files" :fileName="fileName" />
    <FileBrowserFolder v-else :folderName="fileName" :files="files" />
  </li>
</template>

<script>
import FileBrowserFile from "./FileBrowserFile.vue";
import FileBrowserFolder from "./FileBrowserFolder.vue";

export default {
  name: "FileBrowserItem",

  components: {
    FileBrowserFolder,
    FileBrowserFile,
  },

  props: {
    fileName: {
      type: String,
      required: true,
    },

    files: {
      type: Array,
      required: false,
    },
  },
};
</script>

<style scoped></style>

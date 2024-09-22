<script setup></script>

<template>
  <div>
    <div
      @click="isExpanded = !isExpanded"
      class="flex items-center gap-2 mb-2 cursor-pointer"
    >
      <button>
        <ChevronDownIcon :isExpanded="isExpanded" />
      </button>
      {{ folderName }}
    </div>
    <ul v-show="isExpanded" class="ml-5">
      <li v-for="(file, index) in files">
        <FileBrowserFile :key="index" :fileName="file.name" class="mb-2">
        </FileBrowserFile>
      </li>
    </ul>
  </div>
</template>

<script>
import ChevronDownIcon from "./ChevronDownIcon.vue";
import FileBrowserFile from "./FileBrowserFile.vue";

export default {
  name: "FileBrowserFolder",

  components: {
    FileBrowserFile,
    ChevronDownIcon,
  },

  props: {
    folderName: {
      type: String,
      required: true,
    },

    files: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      isExpanded: false,
    };
  },
};
</script>

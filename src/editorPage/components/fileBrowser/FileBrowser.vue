<template>
  <div
    class="rounded-md bg-zinc-800 py-3 px-3 min-w-40 max-w-96 border border-zinc-700"
  >
    <!--! SEARCH -->
    <form
      @submit.prevent="createNewFile"
      class="flex items-center gap-4 bg-zinc-700 px-2 py-1 rounded-md focus-within:outline outline-offset-2 outline-2 stroke-zinc-400 focus-within:outline-purple-800 mb-4"
    >
      <label for="file-search-input">
        <MagnifyingGlassIcon></MagnifyingGlassIcon>
      </label>
      <input
        type="text"
        id="file-search-input"
        v-model="searchInput"
        class="bg-transparent focus:outline-none"
      />
    </form>

    <!--! FILE LIST -->
    <ul class="">
      <FileBrowserItem
        v-for="(file, index) in filteredFiles"
        :key="index"
        :fileName="file.name"
      />
    </ul>
  </div>
</template>

<script>
import FileBrowserItem from "./FileBrowserItem.vue";
import MagnifyingGlassIcon from "./MagnifyingGlassIcon.vue";

export default {
  name: "FileBrowser",

  components: {
    FileBrowserItem,
    MagnifyingGlassIcon,
  },

  computed: {
    filteredFiles() {
      return this.files.filter((file) =>
        file.name.toLowerCase().includes(this.searchInput.toLowerCase())
      );
    },
  },

  methods: {
    createNewFile() {
      console.log("New File Created");
    },
  },

  data() {
    return {
      searchInput: "",

      files: [
        { name: "index.html", type: "file" },
        { name: "about.html", type: "file" },
        { name: "contact.html", type: "file" },
        { name: "styles.css", type: "file" },
        { name: "app.js", type: "file" },
      ],
    };
  },
};
</script>

<style scoped></style>

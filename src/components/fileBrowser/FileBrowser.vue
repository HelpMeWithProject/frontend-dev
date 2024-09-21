<template>
  <div class="rounded-md bg-zinc-800 py-2 px-3 min-w-40 border border-zinc-700">
    <ul class="">
      <li
        v-for="(file, index) in files"
        :key="index"
        @dblclick="console.log('double-clicked')"
        class="hover:pl-2 mb-2 text-zinc-400 hover:text-zinc-200 hover:cursor-pointer select-none rounded-md focus:pl-2 transition-all duration-200"
      >
        {{ file.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "FileBrowser",
  data() {
    return {
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

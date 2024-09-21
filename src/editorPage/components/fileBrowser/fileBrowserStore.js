import { reactive } from "vue";

export const fileBrowserStates = reactive({
  files: [
    { name: "index.html", type: "file" },
    { name: "about.html", type: "file" },
    { name: "contact.html", type: "file" },
    { name: "styles.css", type: "file" },
    { name: "app.js", type: "file" },
  ],
  selectedFile: null,

  selectFileByName(fileName) {
    this.selectedFile = this.files.find((file) => file.name === fileName);
  },
});

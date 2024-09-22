import { reactive } from "vue";

export const fileBrowserStates = reactive({
  files: [
    { name: "index.html", type: "file" },
    { name: "about.html", type: "file" },
    { name: "contact.html", type: "file" },
    { name: "styles.css", type: "file" },
    {
      name: "javaScriptFiles",
      type: "folder",
      files: [
        { name: "index.js", type: "file" },
        { name: "about.js", type: "file" },
        { name: "contact.js", type: "file" },
      ],
    },
  ],

  selectedFile: null,

  selectFileByName(fileName) {
    this.selectedFile = this.getFileByName(fileName);
  },

  getFileByName(fileName) {
    let fileFound = false;
    fileFound = this.files.find((file) => file.name === fileName);

    // if file is not found in the general folder, search in the subfolders
    if (!fileFound) {
      this.files.forEach((file) => {
        if (file.type === "folder") {
          fileFound = file.files.find((subFile) => subFile.name === fileName);
        }
      });
    }
    return fileFound;
  },
});

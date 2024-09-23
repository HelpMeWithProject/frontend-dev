"use strict";
import { reactive } from "vue";

export const codeEditorStates = reactive({
  editorRef: null,
  code: null,

  setEditorRef(ref) {
    this.editorRef = ref;
  },
});

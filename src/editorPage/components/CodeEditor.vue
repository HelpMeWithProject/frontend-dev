<script setup>
import { codeEditorStates } from "./codeEditorStore.js";
</script>
<template>
  <div class="w-full h-80">
    <vue-monaco-editor
      v-model:value="codeEditorStates.code"
      theme="vs-dark"
      :defaultValue="initialEditorValue"
      :language="editorLanguage"
      :options="editorOptions"
      @mount="handleEditorMount"
    />
  </div>
</template>

<script>
import { VueMonacoEditor } from "@guolao/vue-monaco-editor";

export default {
  name: "CodeEditor",

  props: {
    editorLanguage: {
      type: String,
      required: true,
    },

    initialEditorValue: {
      type: String,
      required: true,
    },

    editorWebSocketInstance: {
      type: Object,
      required: true,
    },
  },

  components: {
    VueMonacoEditor,
  },

  methods: {
    handleEditorMount(editor) {
      codeEditorStates.setEditorRef(editor);
      console.log("Editor mounted");
      this.editorWebSocketInstance.setupEditorSendMessage();
    },
  },

  data() {
    return {
      editorOptions: {
        automaticLayout: true,
        formatOnType: true,
        formatOnPaste: true,
      },
    };
  },
};
</script>

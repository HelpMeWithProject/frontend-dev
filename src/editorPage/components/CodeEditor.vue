<script setup>
import EditorWebSocket from "../utils/editorWebSocketClass.js";
</script>
<template>
  <div class="w-full h-80">
    <vue-monaco-editor
      v-model:value="code"
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
// import { WebSocketInstance } from "@/utils/websockets/editorSocket.js";

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
  },

  components: {
    VueMonacoEditor,
  },

  methods: {
    handleEditorMount(editor) {
      this.editorRef = editor;
      console.log("Editor mounted");
    },
  },

  data() {
    return {
      editorOptions: {
        automaticLayout: true,
        formatOnType: true,
        formatOnPaste: true,
      },

      code: "",

      editorRef: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>

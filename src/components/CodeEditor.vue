<template>
  <div class="w-full h-80">
    <vue-monaco-editor
      v-model:value="code"
      theme="vs-dark"
      :language="editorLanguage"
      :options="editorOptions"
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
      default: "javascript",
      required: true,
    },
  },

  components: {
    VueMonacoEditor,
  },

  methods: {},

  data() {
    return {
      editorOptions: {
        automaticLayout: true,
        formatOnType: true,
        formatOnPaste: true,
      },

      code: 'console.log("Hello, World!")',
    };
  },
};
</script>

<style lang="scss" scoped></style>

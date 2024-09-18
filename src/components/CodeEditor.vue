<template>
  <div class="w-full h-80">
    <vue-monaco-editor
      v-model:value="code"
      theme="vs-dark"
      :language="editorLanguage"
      :options="editorOptions"
      @mount="handleEditorMount"
    />
  </div>
</template>

<script>
import { VueMonacoEditor } from "@guolao/vue-monaco-editor";
import { WebSocketInstance } from "@/utils/websockets/editorSocket.js";

export default {
  name: "CodeEditor",

  props: {
    editorLanguage: {
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
      let onMessage = function (event) {
        let message = JSON.parse(event.data);
        if (message.clientId !== webSocket.clientId) {
          this.applyingRemoteChange = true;
          try {
            editor.executeEdits("remote", [
              {
                range: new monaco.Range(
                  message.change.range.startLineNumber,
                  message.change.range.startColumn,
                  message.change.range.endLineNumber,
                  message.change.range.endColumn
                ),
                text: message.change.text,
              },
            ]);
            this.applyingRemoteChange = false;
          } catch (error) {
            console.log(error);
          }
        }
      };

      let webSocket = new WebSocketInstance(onMessage);

      this.editorRef.onDidChangeModelContent((event) => {
        if (!webSocket.applyingRemoteChange) {
          let change = event.changes[0];
          webSocket.send(
            JSON.stringify({
              change: {
                range: change.range,
                text: change.text,
              },
            })
          );
        }
      });
    },
  },

  data() {
    return {
      editorOptions: {
        automaticLayout: true,
        formatOnType: true,
        formatOnPaste: true,
      },

      code: 'console.log("Hello, World!")',

      editorRef: null,
    };
  },
};
</script>

<style lang="scss" scoped></style>

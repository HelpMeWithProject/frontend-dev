<script setup>
import { editorLanguageSelectorStore } from "@/editorPage/components/languageSelector/store/editorLanguageSelectorStore.js";
</script>
<template>
  <div class="bg-zinc-900 text-zinc-100 min-h-screen p-4">
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-16"
    >
      EditorPage
    </h1>

    <LanguageSelector class="mb-4"></LanguageSelector>
    <FileBrowser class=""></FileBrowser>
    <CodeEditor
      v-if="editorInitialContent"
      class=""
      :initialEditorValue="editorInitialContent"
      :editorLanguage="editorLanguageSelectorStore.currentLanguageValue"
    ></CodeEditor>
  </div>
</template>

<script>
import CodeEditor from "./components/CodeEditor.vue";
import FileBrowser from "@/editorPage/components/fileBrowser/FileBrowser.vue";
import LanguageSelector from "@/editorPage/components/languageSelector/LanguageSelector.vue";
import EditorWebSocket from "./utils/editorWebSocketClass.js";

export default {
  name: "EditorPageView",
  components: {
    CodeEditor,
    LanguageSelector,
    FileBrowser,
  },

  created() {
    this.editorWebSocketInstance = new EditorWebSocket();
    setTimeout(() => {
      this.editorInitialContent =
        this.editorWebSocketInstance.getInitialEditorContent();
    }, 2000);
  },
  data() {
    return {
      editorWebSocketInstance: null,
      editorInitialContent: null,
    };
  },
};
</script>

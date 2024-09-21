<template>
  <div class="bg-zinc-900 text-zinc-100 min-h-screen p-4">
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-16"
    >
      EditorPage
    </h1>

    <LanguageSelector class="mb-4"></LanguageSelector>
    <FileBrowser class=""></FileBrowser>
    <!-- <CodeEditor
    class=""
    :editorLanguage="editorLanguageSelectorStore.currentLanguageValue"
  ></CodeEditor> -->
  </div>
</template>

<script>
// import CodeEditor from "@/components/CodeEditor.vue";
import FileBrowser from "@/editorPage/components/fileBrowser/FileBrowser.vue";
import LanguageSelector from "@/editorPage/components/languageSelector/LanguageSelector.vue";
// import { editorLanguageSelectorStore } from "@/components/languageSelector/store/editorLanguageSelectorStore.js";

export default {
  name: "EditorPageView",
  components: {
    //     CodeEditor,
    LanguageSelector,
    FileBrowser,
  },
};
</script>

<style scoped></style>

<template>
  <h1
    class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-16"
  >
    Monaco Editor Test
  </h1>
  aSDAdasd
  <!-- <LanguageSelector class="mb-4"></LanguageSelector>
  <FileBrowser class=""></FileBrowser> -->
  <!-- <CodeEditor
    class=""
    :editorLanguage="editorLanguageSelectorStore.currentLanguageValue"
  ></CodeEditor> -->
</template>

<script>
// import CodeEditor from "@/components/CodeEditor.vue";
import FileBrowser from "@/components/fileBrowser/FileBrowser.vue";
import LanguageSelector from "@/components/LanguageSelector/LanguageSelector.vue";
// import { editorLanguageSelectorStore } from "@/components/languageSelector/store/editorLanguageSelectorStore.js";

export default {
  name: "EditorPageView",
  //   components: {
  //     CodeEditor,
  //     LanguageSelector,
  //     FileBrowser,
  //   },
};
</script>

<style scoped></style>

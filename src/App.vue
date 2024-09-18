<script setup>
import { editorLanguageSelectorStore } from "@/components/languageSelector/store/editorLanguageSelectorStore.js";
</script>

<template>
  <div
    class="flex flex-col justify-center items-center h-screen bg-zinc-900 text-zinc-100"
  >
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-16"
    >
      Monaco Editor Test
    </h1>
    <LanguageSelector class="mb-4"></LanguageSelector>
    <div class="flex gap-8 mb-8">
      <FileBrowser class=""></FileBrowser>
      <div class="min-w-[32rem] bg-[#1e1e1e] pt-8 pb-4 rounded-lg">
        <CodeEditor
          class=""
          :editorLanguage="editorLanguageSelectorStore.currentLanguageValue"
        ></CodeEditor>
      </div>
    </div>
    <button
      class="border-2 border-purple-500 px-4 py-2 rounded-md hover:bg-purple-500 transition-all duration-300"
    >
      Test Button
    </button>
  </div>
</template>
<script>
import CodeEditor from "@/components/CodeEditor.vue";
import LanguageSelector from "@/components/languageSelector/LanguageSelector.vue";
import FileBrowser from "@/components/fileBrowser/FileBrowser.vue";
export default {
  components: {
    CodeEditor,
    LanguageSelector,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

*,
body {
  font-family: "Poppins", sans-serif;
}
</style>

<script setup lang="js">
import { editorLanguageOptions, editorLanguageSelectorStore } from "@/components/languageSelector/store/editorLanguageSelectorStore.js";
</script>
<template>
  <div
    class="flex bg-zinc-800 rounded-md p-[0.36rem] gap-3 border-zinc-700 border"
  >
    <LanguageSelectorButton
      v-for="languageOption in editorLanguageOptions"
      :key="languageOption.value"
      :languageOption="languageOption"
      :isActive="
        editorLanguageSelectorStore.selectedLanguage.value ===
        languageOption.value
      "
      @languageChange="
        editorLanguageSelectorStore.changeSelectedLanguage(languageOption)
      "
    />
  </div>
</template>

<script lang="js">
import LanguageSelectorButton from "@/components/languageSelector/LanguageSelectorButton.vue";

export default {
  name: "LanguageSelector",
  components: {
    LanguageSelectorButton,
  },
};
</script>

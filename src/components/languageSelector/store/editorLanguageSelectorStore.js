import { reactive } from "vue";

export const editorLanguageSelectorStore = reactive({
  selectedLanguage: { label: "JavaScript", value: "javascript" },

  get currentLanguageValue() {
    return this.selectedLanguage.value;
  },
  changeSelectedLanguage(language) {
    this.selectedLanguage = language;
  },
});

export const editorLanguageOptions = [
  { label: "HTML", value: "html" },
  { label: "CSS", value: "css" },
  { label: "JavaScript", value: "javascript" },
];

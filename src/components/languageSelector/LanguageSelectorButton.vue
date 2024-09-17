<template>
  <button
    :class="[
      'py-2 px-3 rounded-lg text-zinc-100 tracking-wide transition-all duration-300',
      isActive ? ' bg-purple-600' : '',
    ]"
    @click="handleButtonClick()"
  >
    {{ languageOption.label }}
  </button>
</template>

<script>
export default {
  name: "LanguageSelectorButton",

  props: {
    languageOption: {
      type: Object,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    handleButtonClick() {
      // Emit that the user changed language
      this.$emit("languageChange", this.languageOption.value);
    },
  },
};
</script>

<style lang="scss" scoped></style>

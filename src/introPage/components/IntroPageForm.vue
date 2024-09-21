<template>
  <form
    @submit.prevent="handleFormSubmission"
    class="flex flex-col gap-4 max-w-96"
  >
    <div>
      <!-- <label for="name-input" class="text-lg mb-1 block text-zinc-400"
        >Your name</label
      > -->
      <input
        tabindex="1"
        id="name-input"
        class="border text-lg border-zinc-600 px-4 p-2 rounded-md bg-zinc-700 purple-border-focus"
        type="text"
        required
        placeholder="Your name"
        v-model="name"
      />
    </div>
    <button
      tabindex="2"
      submit
      class="px-4 font-medium py-2 border-purple-600 hover:bg-purple-700 transition-colors duration-300 text-lg flex justify-center bg-purple-600 rounded-md border purple-border-focus"
    >
      Join session
    </button>
  </form>
</template>

<script>
import { user } from "@/store/userStore.js";

export default {
  name: "IntroPageForm",

  methods: {
    handleFormSubmission() {
      user.setName(this.name);
      this.$router.push("/editor");
    },
  },

  data() {
    return {
      name: "",
    };
  },
};
</script>

<template>
  <form
    @submit.prevent="handleFormSubmission"
    class="flex flex-col gap-4 max-w-96"
  >
    <input
      class="border text-lg border-zinc-600 px-4 p-2 rounded-md bg-zinc-700 focus:outline-purple-700 focus:outline-none"
      type="text"
      required
      placeholder="Your name"
      v-model="name"
    />

    <button
      submit
      class="px-4 font-medium py-2 border-purple-600 hover:bg-purple-700 transition-all duration-300 text-lg flex justify-center bg-purple-600 rounded-md border"
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

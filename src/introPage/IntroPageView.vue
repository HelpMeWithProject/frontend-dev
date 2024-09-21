<template>
  <div class="flex w-full items-stretch content-stretch h-screen">
    <div
      class="p-8 flex items-center justify-center bg-zinc-800 text-white w-3/5"
    >
      <div class="">
        <h1 class="text-6xl text-center mb-8 font-bold">Intro Page</h1>
        <IntroPageForm />
      </div>
    </div>
    <div class="bg-gradient-to-tr from-purple-600 to-blue-500 w-2/5">
      &nbsp;
    </div>
  </div>
</template>

<script>
import IntroPageForm from "@/introPage/components/IntroPageForm.vue";

export default {
  name: "IntroPageView",

  components: {
    IntroPageForm,
  },
};
</script>

<style scoped></style>

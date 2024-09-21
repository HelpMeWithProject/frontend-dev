<template>
  <h1>Intro Page</h1>
  <form @submit.prevent="console.log('form submitted')">
    <input type="text" placeholder="Your name" />
  </form>
</template>

<script>
export default {
  name: "IntroPageView",
};
</script>

<style scoped></style>

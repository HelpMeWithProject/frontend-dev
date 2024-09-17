<script setup>
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
</script>

<template>
  <div class="flex flex-col justify-center items-center h-screen">
    <h1
      class="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-16"
    >
      Monaco Editor Test
    </h1>
    <div class="w-1/2 bg-[#1e1e1e] pt-8 pb-4 rounded-lg mb-8">
      <div class="border-t-sky-50 border-t">
        <CodeEditor class="mb-4" :editorLanguage="editorLanguage"></CodeEditor>
      </div>
    </div>
    <Button>Test Button</Button>
  </div>
</template>
<script>
import CodeEditor from "@/components/CodeEditor.vue";
import Button from "@/components/ui/button/Button.vue";

export default {
  data() {
    return {
      editorLanguage: "javascript",
      editorLangOptions: ["javascript", "html", "css"],
    };
  },

  components: {
    CodeEditor,
    Button,
    // Select,
    // SelectContent,
    // SelectGroup,
    // SelectItem,
    // SelectLabel,
    // SelectTrigger,
    // SelectValue,
  },
};
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

*,
body {
  font-family: "Poppins", sans-serif;
}
</style>

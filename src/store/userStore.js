import { reactive } from "vue";

export const user = reactive({
  name: null,
  setName(name) {
    this.name = name.replace(" ", "-").toLowerCase();
  },
});

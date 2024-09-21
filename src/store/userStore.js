import { reactive } from "vue";

export const user = reactive({
  name: null,

  // Edit name to make it server friendly and look a little techy
  setName(name) {
    this.name = name.replace(" ", "-").toLowerCase();
  },
});

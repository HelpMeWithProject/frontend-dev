import { reactive } from "vue";

export const user = reactive({
  name: null,
  id: null,
  // Edit name to make it server friendly and look a little techy
  setName(name) {
    this.name = name.replace(" ", "-").toLowerCase();
  },

  generateId() {
    this.id = "client_" + Math.random().toString(36).substr(2, 9);
  },
});

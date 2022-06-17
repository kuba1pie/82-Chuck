import { defineStore } from "pinia";
export const useChuckStore = defineStore("ChuckStore", {
  state: () => ({
    categories: [] as string[],
    loading: false,
    modal: false,
    jokeValue: "",
  }),
  actions: {
    async fetchCategories() {
      this.categories = [];
      this.loading = true;
      try {
        this.categories = await fetch(
          "https://api.chucknorris.io/jokes/categories"
        ).then((response) => response.json());
      } catch (error) {
        console.error("There was an error!", error);
      } finally {
        this.loading = false;
      }
    },
  },
});

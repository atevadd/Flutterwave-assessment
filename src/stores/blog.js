import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

export const useBlogStore = defineStore("blog", () => {
  // get all blog post
  async function getBlogPost() {
    try {
      const response = await axios.get("/posts");
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }

  return { getBlogPost };
});

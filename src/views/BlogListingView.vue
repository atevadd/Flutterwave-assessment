<template>
  <main class="skeleton-loader" v-if="isLoading">
    <SkelentonCard v-for="card in 6" />
  </main>
  <main class="list" v-else>
    <CardLarge class="spread" />
    <CardMini v-for="card in 6" :key="card" />
  </main>
  <main class="error" v-if="isError">There is error</main>
</template>

<script setup>
import CardLarge from "../components/CardLarge.vue";
import CardMini from "../components/CardMini.vue";
import SkelentonCard from "../components/SkelentonCard.vue";
import { useBlogStore } from "../stores/blog";
import { useQuery } from "vue-query";

// blog store
const blog = useBlogStore();

const usePostQuery = () => {
  return useQuery("posts", blog.getBlogPost);
};

const { isLoading, isError, data, error } = usePostQuery();
console.log(data);
</script>

<style lang="scss" scoped>
@import "../scss/pages/bloglist";
</style>

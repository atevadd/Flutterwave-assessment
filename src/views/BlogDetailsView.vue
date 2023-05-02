<template>
  <main class="blog">
    <h4 class="blog__meta">
      <span
        >By {{ blog?.currentBlog[0].parselyMeta["parsely-author"][0] }}</span
      >
      {{ moment(blog?.currentBlog[0]?.time).startOf("hour").fromNow() }}
    </h4>
    <h1 class="blog__title">
      <span v-html="blog?.currentBlog[0]?.title?.rendered"></span>
    </h1>
    <div
      class="blog__content"
      v-html="blog?.currentBlog[0]?.content?.rendered"
    ></div>
  </main>

  <aside class="more">
    <header class="more__header">
      <h2>More Articles</h2>
    </header>

    <section class="more__grid">
      <CardMini
        v-for="blog in data?.slice(1, 4)"
        :key="blog"
        :title="blog?.title?.rendered"
        :img="blog.jetpack_featured_media_url"
        :category="blog?.primary_category?.name"
        :time="blog?.date"
        :slug="blog?.slug"
        :summary="blog?.excerpt?.rendered"
      />
    </section>
  </aside>
</template>

<script setup>
import CardMini from "../components/CardMini.vue";
// import { useBlogStore } from "../stores/blog";
import { useQueryClient } from "vue-query";
import { useRoute } from "vue-router";
import moment from "moment";
import { watch } from "vue";

import { useBlogStore } from "../stores/blog";
import { useQuery } from "vue-query";
import { useFlutterwave } from "flutterwave-vue3";

// blog store
const blog = useBlogStore();

// Vue Query
const usePostQuery = () => {
  return useQuery("posts", blog.getBlogPost, {
    staleTime: 60000,
    retry: 4,
  });
};

const { isLoading, isError, data, error } = usePostQuery();

// route oject
const route = useRoute();
// blog store
// const blog = useBlogStore();

// const query = useQueryClient();

// const posts = query.getQueryData("posts");

blog.currentBlog = data.value?.filter((post) => {
  return post.slug == route.params.slug;
});

// Watch the route slug for changes
watch(
  () => route.params.slug,
  (newValue, oldValue) => {
    console.log(newValue);
    blog.currentBlog = data.value?.filter((post) => {
      return post.slug == route.params.slug;
    });
  }
);
</script>

<style lang="scss">
@import "../scss/pages/blogdetail";
</style>

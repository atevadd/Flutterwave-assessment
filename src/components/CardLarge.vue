<template>
  <article class="card">
    <figure class="card__img">
      <img :src="img" alt="" loading="lazy" />
      <figcaption>{{ title }}</figcaption>
    </figure>

    <section class="card__details">
      <header>
        <p class="card__details--meta">
          <span class="card__details--cat">{{ category }}</span>
          <span class="card__details--seperator">&bull;</span>
          <span class="card__details--time">{{
            moment(time).startOf("hour").fromNow()
          }}</span>
        </p>

        <h3 class="card__details--title">
          <router-link
            :to="{ name: 'blog-detail', params: { slug: slug } }"
            :title="title"
          >
            <span v-html="title"></span
          ></router-link>
        </h3>
      </header>
      <p class="card__details--preview" v-html="summary"></p>
      <div class="card__details--footer">
        <span class="card__details--read-time">3 min read</span>
        <router-link
          :to="{ name: 'blog-detail', params: { slug: slug } }"
          class="card__details--cta"
          >Read full <i class="ri-arrow-right-line"></i
        ></router-link>
      </div>
    </section>
  </article>
</template>

<script setup>
import moment from "moment";
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  summary: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
@import "../scss/components/cardlarge";
</style>

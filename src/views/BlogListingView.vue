<template>
  <main class="skeleton-loader" v-if="isLoading">
    <SkelentonCard v-for="card in 6" />
  </main>
  <main class="list" v-else>
    <CardLarge
      class="spread"
      v-for="blog in data?.slice(0, 1)"
      :key="blog"
      :title="blog?.title?.rendered"
      :img="blog.jetpack_featured_media_url"
      :category="blog?.primary_category?.name"
      :time="blog?.date"
      :slug="blog?.slug"
      :summary="blog?.excerpt?.rendered"
    />
    <CardMini
      v-for="blog in data?.slice(1, 10)"
      :key="blog"
      :title="blog?.title?.rendered"
      :img="blog.jetpack_featured_media_url"
      :category="blog?.primary_category?.name"
      :time="blog?.date"
      :slug="blog?.slug"
      :summary="blog?.excerpt?.rendered"
    />
  </main>
  <aside class="join">
    <h2 class="join__headline">Join our Team of Writers</h2>
    <p class="join__subtitle">
      On dasdas, writers earn a living doing what they love.
    </p>
    <p class="join__subtitle">
      Getting started is easy. Just pay a one time $25 fee and everything is
      ready to go.
    </p>
    <button class="join__cta" aria-label="join us" @click="makePayment">
      Join us
    </button>
  </aside>
</template>

<script setup>
import CardLarge from "../components/CardLarge.vue";
import CardMini from "../components/CardMini.vue";
import SkelentonCard from "../components/SkelentonCard.vue";
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

// Flutterwave Config
const apiKey = import.meta.env.VITE_FLUTTERWAVE_PK;

const makePayment = () => {
  FlutterwaveCheckout({
    public_key: apiKey,
    tx_ref: "titanic-48981487343MDI0NzMx",
    amount: 54600,
    currency: "NGN",
    payment_options: "card",
    redirect_url: "https://glaciers.titanic.com/handle-flutterwave-payment",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "adeniyitofunmi@gmail.com",
      phone_number: "08102909304",
      name: "Tofunmi Adeniyi",
    },
    customizations: {
      title: "The Titanic Store",
      description: "Payment for an awesome cruise",
      logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
    },
  });
};
</script>

<style lang="scss" scoped>
@import "../scss/pages/bloglist";
</style>

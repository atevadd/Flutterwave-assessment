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
  //this will launch Fluterwave payment modal
  useFlutterwave({
    amount: 4000, //amount
    callback(data) {
      //  TODO: handle callbacks
      console.log("success");
    },
    country: "NG",
    currency: "NGN",
    customer: {
      email: "adeniyitofunmi@gmail.com",
      name: "adewale",
      phone_number: "+2347086967055",
    },
    customizations: {
      description: "Pay with yourCompanyname",
      logo: "",
      title: "YourCompany",
    },
    meta: {
      user_id: 1,
      token: "jdjdjdjdjd",
    },
    onclose() {
      console.log("window closed");
    },
    payment_options: "card",
    public_key: apiKey,
    redirect_url: undefined,
    tx_ref: "tx_ref_herer_h92hjyj3",
  });
};
</script>

<style lang="scss" scoped>
@import "../scss/pages/bloglist";
</style>

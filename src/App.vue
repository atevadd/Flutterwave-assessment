<script setup>
import { RouterLink, RouterView } from "vue-router";
import AppNavbar from "./components/AppNavbar.vue";
</script>

<template>
  <AppNavbar />
  <div class="container">
    <RouterView />
  </div>
</template>

<style lang="scss">
body {
  color: $black-20;
}
.container {
  width: 90%;
  margin-inline: auto;

  @include md {
    width: 90%;
  }
  @include lg {
    width: 85%;
  }
}
</style>

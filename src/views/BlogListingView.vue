<template>
  <main class="grid">
    <CardLarge class="spread" />
    <CardMini v-for="card in 6" :key="card" />
  </main>
</template>

<script setup>
import CardLarge from "../components/CardLarge.vue";
import CardMini from "../components/CardMini.vue";
</script>

<style lang="scss" scoped>
@import "../scss/pages/bloglist";
</style>

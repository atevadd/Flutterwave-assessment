<template>
  <!-- App navbar -->
  <header class="nav">
    <div class="container">
      <router-link to="/" class="nav__logo">
        <img src="@/assets/images/Dasdas-logo.png" alt="logo" />
      </router-link>

      <nav class="nav__links">
        <router-link to="/about" class="nav__link"
          ><img src="@/assets/icon/twitter.svg" alt="twitter"
        /></router-link>
        <span class="nav__link--seperator">&bull;</span>
        <router-link to="/about" class="nav__link"
          ><img src="@/assets/icon/dribbble.svg" alt="dribbble"
        /></router-link>
        <span class="nav__link--seperator">&bull;</span>
        <router-link to="/about" class="nav__link"
          ><img src="@/assets/icon/figma.svg" alt="figma"
        /></router-link>
        <span class="nav__link--seperator">&bull;</span>
        <router-link to="/about" class="nav__link"
          ><img src="@/assets/icon/github.svg" alt="github"
        /></router-link>
      </nav>
    </div>
  </header>
  <!-- App navbar -->
</template>
<script setup></script>

<style lang="scss" scoped>
@import "../scss/components/appnavbar";
</style>

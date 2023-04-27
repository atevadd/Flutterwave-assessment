<template>
  <article class="card">
    <figure class="card__img">
      <img src="@/assets/images/large.png" width="auto" height="auto" alt="" />
      <figcaption>Optimize your website</figcaption>
    </figure>

    <section class="card__details">
      <header>
        <p class="card__details--meta">
          <span class="card__details--cat">Front-end</span>
          <span class="card__details--seperator">&bull;</span>
          <span class="card__details--time">1 Hour Ago</span>
        </p>
        <h3 class="card__details--title">
          <router-link to="/">
            Optimizing CSS for faster page loads</router-link
          >
        </h3>
      </header>
      <p class="card__details--preview">
        Not long ago I decided to improve the loading times of my website. It
        already loads pretty fast, but I knew there was still room for
        improvement and one of them was CSS loading. I will walk you through the
        process and show you how you can improve your load times as well. To see
        how CSS affects the load time of a webpage we first have to know how the
        browser converts an HTML document into a functional webpage...
      </p>
      <div class="card__details--footer">
        <span class="card__details--read-time">3 min read</span>
        <router-link to="/" class="card__details--cta"
          >Read full <i class="ri-arrow-right-line"></i
        ></router-link>
      </div>
    </section>
  </article>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "../scss/components/cardmini";
</style>

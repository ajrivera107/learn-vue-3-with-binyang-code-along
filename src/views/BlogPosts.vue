<template>
  <div class="blog-posts-layout">
    <aside class="blog-post-list">
      <BlogPostList> </BlogPostList>
    </aside>
    <main class="blog-post-content-with-sidebar">
      <router-view class="blog-post-content" v-slot="{ Component }"></router-view>
      <transition mode="out-in" enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut">
        <component :is="Component" :key="route.path"></component>
      </transition>

      <router-view name="sidebar"></router-view>
    </main>
  </div>
</template>

<script setup>
import BlogPostList from "@/components/BlogPostList.vue";
</script>

<style lang="scss" scoped>
.blog-post-layout {
  display: flex;
  width: 100%;
  gap: 1rem;
  .blog-post-list {
    flex: 0 0 25%;
  }
  .blog-post-content-with-sidebar {
    display: flex;
    flex: 0 0 75%;

    .blog-post-content {
      flex: 1;
    }
  }
}

</style>

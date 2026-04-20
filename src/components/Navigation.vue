<template>
  <nav>
    <router-link
      v-for="route in navigableRoutes"
      :key="route.path"
      :to="route.name"
    >
      {{ route.meta.title }}
    </router-link>
  </nav>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

const navigableRoutes = router
  .getRoutes()
  .filter((route) => route.meta.isNavLink);
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: center;
  gap: 2rem;
  padding: 1.5rem;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  a {
    padding: 0.5rem;
  }

  .router-link-active {
    background-color: #007bff;
    color: #fff;
    border-color: #0056b3;
    border-radius: 6px;
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
    transform: translate(-2px);
  }
}
</style>

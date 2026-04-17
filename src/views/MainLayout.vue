<template>
  <div class="main-layout">
    <Navigation></Navigation>
    <!-- <router-view></router-view> -->
     <router-view v-slot="{ Component, route }">
        <transition mode="out-in"
        :enter-active-class="route.meta.enterAnimation"
        :leave-active-class="route.meta.leaveAnimation">
            <component :is="Component" />
        </transition>
     </router-view>
  </div>
</template>

<script setup>
import Navigation from '@/components/Navigation.vue'

</script>

<style lang="scss" scoped>
.main-layout {
  display:flex;
  flex-direction: column;
  gap: 1rem;

  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active  {
    transition: opacity 1s ease;
  }
}
</style>
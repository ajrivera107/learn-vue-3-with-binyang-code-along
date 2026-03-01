<template>
  <div style="background-color: aqua; padding:10px; margin: 20px">
    <h2>This is the Component1 component</h2>
  </div>
</template>

<script setup>
import { watch, onBeforeMount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, onBeforeUnmount } from 'vue'

console.log('Component1 is setup.')

onBeforeMount(() => {
  console.log('Component1 is before mount')
}) 

onMounted(() => {
  console.log('Component1 is mounted.')
})

onBeforeUpdate(() =>{
  console.log('Component is before update.')
})

onUpdated(() => {
  console.log('Component1 is updated.')
})

onBeforeUnmount(() => {
  console.log('Component1 is before unmount.')
})

onUnmounted(() => {
  console.log('Component1 is unmounted.')
})

watch(number, () => {
  console.log('Number changes')
})

</script>

<style scoped>
.card{
  background-color: purple;
  color:white;
  padding: 20px 10px;
  margin-bottom: 10px;
}
</style>
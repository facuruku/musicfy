<template>
  <main class="bg-gradient">
    <div class="flex flex-col gap-5 justify-center items-center pt-32">
      <h1>Melody not found</h1>
      <h4>We didn't found the page you are looking for</h4>
      <RouterLink :to="{ name: 'home' }">Take me home! <i v-icon="'house'"></i></RouterLink>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Error404'
}
</script>

<style scoped>
a {
  text-decoration: underline;
}
</style>

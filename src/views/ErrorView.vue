import { RouterLink } from 'vue-router';
<template>
  <main class="view-gradient">
    <h1>Melody not found</h1>
    <h4>We didn't found the page you are looking for</h4>

    <RouterLink :to="{ name: 'home' }">Take me home!</RouterLink>
  </main>
</template>

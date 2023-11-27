<template>
  <main class="view-gradient">
    <article class="pt-40 text-white text-center font-circular-thin">
      <h1 class="">About musicfy</h1>
      <h4>This application is for educational purposes only</h4>
      <h6>
        To see the real Spotify visit
        <a class="underline" href="https://www.spotify.com">www.spotify.com</a>
      </h6>
    </article>

    <AppPlayer />
  </main>
</template>
<!-- TODO Create short description of all functionalities and technologies used for this project -->

<script>
import AppPlayer from '@/components/AppPlayer.vue'

export default {
  name: 'About',
  components: { AppPlayer }
}
</script>

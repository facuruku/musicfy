<template>
  <main class="relative z-10 pt-40 text-white text-center font-circular-thin">
    <h1 class="">About musicfy</h1>
    <h4>This application is for educational purposes only</h4>
    <h6>To see the real Spotify visit www.spotify.com</h6>
  </main>

  <AppPlayer />
</template>

<script>
import AppPlayer from '@/components/AppPlayer.vue'

export default {
  name: 'AboutView',
  components: { AppPlayer }
}
</script>

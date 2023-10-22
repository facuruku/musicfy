<template>
  <section class="bg-gradient-to-t from-zinc-900 from-60% to-[#4a368e] to-90%">
    <AppPlaylist />

    <AppPlayer />
  </section>
</template>

<script>
import AppPlaylist from '@/components/AppPlaylist.vue'
import AppPlayer from '@/components/AppPlayer.vue'

export default {
  components: { AppPlaylist, AppPlayer }
}
</script>

<template>
  <section class="bg-gradient-to-t from-zinc-900 from-70% to-[#5038a0] to-90%">
    <AppPlaylistHeader />

    <AppPlaylist />

    <AppPlayer />
  </section>
</template>

<script>
import AppPlaylistHeader from '@/components/AppPlaylistHeader.vue'
import AppPlaylist from '@/components/AppPlaylist.vue'
import AppPlayer from '@/components/AppPlayer.vue'

export default {
  components: { AppPlaylistHeader, AppPlaylist, AppPlayer }
}
</script>

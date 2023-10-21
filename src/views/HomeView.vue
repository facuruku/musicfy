<template>
  <AppPlaylistHeader />

  <AppPlaylist />

  <AppPlayer />
</template>

<script>
import AppPlaylistHeader from '@/components/AppPlaylistHeader.vue'
import AppPlaylist from '@/components/AppPlaylist.vue'
import AppPlayer from '@/components/AppPlayer.vue'

export default {
  components: { AppPlaylistHeader, AppPlaylist, AppPlayer }
}
</script>

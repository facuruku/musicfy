<template>
  <AppHeader />

  <AppPlaylistHeader />

  <AppPlaylist />

  <AppPlayer />

  <AppAuth />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppAuth from '@/components/AppAuth.vue'
import AppPlayer from '@/components/AppPlayer.vue'
import AppPlaylist from '@/components/AppPlaylist.vue'
import AppPlaylistHeader from '@/components/AppPlaylistHeader.vue'

export default {
  name: 'App',
  components: { AppHeader, AppPlaylistHeader, AppPlaylist, AppPlayer, AppAuth }
}
</script>

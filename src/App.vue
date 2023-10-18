<template>
  <AppHeader />

  <AppPlaylistHeader />

  <AppPlaylist />

  <AppPlayer />

  <AppAuth />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppPlayer from '@/components/AppPlayer.vue'
import AppPlaylist from '@/components/AppPlaylist.vue'
import AppPlaylistHeader from '@/components/AppPlaylistHeader.vue'
import AppAuth from '@/components/AppAuth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'

export default {
  name: 'App',
  components: { AppHeader, AppPlaylistHeader, AppPlaylist, AppPlayer, AppAuth },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

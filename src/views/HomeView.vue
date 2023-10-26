<template>
  <!-- <section class="bg-gradient-to-t from-zinc-900 from-60% to-[#4a368e] to-90%"> -->
  <section>
    <AppPlaylist :songs="songs" />

    <AppPlayer />
  </section>
</template>

<script>
import AppPlaylist from '@/components/AppPlaylist.vue'
import AppPlayer from '@/components/AppPlayer.vue'
import { songsCollection } from '@/includes/firebase'

export default {
  name: 'Home',
  components: { AppPlaylist, AppPlayer },
  data() {
    return {
      songs: []
    }
  },
  async created() {
    const snapshots = await songsCollection.get()
    snapshots.forEach((document) => {
      this.songs.push({
        docID: document.id,
        ...document.data()
      })
    })
  }
}
</script>

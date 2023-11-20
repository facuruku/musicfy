<template>
  <main class="view-gradient">
    <AppPlaylist :songs="songs" />
  </main>
  <AppPlayer />
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
      songs: [],
      maxPerPage: 10,
      pendingReq: false
    }
  },
  async created() {
    await this.getSongs()

    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    async getSongs() {
      if (this.pendingReq) {
        return
      }

      this.pendingReq = true

      let snapshots

      if (this.songs.length) {
        const lastDoc = await songsCollection.doc(this.songs[this.songs.length - 1].docID).get()
        snapshots = await songsCollection
          .orderBy('modified_name')
          .startAfter(lastDoc)
          .limit(this.maxPerPage)
          .get()
        snapshots.forEach((document) => {
          this.songs.push({
            docID: document.id,
            ...document.data()
          })
        })
      } else {
        snapshots = await songsCollection.orderBy('modified_name').limit(this.maxPerPage).get()
        snapshots.forEach((document) => {
          this.songs.push({
            docID: document.id,
            ...document.data()
          })
        })
      }
      this.pendingReq = false
    },
    handleScroll() {
      const { scrollTop, offsetHeight } = document.documentElement
      const { innerHeight } = window
      const bottomOfWindow = Math.ceil(scrollTop) + innerHeight >= offsetHeight

      if (bottomOfWindow) {
        this.getSongs()
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

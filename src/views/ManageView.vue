<template>
  <div class="relative min-h-screen">
    <section
      class="absolute inset-0 min-h-screen bg-gradient-to-t from-zinc-900 from-60% to-[#4a368e] to-90% w-full"
    ></section>
    <!-- Manage Main Content -->
    <main id="manage" class="pt-20">
      <div class="container mx-auto pt-6">
        <div class="md:grid md:grid-cols-3 md:gap-4">
          <AppUpload ref="upload" :addSong="addSong" />
          <div class="col-span-2">
            <div
              class="bg-neutral-900 rounded-lg shadow-inner shadow-slate-500 relative flex flex-col text-white"
            >
              <div class="px-6 pt-6 pb-5 font-bold border-b border-slate-400">
                <span class="card-title">My Songs</span>
                <i class="fa-solid fa-music float-right text-green-400 text-2xl"></i>
              </div>
              <div class="p-6">
                <!-- Composition Items -->
                <div v-if="songs.length === 0">
                  <p class="text-center">Playlist empty.</p>
                </div>
                <CompositionItem
                  v-else
                  v-for="(song, i) in songs"
                  :key="song.docID"
                  :song="song"
                  :updateSong="updateSong"
                  :index="i"
                  :removeSong="removeSong"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import AppUpload from '@/components/Upload.vue'
import CompositionItem from '@/components/CompositionItem.vue'
import { auth, songsCollection } from '@/includes/firebase'

export default {
  name: 'managePlaylist',
  components: {
    AppUpload,
    CompositionItem
  },
  data() {
    return {
      songs: []
    }
  },
  async created() {
    const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get()
    snapshot.forEach((document) => {
      const song = {
        ...document.data(),
        docID: document.id
      }
      this.songs.push(song)
    })
  },
  methods: {
    updateSong(i, values) {
      this.songs[i].modified_name = values.modified_name
      this.songs[i].genre = values.genre
      this.songs[i].artist = values.artist
    },
    removeSong(i) {
      this.songs.splice(i, 1)
    },
    addSong(song) {
      this.songs.push(song)
    }
  }

  /*   beforeRouteLeave(to, from, next) {
    this.$refs.upload.cancelUploads()
    next()
  } */
  /*   beforeRouteEnter(to, from, next) {
    const store = useUserStore()
    if (store.userLoggedIn) {
      next()
    } else {
      next({ name: 'home' })
    }
  } */
}
</script>

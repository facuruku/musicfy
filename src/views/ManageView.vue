<template>
  <main class="bg-zinc-950">
    <!-- Manage Main Content -->

    <div class="grid grid-cols-1 md:grid-cols-3 gap-y-5 md:gap-5 grid-rows-1 mx-5 md:mx-10 my-5">
      <AppUpload class="" ref="upload" :addSong="addSong" />
      <section
        class="col-span-2 bg-neutral-900 rounded-lg shadow-inner shadow-slate-500 relative flex flex-col text-white"
      >
        <div class="px-6 pt-6 pb-5 font-bold border-b border-slate-400">
          <span class="card-title"> {{ $t('manage.mySongs') + ' (' + songs.length + ')' }}</span>
          <i class="fa-solid fa-music float-right text-green-400 text-2xl"></i>
        </div>
        <div class="p-6">
          <!-- Composition Items -->
          <div v-if="songs.length === 0">
            <p class="text-center">{{ $t('home.emptyPlaylist') }}</p>
          </div>
          <CompositionItem
            v-else
            class="flex flex-col"
            v-for="(song, i) in songs"
            :key="song.docID"
            :song="song"
            :updateSong="updateSong"
            :index="i"
            :removeSong="removeSong"
            :updateHasChanges="updateHasChanges"
          />
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import AppUpload from '@/components/Upload.vue'
import CompositionItem from '@/components/CompositionItem.vue'
import { auth, songsCollection } from '@/includes/firebase'

export default {
  name: 'Manage',
  components: {
    AppUpload,
    CompositionItem
  },
  data() {
    return {
      songs: [],
      hasChanges: false
    }
  },
  async created() {
    const snapshot = await songsCollection.where('uid', '==', auth.currentUser.uid).get()
    snapshot.forEach(this.addSong)
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
    addSong(document) {
      const song = {
        ...document.data(),
        docID: document.id
      }
      this.songs.push(song)
    },
    updateHasChanges(value) {
      this.hasChanges = value
    }
  },
  beforeRouteLeave(to, from, next) {
    if (!this.hasChanges) {
      next()
    } else {
      const leave = confirm('You have unsaved changes. Are you sure you want to leave?')
      next(leave)
    }
  }
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

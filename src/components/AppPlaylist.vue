<template>
  <!-- Playlist header -->
  <section
    class="relative z-10 mx-4 sm:mx-8 pt-32 sm:pt-40 pb-6 text-white text-center font-circular-regular"
  >
    <div class="container flex gap-6">
      <img
        aria-hidden="false"
        draggable="false"
        loading="eager"
        src="/assets/img/liked-songs-300.webp"
        alt="Liked songs"
        class="shadow-3xl hidden sm:block"
        srcset="
          /assets/img/liked-songs-300.webp 150w,
          /assets/img/liked-songs-300.webp 300w,
          /assets/img/liked-songs-640.webp 320w,
          /assets/img/liked-songs-640.webp 640w
        "
        sizes="(min-width: 1280px) 232px, 150px"
      />
      <div
        class="text-white main-header-content flex flex-col grow gap-1 sm:gap-4 justify-end items-start content-normal"
      >
        <h4 class="text-xs sm:text-base">Playlist</h4>
        <h1 class="text-xl sm:text-5xl lg:text-8xl font-circular-black tracking-tighter">
          Liked songs
        </h1>
        <p class="text-xs sm:text-base">
          <span>{{ getUserName }} º {{ songs.length }} songs </span>
        </p>
      </div>
    </div>
  </section>
  <!-- Playlist Content -->
  <section class="relative z-10 py-5 bg-zinc-900 bg-opacity-30 font-circular-regular min-h-[50vh]">
    <button type="button" class="mx-4 sm:mx-8">
      <i
        class="text-[#1ed760] text-5xl hover:scale-110 bg-black rounded-full"
        :class="{ 'fa fa-play-circle': !playing, 'fa fa-pause-circle': playing }"
        @click.prevent="playerHasSong ? toggleAudio() : play(this.songs[0])"
      ></i>
    </button>

    <!-- Playlist -->
    <div class="mx-4 sm:mx-8 mt-4">
      <table id="playlist" class="w-full text-left mb-40">
        <thead class="border-b border-zinc-300 border-opacity-10 secondary-text">
          <tr>
            <th class="hidden sm:table-cell"><span class="font-sans">#</span></th>
            <th>Title</th>
            <th class="hidden sm:table-cell">Genre</th>
            <th class="hidden sm:table-cell">Comments</th>
            <th class="hidden sm:table-cell">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="h-6 secondary-text"
                aria-label="duration"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </th>
          </tr>
        </thead>

        <tbody class="text-white mb-10">
          <div v-if="songs.length === 0">Empty playlist.</div>
          <SongItem
            v-else
            v-for="(song, index) in songs"
            :key="song.docID"
            :song="song"
            :index="index"
            :in-player="isSongInPlayer(song)"
            :playing="isSongPlaying(song)"
            @click="play(song)"
            @dblclick="this.$router.push({ name: 'song', params: { id: song.docID } })"
          />
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import { auth } from '@/includes/firebase'
import { mapState, mapActions } from 'pinia'
import usePlayerStore from '@/stores/player'
import SongItem from '@/components/SongItem.vue'

export default {
  name: 'AppPlaylist',
  components: { SongItem },
  props: {
    songs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {
    ...mapState(usePlayerStore, [
      'playing',
      'songInPlayer',
      'isSongInPlayer',
      'isSongPlaying',
      'playerHasSong'
    ]),
    getUserName() {
      return auth.currentUser && auth.currentUser.displayName
        ? auth.currentUser.displayName
        : 'Your name here'
    }
  },
  methods: {
    ...mapActions(usePlayerStore, ['play', 'toggleAudio'])
  }
}
</script>

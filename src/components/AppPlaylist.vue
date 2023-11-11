<template>
  <!-- Playlist header -->
  <section class="relative z-10 mx-4 pt-32 sm:pt-40 pb-6 text-white text-center font-circular-thin">
    <div class="container flex justify-between sm:justify-start sm:gap-6">
      <img
        aria-hidden="false"
        draggable="false"
        loading="eager"
        src="/assets/img/liked-songs-300.webp"
        alt="Liked songs"
        class="shadow-3xl order-2 sm:order-1 w-28 h-28 sm:w-auto sm:h-auto"
        srcset="
          /assets/img/liked-songs-300.webp 150w,
          /assets/img/liked-songs-300.webp 300w,
          /assets/img/liked-songs-640.webp 320w,
          /assets/img/liked-songs-640.webp 640w
        "
        sizes="(min-width: 1280px) 232px, 192px"
      />
      <div
        class="text-white main-header-content flex flex-col sm:grow gap-1 sm:gap-4 justify-center items-start order-1"
      >
        <h4 class="text-xs sm:text-base">Playlist</h4>
        <h1 class="text-xl sm:text-8xl lg:text-8xl font-circular-black">Liked Songs</h1>
        <p class="text-xs sm:text-base">
          <span class="font-circular-regular">{{ username }} º {{ songs.length }} songs </span>
        </p>
      </div>
    </div>
  </section>
  <!-- Playlist Content -->
  <section class="relative z-10 py-5 bg-zinc-900 bg-opacity-30 font-circular-thin min-h-[50vh]">
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
        <thead class="border-b border-zinc-300 border-opacity-10 secondary-text mb-10">
          <tr>
            <th class="hidden sm:table-cell px-4 sm:w-8">
              <span class="font-sans">#</span>
            </th>
            <th class="sm:w-2/5">Title</th>
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

        <tbody class="text-white">
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
import { mapState, mapActions } from 'pinia'
import usePlayerStore from '@/stores/player'
import useUserStore from '@/stores/user'
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
    ...mapState(useUserStore, ['username'])
  },
  methods: {
    ...mapActions(usePlayerStore, ['play', 'toggleAudio'])
  }
}
</script>

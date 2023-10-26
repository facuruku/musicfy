<template>
  <!-- Playlist header -->
  <section class="z-10 mx-10 pt-40 pb-6 text-white text-center relative font-circular-regular">
    <div class="container flex gap-6">
      <img
        aria-hidden="false"
        draggable="false"
        loading="eager"
        src="/assets/img/liked-songs-300.webp"
        alt="Liked songs"
        class="shadow-3xl"
        srcset="
          /assets/img/liked-songs-300.webp 150w,
          /assets/img/liked-songs-300.webp 300w,
          /assets/img/liked-songs-640.webp 320w,
          /assets/img/liked-songs-640.webp 640w
        "
        sizes="(min-width: 1280px) 232px, 192px"
      />
      <div
        class="text-white main-header-content flex flex-col grow justify-end items-start content-normal"
      >
        <h4 class="text-sm mb-2">Playlist</h4>
        <h1 class="text-5xl mb-5 font-circular-black tracking-tighter">Liked songs</h1>
        <p class="">
          <span>{{ getUserName }} º {{ songs.length }} songs </span>
        </p>
      </div>
    </div>
  </section>
  <!-- Playlist Content -->
  <section
    class="relative z-10 px-10 py-5 mb-20 bg-zinc-900 bg-opacity-30 font-circular-regular min-h-[50vh]"
  >
    <button type="button">
      <p
        class="text-[#1ed760] text-5xl hover:scale-110 bg-black rounded-full"
        :class="{ 'fa fa-play-circle': !isPlaying, 'fa fa-pause-circle': isPlaying }"
        @click.prevent="isPlaying ? pause() : play()"
      ></p>
    </button>

    <!-- Playlist -->

    <table id="playlist" class="mx-6 mt-6 secondary-text w-full text-left px-6 pt-6 pb-2">
      <thead class="border-b border-zinc-300 border-opacity-10">
        <tr>
          <th class=""><span class="font-sans">#</span></th>
          <th>Title</th>
          <th>Genre</th>
          <th>Comments</th>
          <th class="">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="h-6 secondary-text"
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
        />
      </tbody>
    </table>
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
    ...mapState(usePlayerStore, ['isPlaying']),
    getUserName() {
      return auth.currentUser && auth.currentUser.displayName
        ? auth.currentUser.displayName
        : 'Your name here'
    }
  },
  methods: {
    ...mapActions(usePlayerStore, ['play', 'pause'])
  }
}
</script>

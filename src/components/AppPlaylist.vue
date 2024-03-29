<template>
  <main class="flex flex-col">
    <!-- Playlist header -->
    <section class="px-4 pb-5 text-white font-circular-thin bg-gradient-1">
      <h1 class="pt-10 pb-10 font-circular-black text-xl sm:text-2xl lg:text-4xl">
        {{ greeting() }}
      </h1>
      <div class="container flex justify-between items-end sm:gap-6">
        <img
          aria-hidden="false"
          draggable="false"
          loading="eager"
          src="/assets/img/liked-songs-300.webp"
          alt="Liked songs"
          class="shadow-3xl order-2 sm:order-1 w-28 h-28 sm:w-max sm:h-max"
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
          <h4 class="text-xs sm:text-base">{{ $t('home.playlist') }}</h4>
          <h1 class="text-xl sm:text-4xl lg:text-7xl font-circular-black text-left">
            {{ $t('home.liked') }}
          </h1>
          <p class="text-xs sm:text-base">
            <span class="font-circular-regular">
              {{ username }} º {{ songsCount }} {{ $t('home.songs') }}
            </span>
          </p>
        </div>
      </div>
    </section>
    <!-- Playlist Content -->
    <section class="flex-1 py-5 bg-zinc-900 bg-opacity-30 font-circular-thin bg-gradient-2">
      <div class="flex justify-between mx-4 sm:mx-8">
        <button type="button" class="md:hover:scale-105">
          <i
            v-icon.button="!playing ? 'play-circle' : 'pause-circle'"
            class="text-[#1ed760] text-5xl bg-black rounded-full"
            @click.prevent="playerHasSong ? toggleAudio() : play(this.songs[0])"
          ></i>
        </button>
        <div class="flex items-center gap-2 text-gray-300 hover:text-white" v-if="songs.length > 0">
          <span
            class="font-circular-black hover:cursor-pointer"
            @click.prevent="offlineMode = !offlineMode"
          >
            {{ $t('home.offlineMode') }}</span
          >
          <InputSwitch v-model="offlineMode" />
        </div>
      </div>

      <!-- Playlist -->
      <div class="mx-4 sm:mx-8 mt-4">
        <table id="playlist" class="w-full text-left">
          <thead class="border-b border-zinc-400 border-opacity-10 secondary-text">
            <tr>
              <th class="hidden sm:table-cell px-4 sm:w-8 font-light">#</th>
              <th class="sm:w-2/5 p-1 font-light">{{ $t('home.title') }}</th>
              <th class="hidden sm:table-cell w-1/3 font-light">{{ $t('home.genre') }}</th>
              <th class="hidden sm:table-cell w-1/5 font-light">{{ $t('home.comments') }}</th>
              <th class="hidden sm:table-cell w-2/12 font-light">
                <div class="flex justify-end mr-2 font-light">
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
                </div>
              </th>
            </tr>
          </thead>

          <tbody class="text-white">
            <tr class="h-2"></tr>
            <SongItem
              v-for="(song, index) in songs"
              :key="song.docID"
              :song="song"
              :index="index"
              :is-selected="isSongSelected(song.docID)"
              @click="selectSong(song.docID)"
              @double-click="handleDblClick(song)"
            />
          </tbody>

          <tfoot>
            <tr>
              <td colspan="5">
                <span v-if="songs.length === 0">{{ $t('home.emptyPlaylist') }}</span>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  </main>
</template>

<script>
import { mapState, mapActions, mapWritableState } from 'pinia'
import usePlayerStore from '@/stores/player'
import useUserStore from '@/stores/user'
import SongItem from '@/components/SongItem.vue'
import { greeting } from '@/includes/helper'
import InputSwitch from 'primevue/inputswitch'

export default {
  name: 'AppPlaylist',
  components: { SongItem, InputSwitch },
  props: {
    songs: {
      type: Array,
      required: true
    },
    songsCount: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      selectedSong: ''
    }
  },
  computed: {
    ...mapState(usePlayerStore, ['playing', 'playerHasSong']),
    ...mapState(useUserStore, ['username']),
    ...mapWritableState(useUserStore, ['offlineMode'])
  },
  watch: {
    offlineMode(newVal) {
      newVal ? this.cacheSongs() : this.clearSongsCache()
    }
  },
  methods: {
    ...mapActions(usePlayerStore, ['play', 'toggleAudio']),
    greeting() {
      return greeting(this.username)
    },
    isSongSelected(songDocID) {
      return this.selectedSong === songDocID
    },
    selectSong(songDocID) {
      this.selectedSong = this.selectedSong === songDocID ? null : songDocID
    },
    handleDblClick(song) {
      this.selectSong(song.docID)
      this.play(song)
    },
    async cacheSongs() {
      const cache = await caches.open('audio-cache')
      for (const song of this.songs) {
        if (!(await cache.match(song.url))) {
          const response = await fetch(song.url)
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
          }
          await cache.put(song.url, response)
        }
      }
    },
    async clearSongsCache() {
      await caches.delete('audio-cache')
    }
  }
}
</script>

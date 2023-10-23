<template>
  <div class="relative min-h-screen">
    <section
      class="absolute inset-0 min-h-screen bg-gradient-to-t from-zinc-900 from-60% to-[#4a368e] to-90% w-full"
    ></section>
    <!-- Playlist header -->
    <section
      class="relative z-10 mx-10 pt-40 pb-6 text-white text-center relative font-circular-regular"
    >
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
            <span>{{ getUserName }} º {{ getPlaylistSongsSize }} songs </span>
          </p>
        </div>
      </div>
    </section>
    <!-- Playlist Content -->
    <section class="relative z-10 px-10 py-5 mb-20 bg-black bg-opacity-30 font-circular-regular">
      <button type="button">
        <p
          class="text-[#1ed760] text-5xl hover:scale-110 bg-black rounded-full"
          :class="{ 'fa fa-play-circle': !isPlaying, 'fa fa-pause-circle': isPlaying }"
          @click.prevent="isPlaying ? pause() : play()"
        ></p>
      </button>
      <div class="flex flex-col">
        <div class="px-6 pt-6 pb-2 font-bold border-b border-zinc-300 border-opacity-10">
          <span class="card-title secondary-text">Title</span>
          <!--TODO add columns like spotify <span class="card-title secondary-text">Album</span> -->
          <!-- Maybe refactor to use table -->

          <!-- Icon -->
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 float-right secondary-text"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
        <!-- Playlist -->
        <ol id="playlist" class="font-circular-thin text-white mb-10">
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-800 rounded-md hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="secondary-text text-sm">Artist Name</span>
            </div>

            <div class="text-lg secondary-text">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 rounded-md hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="secondary-text text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa-solid fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-white hover:bg-opacity-10"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-gray-50"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
          <li
            class="flex justify-between items-center p-2 cursor-pointer transition duration-300 hover:bg-gray-50 hover:bg-opacity-0"
          >
            <div>
              <a href="#" class="font-bold block">Song Title</a>
              <span class="text-sm">Artist Name</span>
            </div>

            <div class="text-lg">
              <span class="comments">
                <i class="fa fa-comments"></i>
                15
              </span>
            </div>
          </li>
        </ol>
        <!-- .. end Playlist -->
      </div>
    </section>
  </div>
</template>

<script>
import { auth } from '@/includes/firebase'
import { mapState, mapActions } from 'pinia'
import usePlayerStore from '@/stores/player'

export default {
  name: 'AppPlaylist',
  data() {
    return {
      songsInPlaylist: auth.currentUser ? 6 : 0
    }
  },
  computed: {
    ...mapState(usePlayerStore, ['isPlaying']),
    getUserName() {
      return auth.currentUser && auth.currentUser.displayName
        ? auth.currentUser.displayName
        : 'Your name here'
    },
    getPlaylistSongs() {
      return [{ name: 'Perfect', artist: 'Ed Sheeran' }]
    },
    getPlaylistSongsSize() {
      return 6
    }
  },
  methods: {
    ...mapActions(usePlayerStore, ['play', 'pause'])
  }
}
</script>

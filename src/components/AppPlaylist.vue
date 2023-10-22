<template>
  <!-- Playlist header -->
  <section class="mx-10 pt-20 pb-6 text-white text-center relative font-circular-black">
    <div class="container flex gap-6">
      <img
        aria-hidden="false"
        draggable="false"
        loading="eager"
        src="/assets/img/liked-songs-300.webp"
        alt="Liked songs"
        class="shadow-lg shadow-black"
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
        <h4 class="text-sm mb-2 font-circular-regular">Playlist</h4>
        <h1 class="text-5xl mb-5 tracking-tighter">Liked songs</h1>
        <p class="font-circular-regula">
          <span>{{ getUserName }} º {{ songsInPlaylist }} songs </span>
        </p>
      </div>
    </div>
  </section>
  <!-- Playlist Content -->
  <section class="px-10 py-5 bg-black bg-opacity-30">
    <button type="button">
      <p
        class="text-[#1ed760] text-5xl hover:scale-110 bg-black rounded-full"
        :class="{ 'fa fa-play-circle': !isPlaying, 'fa fa-pause-circle': isPlaying }"
        @click.prevent="isPlaying = !isPlaying"
      ></p>
    </button>
    <div class="flex flex-col">
      <div class="px-6 pt-6 pb-2 font-bold border-b border-zinc-300 border-opacity-10">
        <span class="card-title secondary-text font-circular-regular">Title</span>
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
      <ol id="playlist" class="font-circular-thin text-white">
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
</template>

<script>
import { auth } from '@/includes/firebase'

export default {
  name: 'AppPlaylist',
  data() {
    return {
      songsInPlaylist: auth.currentUser ? 6 : 0,
      isPlaying: false //just for visual testing
    }
  },
  computed: {
    getUserName() {
      return auth.currentUser && auth.currentUser.displayName
        ? auth.currentUser.displayName
        : 'Your name here'
    }
  }
}
</script>

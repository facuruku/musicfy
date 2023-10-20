<template>
  <!-- Playlist header -->
  <section class="mb-10 py-20 text-white text-center relative font-circular-black">
    <div class="container mx-10 flex gap-6">
      <img
        aria-hidden="false"
        draggable="false"
        loading="eager"
        src="/assets/img/liked-songs-300.webp"
        alt="Liked songs"
        class="shadow-2xl shadow-black"
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
</template>

<script>
import { auth } from '@/includes/firebase'

export default {
  name: 'PlaylistHeader',
  data() {
    return {
      songsInPlaylist: auth.currentUser ? 6 : 0
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

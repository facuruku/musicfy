<template>
  <!-- Playlist header -->
  <section class="mb-10 py-20 text-white text-center relative">
    <div class="container mx-auto flex">
      <img
        aria-hidden="false"
        draggable="false"
        loading="eager"
        src="/assets/img/liked-songs-300.png"
        alt="Liked songs"
        class=""
        srcset="
          /assets/img/liked-songs-300.png 150w,
          /assets/img/liked-songs-300.png 300w,
          /assets/img/liked-songs-640.png 320w,
          /assets/img/liked-songs-640.png 640w
        "
        sizes="(min-width: 1280px) 232px, 192px"
      />
      <div class="text-white main-header-content ml-5 flex-col self-end">
        <h4 class="text-left text-sm">Playlist</h4>
        <h1 class="text-left font-bold text-5xl mb-5">Liked songs</h1>
        <p class="text-left"><span class="font-bold">Username</span> Nº songs</p>
      </div>
    </div>
  </section>
</template>

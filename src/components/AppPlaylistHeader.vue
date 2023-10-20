<template>
  <!-- Playlist header -->
  <section class="mb-10 py-20 text-white text-center relative font-circular-black">
    <div class="container mx-10 flex gap-6">
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
      <div
        class="text-white main-header-content flex flex-col grow justify-end items-start content-normal"
      >
        <h4 class="text-sm mb-2 font-circular-regular">Playlist</h4>
        <h1 class="text-5xl mb-5 tracking-tighter">Liked songs</h1>
        <p class="font-circular-regula"><span>Username</span> º 6 songs</p>
      </div>
    </div>
  </section>
</template>

<script>
//TODO add username
</script>

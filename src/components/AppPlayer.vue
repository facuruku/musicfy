<template>
  <!-- Player -->
  <div class="fixed bottom-0 left-0 bg-black px-4 py-4 w-full flex flex-nowrap">
    <!-- Track Info -->
    <div class="text-white flex flex-col justify-center items-center">
      <p class="song-title font-bold">Song Title</p>
      <p class="song-artist">by Artist</p>
    </div>
    <div class="text-white grow flex flex-col gap-0.5">
      <!-- Play/Pause Button -->
      <button type="button">
        <p class="fa fa-play-circle text-white text-3xl hover:scale-110"></p>
      </button>
      <div class="flex flex-nowrap gap-3 justify-center items-center">
        <!-- Current Position -->
        <div class="player-currenttime text-xs secondary-text">00:00</div>
        <!-- Scrub Container  -->
        <div class="group w-80 h-1 rounded bg-neutral-700 relative cursor-pointer">
          <!-- Player Ball -->
          <span
            class="absolute -top-1.5 -ml-2.5 text-white text-xs opacity-0 group-hover:opacity-100"
            :style="{ left: currentTimePercentage }"
          >
            <i class="fas fa-circle"></i>
          </span>
          <!-- Player Progress Bar-->
          <span
            class="block h-1 rounded bg-white group-hover:bg-gradient-to-r from-green-500 to-green-400"
            :style="{ width: currentTimePercentage }"
          ></span>
        </div>
        <!-- Duration -->
        <div class="player-duration text-xs secondary-text">03:06</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentTime: 93, //audio current
      durationTime: 186 //audio length
    }
  },
  computed: {
    currentTimePercentage() {
      return (this.currentTime / this.durationTime) * 100 + '%'
    }
  }
}
</script>

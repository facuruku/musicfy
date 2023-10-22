<template>
  <!-- Player -->
  <div class="fixed bottom-0 left-0 bg-black px-4 py-4 w-full flex flex-nowrap">
    <!-- Track Info -->
    <div class="text-white flex flex-col justify-center items-center font-circular-thin">
      <p class="song-title font-bold">Song Title</p>
      <p class="song-artist">by Artist</p>
    </div>
    <div class="text-white grow flex flex-col gap-0.5 font-circular-regular">
      <!-- Play/Pause Button -->
      <button type="button">
        <p
          class="text-white text-3xl hover:scale-105"
          :class="{ 'fa fa-play-circle': !isPlaying, 'fa fa-pause-circle': isPlaying }"
          @click.prevent="isPlaying = !isPlaying"
        ></p>
      </button>
      <div class="flex flex-nowrap gap-3 justify-center items-center">
        <!-- Current Position -->
        <div class="player-currenttime text-xs secondary-text">
          00<span class="font-sans">:</span>00
        </div>
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
        <div class="player-duration text-xs secondary-text">
          03<span class="font-sans">:</span>06
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppPlayer',
  data() {
    return {
      currentTime: 93, //audio current
      durationTime: 186, //audio length
      isPlaying: false //just for visual testing
    }
  },
  computed: {
    currentTimePercentage() {
      return (this.currentTime / this.durationTime) * 100 + '%'
    }
  }
}
</script>

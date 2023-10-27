<template>
  <!-- Player -->
  <div class="fixed bottom-0 left-0 bg-black z-10 px-4 py-2 w-full flex flex-wrap">
    <!-- Track Info -->
    <div
      class="text-white flex flex-col justify-center font-circular-thin w-40 h-16 overflow-x-hidden whitespace-nowrap"
    >
      <p class="song-title font-bold">Playing Song</p>
      <p class="song-artist">by Artist</p>
    </div>
    <!-- Buttons - Progress bar -->
    <div class="text-white flex flex-col items-center gap-0.5 font-circular-regular">
      <!-- Play/Pause Button -->
      <button type="button" class="">
        <p
          class="text-white text-3xl hover:scale-105"
          :class="{ 'fa fa-play-circle': !playing, 'fa fa-pause-circle': playing }"
          @click.prevent="toggleAudio()"
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
    <!-- Volume -->
    <div class="text-white grow text-center">
      <h1>Volume</h1>
      (soon)
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import usePlayerStore from '@/stores/player'

export default {
  name: 'AppPlayer',
  data() {
    return {
      currentTime: 93, //audio current
      durationTime: 186 //audio ,
    }
  },
  computed: {
    ...mapState(usePlayerStore, ['playing']),
    currentTimePercentage() {
      return (this.currentTime / this.durationTime) * 100 + '%'
    }
  },
  methods: {
    ...mapActions(usePlayerStore, ['toggleAudio'])
  }
}
</script>

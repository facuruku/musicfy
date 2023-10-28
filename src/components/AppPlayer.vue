<template>
  <!-- Player -->
  <div
    class="fixed bottom-0 left-0 bg-black z-10 px-8 py-2 w-full flex flex-col lg:flex-row md:justify-between sm:justify-center"
  >
    <!-- Track Info -->
    <div
      v-if="currentSong.modified_name"
      class="text-white flex flex-col justify-center items-center font-circular-thin h-16 overflow-x-hidden whitespace-nowrap"
    >
      <p class="song-title font-bold">{{ currentSong.modified_name }}</p>
      <p class="song-artist">{{ currentSong.artist ? currentSong.artist : 'Unknown artist' }}</p>
    </div>
    <!-- Buttons - Progress bar -->
    <div class="text-white flex flex-col items-center gap-0.5 font-circular-regular">
      <!-- Play/Pause Button -->
      <button type="button" class="">
        <i
          class="text-white text-3xl hover:scale-105"
          :class="{ 'fa fa-play-circle': !playing, 'fa fa-pause-circle': playing }"
          @click.prevent="toggleAudio()"
        ></i>
      </button>
      <div class="flex flex-nowrap gap-3 justify-center items-center">
        <!-- Current Position -->
        <div class="player-currenttime text-xs secondary-text font-sans">
          {{ seek }}
        </div>
        <!-- Scrub Container  -->
        <div class="group w-60 sm:w-96 h-1 bg-neutral-700 relative cursor-pointer">
          <!-- Player Ball -->
          <span
            class="absolute -top-1.5 -ml-2.5 text-white text-xs opacity-0 group-hover:opacity-100"
            :style="{ left: playerProgress }"
          >
            <i class="fas fa-circle"></i>
          </span>
          <!-- Player Progress Bar-->
          <span
            class="block h-1 rounded bg-white group-hover:bg-gradient-to-r from-green-500 to-green-400"
            :style="{ width: playerProgress }"
          ></span>
        </div>
        <!-- Duration -->
        <div class="player-duration text-xs secondary-text font-sans">
          {{ duration }}
        </div>
      </div>
    </div>
    <!-- Volume -->
    <div class="hidden lg:block text-white text-center">
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
    ...mapState(usePlayerStore, ['playing', 'currentSong', 'duration', 'seek', 'playerProgress']),
    currentTimePercentage() {
      return (this.currentTime / this.durationTime) * 100 + '%'
    }
  },
  methods: {
    ...mapActions(usePlayerStore, ['toggleAudio'])
  }
}
</script>

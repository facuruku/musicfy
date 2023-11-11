<template>
  <!-- Player -->
  <section
    class="fixed bottom-0 left-0 bg-black h-24 z-10 px-8 py-2 w-full flex flex-col lg:flex-row md:justify-between justify-center items-center select-none"
  >
    <!-- Buttons - Progress bar -->
    <div class="text-white flex flex-col items-center font-circular-thin lg:order-2">
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
        <!-- Progress Slider  -->
        <Slider
          v-model="playerProgress"
          @change="handleSliderChange(playerProgress)"
          @slideend="handleSlideEnd()"
          @click.prevent="handleSliderClick()"
          :pt="{
            root: { class: 'w-60 sm:w-96 h-1 bg-neutral-700 group hover:cursor-pointer' },
            handle: {
              class:
                'bg-white opacity-0 group-hover:opacity-100 hover:cursor-grab group-active:opacity-100'
            },
            range: { class: 'bg-white group-hover:bg-green-500 group-active:bg-green-500' }
          }"
        />

        <!-- Duration -->
        <div class="player-duration text-xs secondary-text font-sans">
          {{ displayDuration }}
        </div>
      </div>
    </div>
    <!-- Track Info -->
    <div
      class="text-white hidden sm:flex lg:flex-col gap-2 lg:gap-0 justify-center sm:items-center lg:items-start font-circular-thin h-16 whitespace-nowrap lg:order-1"
    >
      <p class="song-title">
        {{ currentSong.modified_name ? currentSong.modified_name : '' }}
      </p>
      <p v-if="currentSong.modified_name" class="song-artist secondary-text">
        {{ currentSong.artist ? currentSong.artist : 'Unknown artist' }}
      </p>
    </div>
    <!-- Volume -->
    <div class="hidden text-white lg:flex items-center order-3">
      <!-- TODO set popover for mute funcitonality (check https://valgeirb.github.io/vue3-popper/)-->
      <i
        @click.prevent="toggleVolume"
        class="fa-solid hover:cursor-pointer p-3"
        :class="{
          'fa-volume-high': volume > 50,
          'fa-volume-low': volume >= 1,
          'fa-volume-xmark': volume < 1
        }"
      ></i>

      <Slider
        v-model="volume"
        :pt="{
          root: { class: 'w-40 h-1 bg-neutral-700 group hover:cursor-grab' },
          handle: { class: 'bg-white opacity-0 group-hover:opacity-100 group-active:opacity-100' },
          range: { class: 'bg-white group-hover:bg-green-500 group-active:bg-green-500' }
        }"
      />
    </div>
  </section>
</template>

<script>
import { mapState, mapWritableState, mapActions } from 'pinia'
import usePlayerStore from '@/stores/player'
import Slider from 'primevue/slider'
import helper from '@/includes/helper'

export default {
  name: 'AppPlayer',
  components: { Slider },
  data() {
    return {
      volumeOld: 0,
      isDragging: false,
      slideEndValue: 0
    }
  },
  computed: {
    ...mapState(usePlayerStore, ['playing', 'currentSong', 'displayDuration', 'duration']),
    ...mapWritableState(usePlayerStore, ['playerProgress', 'volume', 'seek'])
  },
  methods: {
    ...mapActions(usePlayerStore, ['toggleAudio', 'updateSeek', 'updateVolume', 'setIsDragging']),
    toggleVolume() {
      if (this.volume >= 1) {
        this.volume = 0
      } else {
        this.volume = this.volumeOld
      }
    },
    updateDisplaySeek(playerProgress) {
      const percentage = playerProgress / 100

      const seconds = this.duration * percentage

      this.seek = helper.formatTime(seconds)
    },
    handleSliderChange(playerProgress) {
      this.isDragging = true
      this.updateDisplaySeek(playerProgress)
      this.slideEndValue = playerProgress
    },
    handleSlideEnd() {
      this.isDragging = false
      this.updateSeek(this.slideEndValue)
    },
    handleSliderClick() {
      this.isDragging = false
      this.updateSeek(this.slideEndValue)
    }
  },
  watch: {
    volume(newValue, oldValue) {
      this.volumeOld = oldValue
      this.updateVolume(newValue)
    },
    isDragging(newValue) {
      this.setIsDragging(newValue)
    }
  }
}
</script>

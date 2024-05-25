<template>
  <!-- Player -->
  <footer
    class="w-full bg-black p-4 sm:p-8 flex flex-col lg:flex-row lg:justify-between justify-center items-center select-none"
  >
    <!-- Buttons - Progress bar -->
    <section
      class="text-white flex flex-col sm:gap-1 items-center flex-1 font-circular-thin lg:order-2"
    >
      <!-- Play/Pause Button -->
      <button
        type="button"
        :class="{ 'text-white': playerHasSong, 'text-gray-500': !playerHasSong }"
        @click.prevent="toggleAudio()"
      >
        <i
          v-tooltip.top="getPlayIconTooltip()"
          class="text-3xl hover:scale-105"
          :class="{ 'fa fa-play-circle': !playing, 'fa fa-pause-circle': playing }"
        ></i>
      </button>
      <div class="flex flex-nowrap gap-3 justify-center items-center">
        <!-- Current Position -->
        <p class="player-currenttime text-xs secondary-text font-sans">
          {{ playerHasSong ? seek : '-:--' }}
        </p>
        <!-- Progress Slider  -->
        <Slider
          :disabled="!playerHasSong"
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
        <p class="player-duration text-xs secondary-text font-sans">
          {{ playerHasSong ? displayDuration : '-:--' }}
        </p>
      </div>
    </section>
    <!-- Track Info -->
    <section class="flex-1 font-circular-thin lg:order-1">
      <article
        v-show="playerHasSong"
        class="sm:flex items-center gap-5 h-6 lg:h-16 whitespace-nowrap"
      >
        <div
          class="text-white flex lg:flex-col gap-2 lg:gap-0 justify-center items-center sm:items-center lg:items-start font-circular-thin h-8 lg:h-16 w-56 sm:w-auto"
        >
          <p class="song-title overflow-x-clip text-ellipsis">
            {{ currentSong.modified_name }}
          </p>
          <p class="hidden sm:block song-artist secondary-text overflow-x-clip text-ellipsis">
            {{ currentSong.artist || 'Unknown artist' }}
          </p>
        </div>
        <i class="!hidden lg:!block fa-solid fa-heart text-green-500"></i>
      </article>
    </section>

    <!-- Volume -->
    <section
      class="hidden text-gray-300 lg:flex items-center justify-end flex-1 order-3 hover:text-white"
    >
      <i
        v-tooltip.top="getVolumeIconTooltip()"
        @click.prevent="toggleVolume"
        class="fa-solid hover:cursor-pointer p-3 w-11"
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
    </section>
  </footer>
</template>

<script>
import { mapState, mapWritableState, mapActions } from 'pinia'
import usePlayerStore from '@/stores/player'
import Slider from 'primevue/slider'
import { formatTime } from '@/includes/helper'

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
    ...mapState(usePlayerStore, [
      'playing',
      'currentSong',
      'displayDuration',
      'duration',
      'playerHasSong'
    ]),
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
    getVolumeIconTooltip() {
      return this.volume >= 1 ? this.$t('player.muteTooltip') : this.$t('player.unmuteTooltip')
    },
    getPlayIconTooltip() {
      return this.playing ? this.$t('player.pauseTooltip') : this.$t('player.playTooltip')
    },
    updateDisplaySeek(playerProgress) {
      const percentage = playerProgress / 100

      const seconds = this.duration * percentage

      this.seek = formatTime(seconds)
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

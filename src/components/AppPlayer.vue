<template>
  <!-- Player -->
  <section
    class="fixed bottom-0 left-0 bg-black z-10 px-8 py-2 w-full flex flex-col lg:flex-row md:justify-between justify-center"
  >
    <!-- Track Info -->
    <div
      class="text-white flex flex-col justify-center items-center font-circular-thin h-16 overflow-x-hidden whitespace-nowrap"
    >
      <p class="song-title font-bold">
        {{ currentSong.modified_name ? currentSong.modified_name : '' }}
      </p>
      <p v-if="currentSong.modified_name" class="song-artist">
        {{ currentSong.artist ? currentSong.artist : 'Unknown artist' }}
      </p>
    </div>
    <!-- Buttons - Progress bar -->
    <div class="text-white flex flex-col items-center font-circular-regular">
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
          @click.prevent="updateSeek(playerProgress)"
          @drag.prevent.stop=""
          @dragstart.prevent.stop=""
          @dragend.prevent.stop=""
          @dragover.prevent.stop=""
          @dragenter.prevent.stop=""
          @dragleave.prevent.stop=""
          @drop.prevent="updateSeek(playerProgress)"
          :pt="{
            root: { class: 'w-96 h-1 bg-neutral-700 group hover:cursor-grab' },
            handle: {
              class: 'bg-white opacity-0 group-hover:opacity-100 group-active:opacity-100'
            },
            range: { class: 'bg-white group-hover:bg-green-500 group-active:bg-green-500' }
          }"
        />

        <!-- Duration -->
        <div class="player-duration text-xs secondary-text font-sans">
          {{ duration }}
        </div>
      </div>
    </div>
    <!-- Volume -->
    <div class="hidden text-white lg:flex items-center">
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

export default {
  name: 'AppPlayer',
  components: { Slider },
  data() {
    return {
      volumeOld: 0
    }
  },
  computed: {
    ...mapState(usePlayerStore, ['playing', 'currentSong', 'duration', 'seek']),
    ...mapWritableState(usePlayerStore, ['playerProgress', 'volume'])
  },
  methods: {
    ...mapActions(usePlayerStore, ['toggleAudio', 'updateSeek', 'updateVolume']),
    toggleVolume() {
      if (this.volume >= 1) {
        this.volume = 0
      } else {
        this.volume = this.volumeOld
      }
    }
  },
  watch: {
    volume(newValue, oldValue) {
      this.volumeOld = oldValue
      this.updateVolume(newValue)
    }
  }
}
</script>

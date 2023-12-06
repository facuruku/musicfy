<template>
  <tr
    class="group hover:cursor-pointer"
    :class="{
      'bg-white bg-opacity-30 ': isSelected,
      'sm:hover:bg-white sm:hover:bg-opacity-10 sm:hover:text-white secondary-text': !isSelected
    }"
  >
    <td
      id="index"
      class="hidden sm:table-cell rounded-l-md"
      :class="{ 'text-green-500': inPlayer, 'text-secondary': !inPlayer }"
    >
      <div class="hidden sm:flex justify-center items-center">
        <i
          class="!hidden group-hover:!block fa-solid text-white text-sm"
          :class="{ 'fa-pause ': playing, 'fa-play': !playing }"
          @click.prevent="inPlayer ? toggleAudio() : play(song)"
        ></i>
        <p v-if="!playing" class="group-hover:hidden">
          {{ index + 1 }}
        </p>
        <img
          v-else
          src="/assets/img/equaliser-animated-green.gif"
          alt="Sound wave"
          class="group-hover:hidden w-3.5"
        />
      </div>
    </td>
    <td id="title" @dblclick="handleDblClick(song)" class="rounded-l-md sm:rounded-none px-2">
      <RouterLink
        :to="{ name: 'song', params: { id: song.docID } }"
        class="text-white w-max border-b border-b-transparent hover:border-b-white"
      >
        <span
          class="overflow-x-clip text-ellipsis"
          :class="{ 'text-white': !inPlayer, 'text-green-500': inPlayer }"
        >
          {{ song.modified_name }}
        </span>
      </RouterLink>
      <RouterLink
        :to="{ name: 'song', params: { id: song.docID } }"
        class="block w-max border-b border-b-transparent hover:border-b-white text-sm"
      >
        <span class="overflow-x-clip text-ellipsis"> {{ song.artist || $t('home.unknown') }}</span>
      </RouterLink>
    </td>
    <td id="genre" @dblclick="handleDblClick(song)" class="hidden sm:table-cell">
      {{ song.genre || $t('home.unknown') }}
    </td>
    <td id="comments" @dblclick="handleDblClick(song)" class="hidden sm:table-cell">
      <RouterLink
        custom
        :to="{ name: 'song', params: { id: song.docID }, hash: '#comments' }"
        v-slot="{ navigate }"
      >
        <span @click="navigate" class="hover:underline"> {{ song.comment_count }} </span>
      </RouterLink>
    </td>
    <td id="duration" @dblclick="handleDblClick(song)" class="rounded-r-md px-2">
      <div class="flex justify-end items-center gap-4">
        <i class="!hidden sm:!block fa-solid fa-heart text-green-500"></i>
        <i
          class="sm:!hidden fa-solid text-white text-xl"
          :class="{ 'fa-pause': playing, 'fa-play': !playing }"
          @click.prevent="inPlayer ? toggleAudio() : play(song)"
        ></i>

        <p class="hidden sm:block w-9">{{ getDuration() }}</p>
      </div>
    </td>
  </tr>
</template>

<script>
import helper from '@/includes/helper'
import { mapActions } from 'pinia'
import usePlayerStore from '@/stores/player'
import { RouterLink } from 'vue-router'
export default {
  name: 'SongItem',
  props: {
    song: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    inPlayer: {
      type: Boolean,
      required: true
    },
    playing: {
      type: Boolean,
      required: true
    },
    isSelected: {
      type: Boolean,
      required: true
    }
  },
  emits: ['double-click'],
  methods: {
    ...mapActions(usePlayerStore, ['play', 'toggleAudio']),
    getDuration() {
      return helper.formatTime(this.song.duration ?? 0)
    },
    handleDblClick(song) {
      this.$emit('double-click')
      this.play(song)
    }
  },
  components: { RouterLink }
}
</script>

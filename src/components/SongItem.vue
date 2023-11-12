<template>
  <tr
    class="group hover:cursor-pointer"
    :class="{
      'bg-white bg-opacity-30 text-white': isSelected,
      'sm:hover:bg-white sm:hover:bg-opacity-10 sm:hover:text-white secondary-text': !isSelected
    }"
  >
    <td
      class="hidden sm:table-cell px-4 rounded-l-md"
      :class="{ 'text-green-500': inPlayer, 'text-white': !inPlayer }"
    >
      <div class="hidden group-hover:block text-white">
        <i v-show="playing" class="fa-solid fa-pause text-sm" @click.prevent="toggleAudio()"></i>
        <i
          v-show="!playing"
          class="fa-solid fa-play text-xs"
          @click.prevent="inPlayer ? toggleAudio() : play(song)"
        >
        </i>
      </div>
      <p class="group-hover:hidden">{{ index + 1 }}</p>
    </td>
    <td @dblclick="handleDblClick(song)">
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
        <span class="overflow-x-clip text-ellipsis">
          {{ song.artist ? song.artist : 'Unknown artist' }}</span
        >
      </RouterLink>
    </td>
    <td @dblclick="handleDblClick(song)" class="hidden sm:table-cell">
      {{ song.genre ? song.genre : 'Unknown genre' }}
    </td>
    <td @dblclick="handleDblClick(song)" class="hidden sm:table-cell">
      {{ song.comment_count }}
    </td>
    <td @dblclick="handleDblClick(song)" class="rounded-r-md px-4">
      <div class="flex justify-end items-center gap-4">
        <i class="fa-solid fa-heart text-green-500"></i>
        <p class="hidden sm:contents">{{ getDuration() }}</p>
      </div>
    </td>
  </tr>
</template>

<script>
import helper from '@/includes/helper'
import { mapActions } from 'pinia'
import usePlayerStore from '@/stores/player'
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
  }
}
</script>

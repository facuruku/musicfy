<template>
  <tr
    class="group hover:bg-white hover:bg-opacity-10 hover:text-white hover:cursor-pointer rounded-full secondary-text"
  >
    <td :class="{ 'text-green-500': inPlayer, 'text-white': !inPlayer }">
      <p class="hidden group-hover:block">
        <i
          class="fa-solid text-white"
          :class="{ 'fa-pause text-sm': playing, 'fa-play text-xs': !playing }"
        ></i>
      </p>
      <p class="group-hover:hidden">{{ index + 1 }}</p>
    </td>
    <td>
      <RouterLink
        :to="{ name: 'song', params: { id: song.docID } }"
        class="text-white border-b border-b-transparent hover:border-b-white"
      >
        <span :class="{ 'text-white': !inPlayer, 'text-green-500': inPlayer }">
          {{ song.modified_name }}</span
        >
      </RouterLink>
      <span class="block text-sm">{{ song.artist ? song.artist : 'Unknown artist' }}</span>
    </td>
    <td class="hidden sm:table-cell">{{ song.genre ? song.genre : 'Unknown genre' }}</td>
    <td class="hidden sm:table-cell">
      {{ song.comment_count }}
    </td>
    <td class="hidden sm:table-cell">
      <i class="fa-solid fa-heart text-green-500"></i> {{ song.duration }}
    </td>
  </tr>
</template>

<script>
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
    }
  }
}
</script>

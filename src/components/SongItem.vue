<template>
  <tr
    class="md:hover:bg-white md:hover:bg-opacity-10 md:hover:text-white hover:cursor-pointer rounded-full secondary-text"
  >
    <td>{{ index + 1 }}</td>
    <td>
      <span class="text-white"> {{ song.modified_name }}</span>
      <span class="block text-sm">{{ song.artist ? song.artist : 'Unknown artist' }}</span>
    </td>
    <td>{{ song.genre ? song.genre : 'Unknown genre' }}</td>
    <td>{{ song.comment_count }} <i class="fa-solid fa-heart text-green-500 ml-28"></i></td>
    <td>{{ song.duration }}</td>
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
    }
  }
}
</script>

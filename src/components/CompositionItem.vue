<template>
  <div class="border border-gray-200 p-3 mb-4 rounded">
    <div v-show="!showForm">
      <h4 class="inline-block text-2xl font-bold">{{ song.modified_name }}</h4>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-red-600 float-right md:hover:scale-105 md:hover:bg-gray-800"
      >
        <i class="fa fa-times"></i>
      </button>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-white float-right md:hover:scale-105 md:hover:bg-gray-800"
        @click="showForm = true"
      >
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
    </div>
    <div>
      <VeeForm
        v-show="showForm"
        :validation-schema="songSchema"
        :initialValues="initialValues"
        @submit="editSong"
      >
        <div class="mb-3">
          <label class="inline-block mb-2">Song Title</label>
          <VeeField
            name="title"
            type="text"
            class="block w-full py-1.5 px-3 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
            placeholder="Enter Song Title"
          />
          <ErrorMessage class="text-red-600" name="title" />
        </div>
        <div class="mb-3">
          <label class="inline-block mb-2">Artist</label>
          <VeeField
            name="artist"
            type="text"
            class="block w-full py-1.5 px-3 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
            placeholder="Enter Genre"
          />
          <ErrorMessage class="text-red-600" name="artist" />
        </div>
        <div class="mb-3">
          <label class="inline-block mb-2">Genre</label>
          <VeeField
            name="genre"
            type="text"
            class="block w-full py-1.5 px-3 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
            placeholder="Enter Genre"
          />
          <ErrorMessage class="text-red-600" name="genre" />
        </div>
        <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600">Save</button>
        <button
          type="button"
          class="py-1.5 px-3 rounded text-white bg-gray-600"
          @click="showForm = false"
        >
          Go Back
        </button>
      </VeeForm>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompositionItem',
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showForm: false,
      songSchema: {
        title: 'required',
        genre: 'alpha_spaces',
        artist: ''
      },
      initialValues: {
        title: this.song.modified_name,
        artist: this.song.artist,
        genre: this.song.gerne
      }
    }
  },
  methods: {
    editSong(song) {
      console.log('Song to update:', song)
    }
  }
}
</script>

<template>
  <div class="border border-slate-500 p-3 mb-4 rounded">
    <div v-show="!showForm">
      <h4 class="inline-block text-2xl font-bold">{{ song.modified_name }}</h4>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-red-600 float-right md:hover:scale-105 md:hover:bg-gray-800"
        @click.prevent="deleteSong"
        :disabled="in_submission"
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
    <div v-show="showForm">
      <div
        class="text-black text-center font-bold p-4 rounded mb-4"
        v-if="show_alert"
        :class="alert_variant"
      >
        {{ alert_msg }}
      </div>
      <VeeForm :validation-schema="songSchema" :initialValues="initialValues" @submit="editSong">
        <div class="mb-3">
          <label class="inline-block mb-2">Song Title</label>
          <VeeField
            name="modified_name"
            type="text"
            class="block w-full py-1.5 px-3 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
            placeholder="Enter Song Title"
          />
          <ErrorMessage class="text-red-600" name="modified_name" />
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
        <button
          type="submit"
          class="py-1.5 px-3 rounded text-white bg-green-600 md:hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
          :disabled="in_submission"
        >
          Save
        </button>
        <button
          type="button"
          class="ml-2 py-1.5 px-3 rounded text-white bg-gray-600 md:hover:scale-105 disabled:opacity-50 disabled:cursor-pointer"
          @click.prevent="showForm = false"
          :disabled="in_submission"
        >
          Go Back
        </button>
      </VeeForm>
    </div>
  </div>
</template>

<script>
import { songsCollection, storage } from '@/includes/firebase'

export default {
  name: 'CompositionItem',
  props: {
    song: {
      type: Object,
      required: true
    },
    updateSong: {
      type: Function,
      required: true
    },
    removeSong: {
      type: Function,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      showForm: false,
      songSchema: {
        modified_name: 'required',
        genre: 'alpha_spaces',
        artist: ''
      },
      initialValues: {
        modified_name: this.song.modified_name,
        artist: this.song.artist,
        genre: this.song.gerne
      },
      in_submission: false,
      show_alert: false,
      alert_variant: 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%',
      progress_variant: 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%',
      error_variant: 'bg-red-500',
      success_variant: 'bg-[#1ed760]',
      alert_msg: '',
      initial_msg: 'Please wait! Updating song. ',
      success_msg: 'Success! Your song info was updated.'
    }
  },
  methods: {
    async deleteSong() {
      this.in_submission = true

      const storageRef = storage.ref()
      const songRef = storageRef.child(`songs/${this.song.original_name}`)

      await songRef
        .delete()
        .then(() => {})
        .catch((error) => {
          console.error(error)
          this.in_submission = false
        })

      await songsCollection
        .doc(this.song.docID)
        .delete()
        .then(() => {})
        .catch((error) => {
          console.error(error)
          this.in_submission = false
        })

      this.removeSong(this.index) //removes from songList

      this.in_submission = false
    },
    async editSong(values) {
      this.initAlert()

      try {
        if (!this.hasChanges(values)) {
          return
        }
        await songsCollection.doc(this.song.docID).update({
          modified_name: values.modified_name,
          artist: values.artist ? values.artist : '',
          gerne: values.gerne ? values.genre : ''
        })
      } catch (error) {
        this.alert_variant = this.error_variant
        this.alert_msg = 'Something went wrong! Try again later.'
        return
      } finally {
        this.in_submission = false
      }

      this.updateSong(this.index, values)

      this.alert_variant = this.success_variant
      this.alert_msg = this.success_msg

      setTimeout(() => {
        this.show_alert = false
        this.showForm = false
      }, 1000)
    },
    initAlert() {
      this.show_alert = true
      this.in_submission = true
      this.alert_variant = this.progress_variant
      this.alert_msg = this.initial_msg
    },
    hasChanges(values) {
      for (const key in values) {
        if (values[key] !== this.song[key]) {
          return true
        }
      }

      return false
    }
  }
}
</script>

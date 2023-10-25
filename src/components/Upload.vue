<template>
  <div class="col-span-1">
    <div
      class="bg-zinc-900 rounded-lg shadow-inner shadow-slate-500 relative flex flex-col text-white"
    >
      <div class="px-6 pt-6 pb-5 font-bold border-b border-slate-400">
        <span class="card-title">Upload</span>
        <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
      </div>
      <div class="p-6">
        <!-- Upload Dropbox -->
        <div
          class="w-full px-10 py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-zinc-700 hover:border-solid"
          :class="{ 'bg-zinc-700 text-white border border-solid': is_dragover }"
          @drag.prevent.stop=""
          @dragstart.prevent.stop=""
          @dragend.prevent.stop="is_dragover = false"
          @dragover.prevent.stop="is_dragover = true"
          @dragenter.prevent.stop="is_dragover = true"
          @dragleave.prevent.stop="is_dragover = false"
          @drop.prevent.stop="upload($event)"
          @click.prevent="openInputFile"
        >
          <h5>Drop your mp3 files here <span class="block text-sm">Or, click to browse</span></h5>
        </div>
        <input
          type="file"
          multiple
          ref="inputFile"
          @change="upload($event)"
          class="hidden w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:font-semibold file:bg-gray-300 hover:file:bg-green-400 bg-gray-800 hover:cursor-pointer"
        />
        <hr class="my-6 border-slate-400" />
        <!-- Progess Bars -->
        <div class="mb-4" v-for="upload in uploads" :key="upload.name">
          <!-- File Name -->
          <div class="font-bold text-sm" :class="upload.text_class">
            <i :class="upload.icon"></i>{{ upload.name }}
          </div>
          <div class="flex h-4 overflow-hidden bg-gray-200 rounded">
            <!-- Inner Progress Bar -->
            <div
              class="transition-all"
              :class="upload.variant"
              :style="{ width: upload.current_progress + '%' }"
            ></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { storage, auth, songsCollection } from '@/includes/firebase'

export default {
  name: 'Upload',
  data() {
    return {
      is_dragover: false,
      uploads: []
    }
  },
  methods: {
    upload($event) {
      this.is_dragover = false

      const files = $event.dataTransfer ? [...$event.dataTransfer.files] : [...$event.target.files]

      files.forEach(async (file) => {
        if (file.type != 'audio/mpeg') {
          alert('file type invalid')
          return
        }
        const storageRef = storage.ref() // musicfy-53b66.appspot.com
        const songsFolderRef = storageRef.child('songs') // musicfy-53b66.appspot.com/songs
        const songsRef = songsFolderRef.child(`${file.name}`) // musicfy-53b66.appspot.com/songs/example.mp3

        const fileExists = await this.fileExists(songsFolderRef, file)

        if (fileExists) {
          alert('Song already existing')
          return
        }

        const task = songsRef.put(file)

        //TODO get metadata from mp3 file (artist,album...)

        const uploadIndex =
          this.uploads.push({
            task,
            current_progress: 0,
            name: file.name,
            variant: 'progress-bar bg-blue-400',
            icon: 'fa-solid fa-spinner fa-spin',
            text_class: ''
          }) - 1

        task.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.uploads[uploadIndex].current_progress = progress
          },
          (error) => {
            this.uploads[uploadIndex].variant = 'bg-red-400'
            this.uploads[uploadIndex].icon = 'fas fa-times'
            this.uploads[uploadIndex].text_class = 'text-red-400'
            console.error('Error uploading the song', error)
          },
          async () => {
            //success

            const song = {
              uid: auth.currentUser.uid,
              displayName: auth.currentUser.displayName,
              original_name: task.snapshot.ref.name,
              modified_name: task.snapshot.ref.name,
              gerne: '',
              artist: '',
              comment_count: 0
            }

            song.url = await task.snapshot.ref.getDownloadURL()
            await songsCollection.add(song)

            this.uploads[uploadIndex].variant = 'bg-green-400'
            this.uploads[uploadIndex].icon = 'fas fa-check'
            this.uploads[uploadIndex].text_class = 'text-green-400'

            //remove from list when success after 1s
            setTimeout(() => {
              this.uploads.splice(uploadIndex, 1)
            }, 1000)
          }
        )
      })
    },
    async fileExists(folderRef, file) {
      try {
        const result = await folderRef.listAll()
        return result.items.some((item) => item.name === file.name)
      } catch (error) {
        console.error('Error al verificar la existencia del archivo:', error)
        return false // En caso de error, asumimos que el archivo no existe
      }
    },
    cancelUploads() {
      this.uploads.forEach((upload) => {
        upload.task.cancel()
      })
    },
    openInputFile() {
      this.$refs.inputFile.click()
    }
  },
  beforeUnmount() {
    this.uploads.forEach((upload) => {
      upload.task.cancel()
    })
  }
}
</script>

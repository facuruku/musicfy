<template>
  <main class="col-span-1">
    <div
      class="bg-zinc-900 rounded-lg shadow-inner shadow-slate-500 relative flex flex-col text-white"
    >
      <div class="px-6 pt-6 pb-5 font-bold border-b border-slate-400">
        <span class="card-title">{{ $t('manage.upload') }}</span>
        <i class="fas fa-upload float-right text-green-400 text-2xl"></i>
      </div>
      <div class="p-6">
        <!-- Upload Dropbox -->
        <div
          class="w-full px-5 py-10 md:px-10 lg:py-20 rounded text-center cursor-pointer border border-dashed border-gray-400 text-gray-400 transition duration-500 hover:text-white hover:bg-zinc-700 hover:border-solid"
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
          <h5>
            {{ $t('manage.dropHintMsg1')
            }}<span class="block text-sm">{{ $t('manage.dropHintMsg2') }}</span>
          </h5>
        </div>
        <input
          type="file"
          multiple
          ref="inputFile"
          @change="upload($event)"
          class="hidden w-full text-sm file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:font-semibold file:bg-green-500 hover:file:bg-green-400 bg-gray-800 hover:cursor-pointer"
        />
        <hr class="my-6 border-slate-400" />
        <!-- Progess Bars -->
        <div class="mb-4" v-for="upload in uploads" :key="upload.name" :class="upload.hide_class">
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
  </main>
</template>
<script>
import { storage, auth, songsCollection, usersCollection, FieldValue } from '@/includes/firebase'

export default {
  name: 'Upload',
  props: {
    addSong: {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      is_dragover: false,
      uploads: []
    }
  },
  methods: {
    /* TODO refactor this method split in smaller pieces */
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
        const songRef = songsFolderRef.child(`${file.name}`) // musicfy-53b66.appspot.com/songs/example.mp3

        const fileExists = await this.fileExists(file)

        if (fileExists) {
          alert('Song already existing:', file.name)
          return
        }

        const task = songRef.put(file)

        const uploadIndex =
          this.uploads.push({
            task,
            current_progress: 0,
            name: file.name,
            variant: 'progress-bar bg-blue-400',
            icon: 'fa-solid fa-spinner fa-spin',
            text_class: '',
            hide_class: ''
          }) - 1

        task.on(
          'state_changed',
          (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.uploads[uploadIndex].current_progress = progress
          },
          () => {
            this.uploads[uploadIndex].variant = 'bg-red-400'
            this.uploads[uploadIndex].icon = 'fas fa-times'
            this.uploads[uploadIndex].text_class = 'text-red-400'
            console.error('Error uploading the song')
            return
          },
          async () => {
            //success

            //TODO #metadata (music-metadata-browser) get metadata from mp3 file (artist,album...)

            const downloadURL = await task.snapshot.ref.getDownloadURL()

            const audio = new Audio(downloadURL)

            const audioDuration = await new Promise((resolve) => {
              audio.addEventListener('loadedmetadata', () => {
                resolve(audio.duration)
              })
            })
            const song = {
              uid: auth.currentUser.uid,
              displayName: auth.currentUser.displayName,
              original_name: task.snapshot.ref.name,
              modified_name: this.getFileNameWithoutExtension(task.snapshot.ref.name),
              genre: '',
              artist: '',
              comment_count: 0,
              duration: audioDuration,
              url: downloadURL
            }

            let songDocRef = ''

            await songsCollection
              .add(song)
              .then((docRef) => {
                songDocRef = docRef
                let userDocRef = usersCollection.doc(auth.currentUser.uid)

                userDocRef.update({
                  songsCount: FieldValue.increment(1)
                })
              })
              .catch(async () => {
                this.uploads[uploadIndex].variant = 'bg-red-400'
                this.uploads[uploadIndex].icon = 'fas fa-times'
                this.uploads[uploadIndex].text_class = 'text-red-400'
                console.error('Error uploading the song')
                await songRef.delete()

                return
              })

            const songSnapshot = await songDocRef.get()

            //added to songsList
            this.addSong(songSnapshot)

            //Upload progress success style
            this.uploads[uploadIndex].variant = 'bg-green-400'
            this.uploads[uploadIndex].icon = 'fas fa-check'
            this.uploads[uploadIndex].text_class = 'text-green-400'

            //added class to remove from view when success after 1s
            setTimeout(() => {
              this.uploads[uploadIndex].hide_class = 'hidden'
            }, 1000)
          }
        )
      })
    },
    getFileNameWithoutExtension(fileName) {
      return fileName.replace(/\.[^.]+$/, '')
    },
    async fileExists(file) {
      const snapshot = await songsCollection
        .where('uid', '==', auth.currentUser.uid)
        .where('original_name', '==', file.name)
        .get()
      return snapshot.size !== 0
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
    this.cancelUploads()
  }
}
</script>

import { defineStore } from 'pinia'
import { Howl } from 'howler'

export default defineStore('player', {
  state: () => ({
    currentSong: {},
    sound: {}
  }),
  actions: {
    async play(song) {
      this.currentSong = song

      if (this.sound.playing) {
        this.sound.stop()
      }

      this.sound = new Howl({
        src: [song.url],
        html5: true,
        volume: '0.1'
      })

      this.sound.play()
    },
    async toggleAudio() {
      if (!this.sound.playing) {
        return
      }

      if (this.sound.playing()) {
        this.sound.pause()
      } else {
        this.sound.play()
      }
    }
  },
  getters: {
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing()
      }
      return false
    },
    currentSongName: (state) => {
      return state.currentSong.modified_name
    },
    currentSongArtist: (state) => {
      return state.currentSong.artist ? state.currentSong.artist : 'Unknown Artist'
    }
  }
})

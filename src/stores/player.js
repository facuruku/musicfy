import { defineStore } from 'pinia'
import { Howl } from 'howler'
import helper from '@/includes/helper'

export default defineStore('player', {
  state: () => ({
    currentSong: {},
    sound: {},
    seek: '0:00', // CurrentPosition is called seek in Howl
    duration: '00:00'
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

      this.sound.on('play', () => {
        requestAnimationFrame(this.progress)
      })
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
    },
    progress() {
      this.seek = helper.formatTime(this.sound.seek())
      this.duration = helper.formatTime(this.sound.duration())

      if (this.sound.playing()) {
        requestAnimationFrame(this.progress)
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

import { defineStore } from 'pinia'
import { Howl } from 'howler'
import helper from '@/includes/helper'

export default defineStore('player', {
  state: () => ({
    currentSong: {},
    sound: {},
    seek: '0:00', // CurrentPosition is called seek in Howl
    duration: '0:00',
    playerProgress: 0,
    volume: 50
  }),
  actions: {
    async play(song) {
      if (this.sound instanceof Howl) {
        this.sound.unload()
      }

      this.currentSong = song

      this.sound = new Howl({
        src: [song.url],
        html5: true,
        volume: this.volume / 100
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

      this.playerProgress = (this.sound.seek() / this.sound.duration()) * 100

      if (this.sound.playing()) {
        requestAnimationFrame(this.progress)
      }
    },
    updateVolume(newVolume) {
      if (!this.sound.playing) {
        return
      }
      this.sound.volume(newVolume / 100)
    },
    updateSeek(newValue) {
      if (!this.sound.playing) {
        return
      }

      const percentage = newValue / 100

      const seconds = this.sound.duration() * percentage

      this.sound.seek(seconds)
      this.sound.once('seek', this.progress)
    }
  },
  getters: {
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing()
      }
      return false
    }
  }
})

import { defineStore } from 'pinia'
import { Howl } from 'howler'
import { formatTime } from '@/includes/helper'

export default defineStore('player', {
  state: () => ({
    currentSong: {},
    sound: {},
    seek: '0:00', // CurrentPosition is called seek in Howl
    displayDuration: '0:00',
    duration: 0,
    playerProgress: 0,
    volume: 50,
    isDragging: false
  }),
  actions: {
    async play(song) {
      if (this.sound instanceof Howl) {
        this.sound.unload()
      }

      this.currentSong = song
      this.isDragging = false

      let songUrl = song.url

      // If offline take localStorage song
      if (!navigator.onLine && localStorage.getItem(song.uid)) {
        songUrl = localStorage.getItem(song.uid)
      }

      if (!songUrl) {
        console.error('No song found')
        return
      }

      this.sound = new Howl({
        src: [songUrl],
        html5: true,
        volume: this.volume / 100 //0-1
      })

      this.sound.play()

      this.sound.on('play', () => {
        this.duration = this.sound.duration()
        this.displayDuration = formatTime(this.duration)
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
      if (!this.isDragging) {
        this.seek = formatTime(this.sound.seek())
        this.playerProgress = (this.sound.seek() / this.sound.duration()) * 100
      }

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
      this.sound.once('seek', () => {
        requestAnimationFrame(this.progress)
      })
    },
    setIsDragging(isDragging) {
      this.isDragging = isDragging
    }
  },
  getters: {
    playing: (state) => {
      if (state.sound.playing) {
        return state.sound.playing()
      }
      return false
    },
    getCurrentSong: (state) => {
      return state.currentSong
    },
    isPlaying: (state) => {
      return state.playing
    },
    playerHasSong: (state) => {
      return state.sound.playing
    }
  }
})

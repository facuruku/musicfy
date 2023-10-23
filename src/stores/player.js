import { defineStore } from 'pinia'

export default defineStore('player', {
  state: () => ({
    isPlaying: false
  }),
  actions: {
    play(song) {
      console.log('Now playing ' + song)
      this.isPlaying = true
    },
    pause() {
      console.log('Pause song')
      this.isPlaying = false
    }
  }
})

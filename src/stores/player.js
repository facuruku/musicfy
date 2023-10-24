import { defineStore } from 'pinia'

export default defineStore('player', {
  state: () => ({
    isPlaying: false
  }),
  actions: {
    play() {
      this.isPlaying = true
    },
    pause() {
      this.isPlaying = false
    }
  }
})

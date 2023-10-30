export default {
  formatTime(time) {
    const minutes = Math.floor(time / 60) || 0
    const seconds = Math.round(time - minutes * 60 || 0)

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
}

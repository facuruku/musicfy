export default {
  formatTime(time) {
    const totalSeconds = Math.floor(time)
    const minutes = Math.floor(totalSeconds / 60) || 0
    const seconds = totalSeconds % 60

    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }
}

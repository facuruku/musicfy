import { t } from '@/includes/i18n.js'

export function formatTime(time) {
  const totalSeconds = Math.floor(time)
  const minutes = Math.floor(totalSeconds / 60) || 0
  const seconds = totalSeconds % 60

  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

export function calculateTimeAgo(commentDate) {
  const today = new Date()

  const differenceMS = today - new Date(commentDate)

  const seconds = Math.floor(differenceMS / 1000)
  if (seconds < 60) {
    return t('song.secondsAgo', { count: seconds })
  }

  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) {
    return t('song.minutesAgo', { count: minutes })
  }

  const hours = Math.floor(minutes / 60)
  if (hours < 24) {
    return t('song.hoursAgo', { count: hours })
  }

  const days = Math.floor(hours / 24)
  if (days < 30) {
    return t('song.daysAgo', { count: days })
  }

  const months = Math.floor(days / 30)
  if (months < 12) {
    return t('song.monthsAgo', { count: months })
  }

  const years = Math.floor(months / 12)
  return t('song.yearsAgo', { count: years })
}

export function greeting() {
  const now = new Date()
  const hour = now.getHours()

  if (hour >= 6 && hour < 12) {
    return t('home.morningGreeting')
  } else if (hour >= 12 && hour < 18) {
    return t('home.afternoonGreeting')
  } else {
    return t('home.nightGreeting')
  }
}

import { createI18n } from 'vue-i18n'
import en from '@/locales/en.json'
import es from '@/locales/es.json'

export default createI18n({
  locale: 'es',
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})

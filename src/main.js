import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from '@/App.vue'
import router from '@/router'
import VeeValidatePlugin from '@/includes/validation'
import { auth } from '@/includes/firebase'
import Slider from 'primevue/slider'
import Tooltip from 'primevue/tooltip'
import 'primevue/resources/themes/arya-green/theme.css'
import Icon from '@/directives/icon'
import { i18n } from '@/includes/i18n'
import { useRegisterSW } from 'virtual:pwa-register/vue'
import GlobalComponents from '@/includes/_globals'
import progressBar from '@/includes/progressBar'
import { inject } from '@vercel/analytics'

import '@/assets/base.css'
import '@/assets/main.css'
import 'nprogress/nprogress.css'

useRegisterSW({ immediate: true })

progressBar(router)

inject({
  mode: 'production'
})

let app

auth.onAuthStateChanged(() => {
  if (!app) {
    app = createApp(App)

    app.use(createPinia())
    app.use(router)
    app.use(VeeValidatePlugin)
    app.use(i18n)
    app.use(GlobalComponents)
    app.directive('icon', Icon)
    app.directive('tooltip', Tooltip)
    app.component('Slider', Slider)

    app.mount('#app')
  }
})

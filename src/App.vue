<template>
  <AppHeader />
  <div class="relative min-h-screen">
    <section
      class="absolute inset-0 min-h-screen bg-gradient-to-t from-zinc-900 from-50% to-[#4a368e] to-90% w-full"
    ></section>
    <RouterView />
  </div>
  <AppAuth />
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppAuth from '@/components/AppAuth.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: { AppHeader, AppAuth, RouterView },
  computed: {
    ...mapWritableState(useUserStore, ['userLoggedIn'])
  },
  created() {
    if (auth.currentUser) {
      this.userLoggedIn = true
    }
  }
}
</script>

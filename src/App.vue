<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />
    <RouterView v-slot="{ Component }" class="overflow-auto">
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
    <AppPlayer v-if="userLoggedIn" />
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader.vue'
import AppPlayer from '@/components/AppPlayer.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: { AppHeader, RouterView, AppPlayer },
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

<style scoped>
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 200ms ease-out;
}

.fade-leave-to {
  transition: opacity 200ms ease-out;
  opacity: 0;
}
</style>

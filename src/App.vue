<template>
  <AppHeader />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </Transition>
  </RouterView>
  <AuthModal />
</template>
<!-- TODO optional make header change style while scroll -->

<script>
import AppHeader from '@/components/AppHeader.vue'
import AuthModal from '@/components/AuthModal.vue'
import { mapWritableState } from 'pinia'
import useUserStore from '@/stores/user'
import { auth } from '@/includes/firebase'
import { RouterView } from 'vue-router'

export default {
  name: 'App',
  components: { AppHeader, AuthModal, RouterView },
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

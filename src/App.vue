<template>
  <div class="wrapper">
    <AppHeader class="Header rounded-b-xl" />
    <RouterView v-slot="{ Component }" class="Main rounded-xl">
      <Transition name="fade" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </RouterView>
    <AppPlayer v-if="userLoggedIn" class="Footer rounded-t-xl" />
    <div v-else class="Footer bg-black"></div>
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
.wrapper {
  display: grid;
  background-color: black;
  height: 100dvh;
  grid-template-columns: 1fr;
  grid-template-rows: 0.2fr 2.4fr 0.4fr;
  gap: 0px 0px;
  grid-template-areas:
    'Header Header Header'
    'Main Main Main'
    'Player Player Player';
}

.Header {
  grid-area: Header;
}
.Main {
  grid-area: Main;
  overflow-y: auto;
}
.Player {
  grid-area: Player;
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 100ms ease-out;
}

.fade-leave-to {
  transition: opacity 250ms ease-out;
  opacity: 0;
}
</style>

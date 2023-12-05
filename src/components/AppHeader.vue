<!-- TODO Create burguer menu for mobile devices -->
<template>
  <!-- Header -->
  <header
    id="header"
    class="fixed top-0 left-0 z-40 w-full bg-black font-circular-black font-semibold"
  >
    <nav class="flex items-center justify-between py-5 px-10">
      <!-- Home link -->
      <RouterLink
        class="text-[#1ed760] font-circular-thin text-2xl justify-center hover:scale-105"
        :to="{ name: 'home' }"
        exact-active-class="no-active"
      >
        Musicfy
      </RouterLink>

      <!-- Primary Navigation -->
      <ul class="flex gap-2 items-center text-white text-base">
        <!-- Navigation Links -->

        <!-- About page -->
        <li class="md:hover:scale-105">
          <RouterLink class="flex items-center gap-1" :to="{ name: 'about' }">
            <i class="fa-regular fa-circle-question"></i>
            <span class="hidden md:block">{{ $t('header.about') }}</span>
          </RouterLink>
        </li>

        <!-- Settings icon -->
        <li v-show="this.userLoggedIn" class="md:hover:scale-105">
          <RouterLink class="flex items-center gap-1" :to="{ name: 'manage' }"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span class="">{{ $t('header.manage') }}</span>
          </RouterLink>
        </li>

        <!-- User icon -->
        <li class="md:hover:scale-105">
          <template v-if="!userLoggedIn">
            <a class="flex items-center gap-1" href="#" @click.prevent="toggleAuthModal">
              <i class="fa-regular fa-user"></i>
              <span class="hidden md:block">{{ $t('header.login') }}</span>
            </a>
          </template>
          <template v-else>
            <a class="flex gap-1 items-center" href="#" @click.prevent="signOut()">
              <i class="fa-regular fa-user"></i>
              <span class="hidden md:block">{{ $t('header.logout') }}</span>
            </a>
          </template>
          <div></div>
        </li>

        <!-- Install app -->
        <li class="md:hover:scale-105">
          <a
            class="flex items-center gap-1"
            href="https://www.spotify.com/es/download/"
            target="_blank"
          >
            <i class="fa-regular fa-circle-down"></i>
            <span>{{ $t('header.install') }}</span>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapState, mapWritableState, mapActions } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    ...mapWritableState(useModalStore, ['isOpen']), // We can map the property we need and not the entire store
    ...mapState(useUserStore, ['userLoggedIn']) // mapState is readonly
  },
  methods: {
    ...mapActions(useUserStore, { firebaseSignOut: 'signOut' }),
    signOut() {
      this.firebaseSignOut()
      if (this.$route.meta.requiresAuth) this.$router.push({ name: 'home' })
      else this.$router.go()
    },
    toggleAuthModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

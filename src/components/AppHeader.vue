<template>
  <!-- Header -->
  <!-- TODO fix responsive for mobile phones (mobileFirst) -->
  <header id="header" class="fixed top-0 z-20 w-full font-circular-black bg-neutral-900">
    <nav class="flex items-center justify-between py-5 px-10">
      <!-- Home link -->
      <RouterLink class="text-[#1ed760] font-bold text-2xl justify-center hover:scale-105" to="/">
        Musicfy
      </RouterLink>

      <!-- TODO Create burguer menu for mobile devices -->
      <!-- Primary Navigation -->
      <ul class="flex flex-row gap-2 items-center text-white text-sm">
        <!-- Navigation Links -->

        <!-- About page -->
        <li class="md:hover:scale-105">
          <RouterLink class="flex items-center" to="/about"
            ><span
              ><i class="fa-solid fa-record-vinyl" style="color: #ffffff"></i>About</span
            ></RouterLink
          >
        </li>

        <!-- User icon -->
        <li class="md:hover:scale-105">
          <template v-if="!userStore.userLoggedIn">
            <a class="flex items-center" href="#" @click.prevent="toggleAuthModal">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span class="hidden md:block">Login/Register</span>
            </a>
          </template>
          <template v-else>
            <a class="flex gap-1 items-center" href="#" @click.prevent="userStore.signOut">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
              <span class="hidden md:block">Logout</span>
            </a>
          </template>
          <div></div>
        </li>

        <!-- Settings icon -->
        <li v-show="userStore.userLoggedIn" class="md:hover:scale-105">
          <RouterLink class="" to="/manage"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
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
          </RouterLink>
        </li>

        <!-- Install app -->
        <li class="md:hover:scale-105">
          <a
            class="flex gap-1 items-center"
            href="https://www.spotify.com/es/download/"
            target="_blank"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12.75l3 3m0 0l3-3m-3 3v-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import { mapStores, /* mapState,*/ mapWritableState } from 'pinia'
import useModalStore from '@/stores/modal'
import useUserStore from '@/stores/user'

export default {
  name: 'AppHeader',
  computed: {
    ...mapStores(useModalStore, useUserStore),
    ...mapWritableState(useModalStore, ['isOpen']) // We can map the property we need and not the entire store
    //...mapState(useModalStore, ['isOpen']) // mapState is readonly
  },
  methods: {
    toggleAuthModal() {
      this.isOpen = !this.isOpen
    }
  }
}
</script>

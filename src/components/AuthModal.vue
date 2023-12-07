<template>
  <!-- Auth Modal -->
  <div class="grid place-content-center min-h-screen" id="modal">
    <div
      class="flex flex-col bg-neutral-950 rounded-lg w-96 text-left text-white overflow-hidden py-10 px-12 shadow-xl transform transition-all"
    >
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <!--Title-->
      <p class="text-2xl font-bold pb-4">{{ $t('auth.account') }}</p>

      <!-- Tabs -->
      <ul class="flex flex-wrap mb-4 gap-4 pb-4">
        <li class="flex-auto text-center">
          <button
            class="w-full rounded-full border border-gray-300 p-2 transition font-bold"
            @click.prevent="handleLoginTab()"
            :class="{
              'text-black bg-[#1ed760]': tab === 'login',
              'hover:scale-105 hover:text-[#1ed760]': tab === 'register'
            }"
          >
            {{ $t('auth.tab.login') }}
          </button>
        </li>
        <li class="flex-auto text-center">
          <button
            class="w-full rounded-full border border-gray-300 p-2 transition font-bold"
            @click.prevent="handleRegisterTab()"
            :class="{
              'text-black bg-[#1ed760]': tab === 'register',
              'hover:scale-105 hover:text-[#1ed760]': tab === 'login'
            }"
          >
            {{ $t('auth.tab.register') }}
          </button>
        </li>
      </ul>

      <!-- Login Form -->
      <LoginForm v-if="tab === 'login'" @login-success="handleLoginSuccess()" />

      <!-- Registration Form -->
      <RegisterForm v-else @register-success="handleRegisterSuccess()" />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue'
import RegisterForm from '@/components/RegisterForm.vue'

export default {
  name: 'AuthModal',
  components: { LoginForm, RegisterForm },
  data() {
    return {
      tab: 'login'
    }
  },
  methods: {
    handleLoginTab() {
      this.tab = 'login'
      this.$nextTick(() => document.getElementById('emailField').focus())
    },
    handleRegisterTab() {
      this.tab = 'register'
      this.$nextTick(() => document.getElementById('nameField').focus())
    },
    handleLoginSuccess() {
      this.$router.push({ name: 'home' })
    },
    handleRegisterSuccess() {
      //TODO may remove if not necessary
    }
  }
}
</script>

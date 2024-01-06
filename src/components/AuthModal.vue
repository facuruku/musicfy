<!-- Auth Modal -->
<template>
  <main class="grid justify-center items-center sm:p-2 h-full bg-gradient" id="modal">
    <div
      class="flex flex-col justify-center bg-black sm:rounded-lg w-96 h-full sm:h-auto text-left text-white py-10 px-12 md:shadow-lg shadow-white transform transition-all"
    >
      <!-- Add margin if you want to see some of the overlay behind the modal-->
      <!--Title-->
      <p class="text-2xl font-bold pb-4">{{ $t('auth.account') }}</p>

      <!-- Tabs -->
      <ul class="flex flex-wrap mb-4 gap-4">
        <li class="flex-auto text-center">
          <button
            class="w-full rounded-full p-2 transition font-bold"
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
  </main>
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
      this.$nextTick(() => document.getElementById('email').focus())
    },
    handleRegisterTab() {
      this.tab = 'register'
      this.$nextTick(() => document.getElementById('name').focus())
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

<template>
  <div
    class="text-black text-center font-bold p-4 rounded mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>

  <!-- Login Form -->
  <VeeForm class="flex flex-col gap-2" :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <VeeField
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded-lg"
        placeholder="your@email.com"
        autocomplete="email"
      >
        <!-- TODO: Add email autofocus -->
      </VeeField>
      <ErrorMessage class="text-red-600 block" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <VeeField name="password" :bails="false" v-slot="{ field, errors }">
        <div class="flex items-center">
          <input
            v-bind="field"
            :type="togglePassword ? 'text' : 'password'"
            class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded-lg"
            placeholder="Password"
            autocomplete="current-password"
          />
          <i
            @click="togglePassword = !togglePassword"
            class="absolute -right-0 mr-6 p-3 hover:cursor-pointer hover:scale-110"
            :class="{
              'fa-regular fa-eye-slash': togglePassword,
              'fa-regular fa-eye': !togglePassword
            }"
          />
        </div>

        <ErrorMessage v-bind="errors" class="text-red-600 block" name="password" />
      </VeeField>
    </div>
    <button
      type="submit"
      class="block w-2/5 self-center bg-[#1ed760] text-black font-bold py-2 px-3 rounded-full transition hover:scale-105"
      :disabled="login_in_submission"
    >
      Login
    </button>
  </VeeForm>
</template>

<script>
import { mapActions } from 'pinia'
import useUserStore from '@/stores/user'

export default {
  name: 'LoginForm',
  data() {
    return {
      tab: 'login',
      loginSchema: {
        email: 'required|email',
        password: 'required'
      },
      togglePassword: false,
      login_in_submission: false,
      login_show_alert: false,
      login_alert_variant: 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%',
      login_alert_msg: 'Please wait! Your account is being created. '
    }
  },
  methods: {
    ...mapActions(useUserStore, ['authenticate']),

    async login(values) {
      this.login_in_submission = true
      this.login_show_alert = true
      this.login_alert_variant = 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%'
      this.login.login_alert_msg = 'Please wait! Logging in.'

      try {
        await this.authenticate(values)
      } catch (error) {
        this.login_in_submission = false
        this.login_alert_variant = 'bg-red-500'
        this.login_alert_msg = `User doesn't exist or password is incorrect.`
        return
      }

      this.login_alert_variant = 'bg-[#1ed760]'
      this.login_alert_msg = 'Success! Login completed.'
      window.location.reload()
    }
  }
}
</script>

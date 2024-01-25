<template>
  <div
    class="text-black text-center font-bold p-4 rounded mb-4"
    v-if="login_show_alert"
    :class="login_alert_variant"
  >
    {{ login_alert_msg }}
  </div>

  <!-- Login Form -->
  <VeeForm
    class="flex flex-col gap-2"
    :validation-schema="loginSchema"
    @submit="login"
    ref="loginForm"
  >
    <!-- Email -->
    <div class="mb-3">
      <label for="email" class="inline-block mb-2">Email</label>
      <VeeField
        id="email"
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded-lg"
        :placeholder="$t('auth.form.emailPlaceholder')"
        autocomplete="email"
      >
      </VeeField>
      <ErrorMessage class="text-red-600 block" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label for="password" class="inline-block mb-2">{{ $t('auth.form.passwordLabel') }}</label>
      <VeeField name="password" :bails="false" v-slot="{ field, errors }">
        <div class="flex items-center">
          <input
            v-bind="field"
            :type="togglePassword ? 'text' : 'password'"
            class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded-lg"
            :placeholder="$t('auth.form.passwordLabel')"
            autocomplete="current-password"
          />
          <i
            @click="togglePassword = !togglePassword"
            class="absolute -right-0 mr-12 p-3 hover:cursor-pointer hover:scale-110"
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
      class="block w-2/5 self-center bg-[#1ed760] text-black font-bold py-2 px-3 mb-3 rounded-full transition hover:scale-105"
      :disabled="login_in_submission"
    >
      <i v-if="login_in_submission" class="fa-solid fa-spinner fa-spin"></i>
      <span v-else>{{ $t('auth.button.login') }}</span>
    </button>
    <div class="text-center underline">
      <RouterLink :to="{ name: 'resetPassword' }">
        <span>{{ $t('auth.button.forgotPassword') }}</span>
      </RouterLink>
    </div>
  </VeeForm>
</template>

<script>
import { mapActions } from 'pinia'
import useUserStore from '@/stores/user'
import { ErrorMessage, Field as VeeField, Form as VeeForm } from 'vee-validate'
import { RouterLink } from 'vue-router'

export default {
  name: 'LoginForm',
  emits: ['login-success'],
  components: {
    ErrorMessage,
    VeeField,
    VeeForm,
    RouterLink
  },
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
      login_alert_msg: 'Please wait! Logging in.'
    }
  },
  methods: {
    ...mapActions(useUserStore, ['authenticate']),

    async login(values) {
      this.login_in_submission = true
      this.login_show_alert = true
      this.login_alert_variant = 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%'
      this.login_alert_msg = 'Please wait! Logging in.'

      try {
        await this.authenticate(values)

        this.$refs.loginForm.resetForm()
        this.login_show_alert = false
        this.login_in_submission = false
        this.$emit('login-success')
      } catch (error) {
        this.login_in_submission = false
        this.login_alert_variant = 'bg-red-500'
        this.login_alert_msg = `User doesn't exist or password is incorrect.`
      }
    }
  }
}
</script>

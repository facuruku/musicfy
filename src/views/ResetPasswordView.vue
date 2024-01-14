<template>
  <main class="grid place-content-center font-circular-black">
    <div class="flex flex-col gap-6 items-center justify-center text-center w-full">
      <h1 class="text-5xl">{{ $t('resetPassword.title') }}</h1>
      <p v-if="!emailSent" class="w-[90dvw] sm:w-[30rem] secondary-text font-circular-thin">
        {{ $t('resetPassword.description') }}
      </p>
      <p v-else class="w-full sm:w-[30rem] secondary-text font-circular-thin">
        {{ $t('resetPassword.emailSentMsg') }}
      </p>
      <VeeForm
        v-if="!emailSent"
        class="flex flex-col items-center gap-6"
        :validation-schema="resetPwdSchema"
        @submit="resetPwd"
      >
        <div class="flex flex-col gap-2 items-start">
          <label for="emailField">{{ $t('resetPassword.form.emailLabel') }}</label>
          <VeeField
            id="emailField"
            name="email"
            type="email"
            class="w-[90dvw] sm:w-[30rem] py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded-lg"
            :placeholder="$t('auth.form.emailPlaceholder')"
            autocomplete="email"
          >
          </VeeField>
          <ErrorMessage class="text-red-600 block" name="email" />
        </div>
        <p v-if="error" class="text-red-500">
          <i class="fa-solid fa-circle-exclamation"> </i>{{ $t('resetPassword.form.error') }}
        </p>
        <button
          type="submit"
          class="block w-2/5 self-center bg-[#1ed760] text-black font-bold py-2 px-3 mb-3 rounded-full transition hover:scale-105"
        >
          {{ $t('resetPassword.form.button') }}
        </button>
      </VeeForm>
    </div>
  </main>
</template>

<script>
import { ErrorMessage, Field as VeeField, Form as VeeForm } from 'vee-validate'
import useUserStore from '@/stores/user'
import { mapActions } from 'pinia'

export default {
  name: 'ResetPwdView',
  components: {
    ErrorMessage,
    VeeField,
    VeeForm
  },
  data() {
    return {
      resetPwdSchema: {
        email: 'required|email'
      },
      emailSent: false,
      error: false
    }
  },
  methods: {
    ...mapActions(useUserStore, ['resetPassword']),
    async resetPwd(values) {
      try {
        await this.resetPassword(values.email)
        this.emailSent = true
      } catch {
        this.error = true
      }
    }
  }
}
</script>

<template>
  <div
    class="text-black text-center font-bold p-4 rounded mb-4"
    v-if="reg_show_alert"
    :class="reg_alert_variant"
  >
    {{ reg_alert_msg }}
  </div>

  <!-- Register form -->
  <VeeForm
    class="flex flex-col gap-4"
    :validation-schema="registrationSchema"
    @submit="register"
    :initial-values="userData"
    ref="registerForm"
  >
    <!-- Name -->
    <div class="">
      <label class="select-none group"
        >{{ $t('auth.form.nameLabel') }} <sup>*</sup
        ><sup class="invisible group-hover:visible">
          {{ $t('auth.form.mandatoryTooltip') }}</sup
        ></label
      >
      <VeeField
        id="nameField"
        name="name"
        type="text"
        class="block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        :placeholder="$t('auth.form.namePlaceholder')"
      />
      <ErrorMessage class="text-red-600" name="name" />
    </div>
    <!-- Email -->
    <div class="">
      <label class="select-none group"
        >Email <sup>*</sup
        ><sup class="invisible group-hover:visible">
          {{ $t('auth.form.mandatoryTooltip') }}</sup
        ></label
      >
      <VeeField
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        :placeholder="$t('auth.form.emailPlaceholder')"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Phone -->
    <div class="">
      <label class="select-none">{{ $t('auth.form.phoneLabel') }}</label>
      <VeeField
        name="phone"
        type="number"
        class="block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        :placeholder="$t('auth.form.phonePlaceholder')"
      />
      <ErrorMessage class="text-red-600" name="phone" />
    </div>
    <!-- Birthdate -->
    <div class="">
      <label class="select-none group"
        >{{ $t('auth.form.birthdateLabel') }} <sup>*</sup
        ><sup class="invisible group-hover:visible">
          {{ $t('auth.form.mandatoryTooltip') }}</sup
        ></label
      >
      <VeeField
        name="birthdate"
        type="date"
        min="1900-01-01"
        :max="maxBirthdate"
        class="block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
      />
      <ErrorMessage class="text-red-600" name="birthdate" />
    </div>
    <!-- Password -->
    <div class="">
      <label class="select-none group"
        >{{ $t('auth.form.passwordLabel') }} <sup>*</sup
        ><sup class="invisible group-hover:visible">
          {{ $t('auth.form.mandatoryTooltip') }}</sup
        ></label
      >
      <VeeField name="password" :bails="false" v-slot="{ field, errors }">
        <div class="flex items-center">
          <input
            v-bind="field"
            :placeholder="$t('auth.form.passwordPlaceholder')"
            :type="togglePassword ? 'text' : 'password'"
            class="block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
          />
          <i
            @click="togglePassword = !togglePassword"
            class="absolute -right-0 mr-12 p-3 hover:cursor-pointer hover:scale-110"
            :class="{
              'fa-regular fa-eye-slash': !togglePassword,
              'fa-regular fa-eye': togglePassword
            }"
          ></i>
        </div>
        <div class="text-red-600" v-for="error in errors" :key="error">{{ error }}</div>
      </VeeField>
    </div>
    <!-- Confirm Password -->
    <div class="">
      <label class="select-none group"
        >{{ $t('auth.form.confirmPasswordLabel') }} <sup>*</sup
        ><sup class="invisible group-hover:visible">
          {{ $t('auth.form.mandatoryTooltip') }}</sup
        ></label
      >
      <VeeField name="confirmPassword" :bails="false" v-slot="{ field }">
        <div class="flex items-center">
          <input
            v-bind="field"
            :type="toggleConfirmPassword ? 'text' : 'password'"
            class="block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
            :placeholder="$t('auth.form.confirmPasswordPlaceholder')"
          />
          <i
            @click="toggleConfirmPassword = !toggleConfirmPassword"
            class="absolute -right-0 mr-12 p-3 hover:cursor-pointer hover:scale-110"
            :class="{
              'fa-regular fa-eye-slash': !toggleConfirmPassword,
              'fa-regular fa-eye': toggleConfirmPassword
            }"
          />
        </div>
      </VeeField>
      <ErrorMessage class="text-red-600" name="confirmPassword" />
    </div>
    <!-- Country -->
    <div class="">
      <label class="select-none group"
        >{{ $t('auth.form.countryLabel') }} <sup>*</sup
        ><sup class="invisible group-hover:visible">
          {{ $t('auth.form.mandatoryTooltip') }}</sup
        ></label
      >
      <VeeField
        label="hola"
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
      >
        <option value="Argentina">Argentina</option>
        <option value="United States">United States</option>
        <option value="Spain">Spain</option>
        <option value="Germany">Germany</option>
        <option value="Antarctica">Antarctica</option>
        <option value="Other">Other</option>
      </VeeField>
      <ErrorMessage class="text-red-600" name="country" />
    </div>
    <!-- Terms of Service -->
    <div class="mb-3 pl-6">
      <VeeField
        name="tos"
        id="tos"
        type="checkbox"
        value="true"
        class="w-4 h-4 float-left -ml-6 mt-1 rounded"
      />
      <I18nT keypath="auth.form.accept" tag="label" for="tos">
        <a
          class="hover:underline"
          href="https://www.google.es/search?q=terms+of+service"
          target="_blank"
          >{{ $t('auth.form.tos') }}
        </a>
      </I18nT>
      <ErrorMessage class="text-red-600 block" name="tos" />
    </div>

    <!-- Register Button -->
    <button
      type="submit"
      class="block self-center bg-[#1ed760] text-black font-bold py-2 px-3 rounded-full transition hover:scale-105"
      :disabled="reg_in_submission"
    >
      <i v-if="reg_in_submission" class="fa-solid fa-spinner fa-spin"></i>
      <span v-else>{{ $t('auth.button.register') }}</span>
    </button>
  </VeeForm>
</template>

<script>
import useUserStore from '@/stores/user'
import { mapActions } from 'pinia'
import { I18nT } from 'vue-i18n'
import { ErrorMessage, Field as VeeField, Form as VeeForm } from 'vee-validate'

export default {
  name: 'RegisterForm',
  emits: ['register-success'],
  components: { I18nT, ErrorMessage, VeeField, VeeForm },
  data() {
    return {
      tab: 'login',
      registrationSchema: {
        name: 'required|min:3|max:60|alpha_spaces',
        email: 'required|email|min:3|max:100',
        phone: 'digits:9',
        birthdate: 'required|minAge:14',
        password: 'required|min:8|max:12|excluded:password',
        confirmPassword: 'passwords_missmatch:@password',
        country: 'required|country_excluded:Antarctica',
        tos: 'tos'
      },
      togglePassword: false,
      toggleConfirmPassword: false,
      userData: {
        country: 'Spain'
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: '',
      reg_alert_msg: '',
      reg_initial_msg: 'Please wait! Your account is being created.',
      reg_error_msg: 'Something went wrong. Please try again later.',
      reg_progress_variant: 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%',
      reg_error_variant: 'bg-red-500',
      reg_success_variant: 'bg-[#1ed760]'
    }
  },
  computed: {
    maxBirthdate() {
      const today = new Date()
      return today.toISOString().slice(0, 10) // Returns format YYYY-MM-DD
    }
  },
  methods: {
    async register(values) {
      this.initRegisterAlert()
      try {
        await this.createUser(values)
      } catch (error) {
        this.reg_in_submission = false
        this.reg_alert_variant = this.reg_error_variant
        this.reg_alert_msg = this.reg_error_msg
        return
      }
      this.$refs.registerForm.resetForm()
      this.reg_show_alert = true
      this.reg_in_submission = false
      this.reg_alert_variant = this.reg_success_variant
      this.reg_alert_msg =
        'Account created successfully! Please check you email to verify your account.'

      this.$emit('register-success')
    },
    ...mapActions(useUserStore, {
      createUser: 'register'
    }),
    initRegisterAlert() {
      this.reg_show_alert = true
      this.reg_in_submission = true
      this.reg_alert_variant = this.reg_progress_variant
      this.reg_alert_msg = this.reg_initial_msg
    }
  }
}
</script>

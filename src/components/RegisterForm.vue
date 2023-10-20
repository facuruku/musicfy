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
  >
    <!-- Name -->
    <div class="">
      <label class="select-none group"
        >Name <sup class="">*</sup
        ><sup class="invisible group-hover:visible"> Mandatory field</sup></label
      >
      <VeeField
        name="name"
        type="text"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        placeholder="Enter your Name"
      />
      <ErrorMessage class="text-red-600" name="name" />
    </div>
    <!-- Email -->
    <div class="">
      <label class="select-none group"
        >Email <sup class="">*</sup
        ><sup class="invisible group-hover:visible"> Mandatory field</sup></label
      >
      <VeeField
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        placeholder="your@email.com"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Phone -->
    <div class="">
      <label class="select-none">Phone</label>
      <VeeField
        name="phone"
        type="number"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        placeholder="Enter your phone"
      />
      <ErrorMessage class="text-red-600" name="phone" />
    </div>
    <!-- Birthdate -->
    <div class="">
      <label class="select-none group"
        >Birthdate <sup class="">*</sup
        ><sup class="invisible group-hover:visible"> Mandatory field</sup></label
      >
      <VeeField
        name="birthdate"
        type="date"
        min="1900-01-01"
        :max="maxBirthdate"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
      />
      <ErrorMessage class="text-red-600" name="birthdate" />
    </div>
    <!-- Password -->
    <div class="">
      <label class="select-none group"
        >Password <sup class="">*</sup
        ><sup class="invisible group-hover:visible"> Mandatory field</sup></label
      >
      <VeeField name="password" :bails="false" v-slot="{ field, errors }">
        <div class="flex items-center">
          <input
            v-bind="field"
            placeholder="Enter new Password"
            :type="showPassword ? 'text' : 'password'"
            class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
          />
          <i
            @click="showPassword = !showPassword"
            class="absolute -right-0 mr-6 p-3 hover:cursor-pointer hover:scale-110"
            :class="{ 'fa-regular fa-eye-slash': showPassword, 'fa-regular fa-eye': !showPassword }"
          ></i>
        </div>
        <div class="text-red-600" v-for="error in errors" :key="error">{{ error }}</div>
      </VeeField>
    </div>
    <!-- Confirm Password -->
    <div class="">
      <label class="select-none group"
        >Confirm Password <sup class="">*</sup
        ><sup class="invisible group-hover:visible"> Mandatory field</sup></label
      >
      <VeeField name="confirmPassword" :bails="false" v-slot="{ field }">
        <div class="flex items-center">
          <input
            v-bind="field"
            :type="showConfirmPassword ? 'text' : 'password'"
            class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
            placeholder="Confirm Password"
          />
          <i
            @click="showConfirmPassword = !showConfirmPassword"
            class="absolute -right-0 mr-6 p-3 hover:cursor-pointer hover:scale-110"
            :class="{
              'fa-regular fa-eye-slash': showConfirmPassword,
              'fa-regular fa-eye': !showConfirmPassword
            }"
          />
        </div>
      </VeeField>
      <ErrorMessage class="text-red-600" name="confirmPassword" />
    </div>
    <!-- Country -->
    <div class="">
      <label class="select-none group"
        >Country <sup class="">*</sup
        ><sup class="invisible group-hover:visible"> Mandatory field</sup></label
      >
      <VeeField
        label="hola"
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
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
      <label class="inline-block hover:cursor-pointer">
        <VeeField
          name="tos"
          value="0"
          type="checkbox"
          class="w-4 h-4 float-left -ml-6 mt-1 rounded"
        />
        Accept terms of service</label
      >
      <ErrorMessage class="text-red-600 block" name="tos" />
    </div>

    <button
      type="submit"
      class="block w-2/5 self-center bg-[#1ed760] text-black font-bold py-2 px-3 rounded-full transition hover:scale-105"
    >
      Register
    </button>
  </VeeForm>
</template>

<script>
import useUserStore from '@/stores/user'
import { mapActions } from 'pinia'

export default {
  name: 'RegisterForm',
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
      showPassword: false,
      showConfirmPassword: false,
      userData: {
        country: 'Spain'
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: '',
      reg_alert_msg: '',
      reg_initial_msg: 'Please wait! Your account is being created.',
      reg_error_msg: 'Something went wrong. Please try again later.',
      reg_success_msg: 'Success! Your account has been created.',
      reg_progress_variant: 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%',
      reg_error_variant: 'bg-red-500',
      reg_success_variant: 'bg-[#1ed760]'
    }
  },
  computed: {
    maxBirthdate() {
      const today = new Date()
      return today.toISOString().slice(0, 10) // Retorna maxDate con el formato YYYY-MM-DD
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

      this.reg_alert_variant = this.reg_success_variant
      this.reg_alert_msg = this.reg_success_msg
      window.location.reload()
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

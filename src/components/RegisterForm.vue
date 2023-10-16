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
      <label class="">Name</label>
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
      <label class="">Email</label>
      <VeeField
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        placeholder="your@email.com"
      />
      <ErrorMessage class="text-red-600" name="email" />
    </div>
    <!-- Age -->
    <div class="">
      <label class="">Age</label>
      <VeeField
        name="age"
        type="number"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        placeholder="Enter your age"
      />
      <ErrorMessage class="text-red-600" name="age" />
    </div>
    <!-- Password -->
    <div class="">
      <label class="">Password</label>
      <VeeField name="password" :bails="false" v-slot="{ field, errors }">
        <input
          v-bind="field"
          placeholder="Enter new Password"
          type="password"
          class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        />
        <div class="text-red-600" v-for="error in errors" :key="error">{{ error }}</div>
      </VeeField>
    </div>
    <!-- Confirm Password -->
    <div class="">
      <label class="">Confirm Password</label>
      <VeeField
        name="confirmPassword"
        type="password"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        placeholder="Confirm Password"
      />
      <ErrorMessage class="text-red-600" name="confirmPassword" />
    </div>
    <!-- Country -->
    <div class="">
      <label class="">Country</label>
      <VeeField
        as="select"
        name="country"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
      >
        <option value="Argentina">Argentina</option>
        <option value="United States">United States</option>
        <option value="Spain">Spain</option>
        <option value="Germany">Germany</option>
        <option value="Antarctica">Antarctica</option>
      </VeeField>
      <ErrorMessage class="text-red-600" name="country" />
    </div>
    <!-- TermsOfService -->
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
export default {
  name: 'RegisterForm',
  data() {
    return {
      tab: 'login',
      registrationSchema: {
        name: 'required|min:3|max:60|alpha_spaces',
        email: 'required|email|min:3|max:100',
        age: 'required|min_value:14|max_value:120',
        password: 'required|min:8|max:12|excluded:password',
        confirmPassword: 'passwords_missmatch:@password',
        country: 'required|country_excluded:Antarctica',
        tos: 'tos'
      },

      userData: {
        country: 'Spain'
      },
      reg_in_submission: false,
      reg_show_alert: false,
      reg_alert_variant: 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%',
      reg_alert_msg: 'Please wait! Your account is being created. '
    }
  },
  methods: {
    register(values) {
      this.reg_show_alert = true
      this.reg_in_submission = true
      this.reg_alert_variant = 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%'
      this.reg_alert_msg = 'Please wait! Your account is being created. '

      this.reg_alert_variant = 'bg-[#1ed760]'
      this.reg_alert_msg = 'Success! Your account has been created.'
    }
  }
}
</script>

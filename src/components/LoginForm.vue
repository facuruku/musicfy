<template>
  <!-- Login Form -->
  <VeeForm class="flex flex-col gap-2" :validation-schema="loginSchema" @submit="login">
    <!-- Email -->
    <div class="mb-3">
      <label class="inline-block mb-2">Email</label>
      <VeeField
        name="email"
        type="email"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        placeholder="your@email.com"
      >
      </VeeField>
      <ErrorMessage class="text-red-600 block" name="email" />
    </div>
    <!-- Password -->
    <div class="mb-3">
      <label class="inline-block mb-2">Password</label>
      <VeeField
        name="password"
        type="password"
        class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
        placeholder="Password"
      >
      </VeeField>
      <ErrorMessage class="text-red-600 block" name="password" />
    </div>
    <button
      type="submit"
      class="block w-2/5 self-center bg-[#1ed760] text-black font-bold py-2 px-3 rounded-full transition hover:scale-105"
    >
      Login
    </button>
  </VeeForm>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      tab: 'login',
      loginSchema: {
        email: 'required|email',
        password: 'required'
      }
    }
  },
  methods: {
    login(values) {
      console.log('Login started', values)
    }
  }
}
</script>

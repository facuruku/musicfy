<template>
  <!-- Auth Modal -->
  <div class="fixed z-10 inset-0 overflow-y-auto" id="modal" :class="hiddenClass">
    <div
      class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
    >
      <div class="fixed inset-0 transition-opacity">
        <div class="absolute inset-0 bg-gray-800 opacity-75"></div>
      </div>

      <!-- This element is to trick the browser into centering the modal contents. -->
      <span class="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>

      <div
        class="inline-block align-bottom bg-neutral-950 rounded-lg text-left text-white overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
      >
        <!-- Add margin if you want to see some of the overlay behind the modal-->
        <div class="py-4 text-left px-6">
          <!--Title-->
          <div class="flex justify-between items-center pb-4">
            <p class="text-2xl font-bold">Your Account</p>
            <!-- Modal Close Button -->
            <div class="modal-close cursor-pointer z-50" @click="modalVisibility = false">
              <i class="fas fa-times"></i>
            </div>
          </div>

          <!-- Tabs -->
          <ul class="flex flex-wrap mb-4 gap-2">
            <li class="flex-auto text-center">
              <a
                class="block rounded-full border border-gray-300 p-2 transition font-bold"
                href="#"
                @click.prevent="tab = 'login'"
                :class="{
                  'text-black bg-[#1ed760]': tab === 'login',
                  'hover:scale-105 hover:text-[#1ed760]': tab === 'register'
                }"
                >Login</a
              >
            </li>
            <li class="flex-auto text-center">
              <a
                class="block rounded-full border border-gray-300 p-2 transition font-bold"
                href="#"
                @click.prevent="tab = 'register'"
                :class="{
                  'text-black bg-[#1ed760]': tab === 'register',
                  'hover:scale-105 hover:text-[#1ed760]': tab === 'login'
                }"
                >Register</a
              >
            </li>
          </ul>

          <!-- Login Form -->
          <form class="flex flex-col gap-2" v-show="tab === 'login'">
            <!-- Email -->
            <div class="mb-3">
              <label class="inline-block mb-2">Email</label>
              <input
                type="email"
                class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
                placeholder="Enter your Email"
              />
            </div>
            <!-- Password -->
            <div class="mb-3">
              <label class="inline-block mb-2">Password</label>
              <input
                type="password"
                class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
                placeholder="Password"
              />
            </div>
            <button
              type="submit"
              class="block w-2/5 self-center bg-[#1ed760] text-black font-bold py-2 px-3 rounded-full transition hover:scale-105"
            >
              Login
            </button>
          </form>
          <!-- Registration Form -->
          <VeeForm
            class="flex flex-col gap-4"
            v-show="tab === 'register'"
            :validation-schema="schema"
            @submit="register"
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
                placeholder="Enter your Email"
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
              <VeeField
                name="password"
                type="password"
                class="block w-full py-1.5 px-3 text-white bg-neutral-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
                placeholder="Enter new Password"
              />
              <ErrorMessage class="text-red-600" name="password" />
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import useModalStore from '@/stores/modal'
import { mapState, mapWritableState } from 'pinia'
export default {
  name: 'AppAuth',
  data() {
    return {
      tab: 'login',
      schema: {
        name: 'required|min:3|max:100|alpha_spaces',
        email: 'required|email|min:3|max:100',
        age: 'required|min_value:14|max_value:120',
        password: 'required|min:6|max:12',
        confirmPassword: 'confirmed:@password',
        country: 'required|excluded:Antarctica',
        tos: 'required'
      }
    }
  },
  computed: {
    ...mapState(useModalStore, ['hiddenClass']),
    ...mapWritableState(useModalStore, {
      modalVisibility: 'isOpen'
    })
  },
  methods: {
    register(values) {
      console.log('Submit register: ', values)
    }
  }
}
</script>

<template>
  <div class="relative min-h-screen">
    <section
      class="absolute inset-0 min-h-screen bg-gradient-to-t from-zinc-900 from-60% to-[#4a368e] to-90% w-full"
    ></section>
    <!-- Manage Main Content -->
    <main id="manage" class="pt-20">
      <div class="container mx-auto pt-6">
        <div class="md:grid md:grid-cols-3 md:gap-4">
          <AppUpload ref="upload" />
          <div class="col-span-2">
            <div
              class="bg-neutral-900 rounded-lg shadow-inner shadow-slate-500 relative flex flex-col text-white"
            >
              <div class="px-6 pt-6 pb-5 font-bold border-b border-gray-200">
                <span class="card-title">My Songs</span>
                <i class="fa-solid fa-music float-right text-green-400 text-2xl"></i>
              </div>
              <div class="p-6">
                <!-- Composition Items -->
                <div class="border border-gray-200 p-3 mb-4 rounded">
                  <div>
                    <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                    >
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                  </div>
                  <div>
                    <form>
                      <div class="mb-3">
                        <label class="inline-block mb-2">Song Title</label>
                        <input
                          type="text"
                          class="block w-full py-1.5 px-3 text-gray-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
                          placeholder="Enter Song Title"
                        />
                      </div>
                      <div class="mb-3">
                        <label class="inline-block mb-2">Genre</label>
                        <input
                          type="text"
                          class="block w-full py-1.5 px-3 text-gray-800 border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
                          placeholder="Enter Genre"
                        />
                      </div>
                      <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600">
                        Submit
                      </button>
                      <button type="button" class="py-1.5 px-3 rounded text-white bg-gray-600">
                        Go Back
                      </button>
                    </form>
                  </div>
                </div>
                <div class="border border-gray-200 p-3 mb-4 rounded">
                  <div>
                    <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                    >
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                  </div>
                </div>
                <div class="border border-gray-200 p-3 mb-4 rounded">
                  <div>
                    <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                    >
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                  </div>
                </div>
                <div class="border border-gray-200 p-3 mb-4 rounded">
                  <div>
                    <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                    >
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                  </div>
                </div>
                <div class="border border-gray-200 p-3 mb-4 rounded">
                  <div>
                    <h4 class="inline-block text-2xl font-bold">Song Name</h4>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right"
                    >
                      <i class="fa fa-times"></i>
                    </button>
                    <button
                      class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
                    >
                      <i class="fa fa-pencil-alt"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
/* import useUserStore from '@/stores/user'*/
import AppUpload from '@/components/Upload.vue'

export default {
  name: 'managePlaylist',
  components: {
    AppUpload
  }
  /*   beforeRouteLeave(to, from, next) {
    this.$refs.upload.cancelUploads()
    next()
  } */
  /*   beforeRouteEnter(to, from, next) {
    const store = useUserStore()
    if (store.userLoggedIn) {
      next()
    } else {
      next({ name: 'home' })
    }
  } */
}
</script>

<template>
  <!-- Music Header -->
  <section class="relative z-10 mx-10 pt-40 pb-6 text-white text-center">
    <div class="container mx-auto flex items-center">
      <!-- Play/Pause Button -->
      <button
        type="button"
        class="absolute h-24 w-24 text-black text-5xl hover:scale-105 bg-[#1ed760] rounded-full"
      >
        <i class="fas fa-play"></i>
      </button>
      <div class="z-50 text-left ml-28">
        <!-- Song Info -->
        <div class="text-sm font-circular-black">Song</div>
        <div class="text-6xl font-circular-black">{{ song.modified_name }}</div>
        <div class="text-sm font-circular-black">
          {{ song.artist ? song.artist : 'Unknown artist' }}
          <span class="font-circular-regular">{{ song.genre ? song.genre : 'Unknown Genre' }}</span>
        </div>
      </div>
    </div>
  </section>

  <main
    class="relative z-10 py-5 mb-20 bg-zinc-900 bg-opacity-30 font-circular-regular min-h-[50vh] text-white"
  >
    <!-- Form -->
    <section>
      <div class="flex flex-col">
        <div class="px-6 pt-6 pb-5 font-bold border-b border-slate-500">
          <!-- Comment Count -->
          <span class="card-title"
            >Comments <span class="font-sans">(</span>15<span class="font-sans">)</span></span
          >
          <i class="fa-regular fa-comment float-right text-2xl"></i>
        </div>
        <div class="p-6">
          <form>
            <textarea
              class="block w-full py-1.5 px-3 text-white border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4"
              placeholder="Your comment here..."
            ></textarea>
            <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600 block">
              Submit
            </button>
          </form>
          <!-- Sort Comments -->
          <select
            class="block mt-4 py-1.5 px-3 text-white border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded"
          >
            <option value="1">Latest</option>
            <option value="2">Oldest</option>
          </select>
        </div>
      </div>
    </section>
    <!-- Comments -->
    <section>
      <ul class="z-10 px-6 font-circular-regular min-h-[50vh] text-white">
        <li class="p-6 border border-slate-500">
          <!-- Comment Author -->
          <div class="mb-5">
            <div class="font-bold">Elaine Dreyfuss</div>
            <time>5 mins ago</time>
          </div>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der
            doloremque laudantium.
          </p>
        </li>
        <li class="p-6 border border-gray-200">
          <!-- Comment Author -->
          <div class="mb-5">
            <div class="font-bold">Elaine Dreyfuss</div>
            <time>5 mins ago</time>
          </div>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der
            doloremque laudantium.
          </p>
        </li>
        <li class="p-6 border border-gray-200">
          <!-- Comment Author -->
          <div class="mb-5">
            <div class="font-bold">Elaine Dreyfuss</div>
            <time>5 mins ago</time>
          </div>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der
            doloremque laudantium.
          </p>
        </li>
        <li class="p-6 border border-gray-200">
          <!-- Comment Author -->
          <div class="mb-5">
            <div class="font-bold">Elaine Dreyfuss</div>
            <time>5 mins ago</time>
          </div>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der
            doloremque laudantium.
          </p>
        </li>
        <li class="p-6 bg-transparent border border-gray-200">
          <!-- Comment Author -->
          <div class="mb-5">
            <div class="font-bold">Elaine Dreyfuss</div>
            <time>5 mins ago</time>
          </div>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der
            doloremque laudantium.
          </p>
        </li>
        <li class="p-6 bg-transparent border border-gray-200">
          <!-- Comment Author -->
          <div class="mb-5">
            <div class="font-circular-black">Elaine Dreyfuss</div>
            <time class="font-circular-thin">5 mins ago</time>
          </div>

          <p>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium der
            doloremque laudantium.
          </p>
        </li>
      </ul>
    </section>
  </main>

  <AppPlayer />
</template>

<script>
import AppPlayer from '@/components/AppPlayer.vue'
import { songsCollection } from '@/includes/firebase'

export default {
  name: 'Song',
  components: { AppPlayer },
  data() {
    return {
      song: {}
    }
  },
  async created() {
    const docSnapshot = await songsCollection.doc(this.$route.params.id).get()

    if (!docSnapshot.exists) {
      this.$router.push({ name: 'home' })
    }

    this.song = docSnapshot.data()
  }
}
</script>

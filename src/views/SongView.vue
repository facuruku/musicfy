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
          <div
            class="text-white text-center p-4 mb-4"
            v-if="comment_show_alert"
            :class="comment_alert_variant"
          >
            {{ comment_alert_msg }}
          </div>
          <VeeForm :validation-schema="schema" @submit="publishComment" v-if="userLoggedIn">
            <VeeField
              as="textarea"
              name="comment"
              class="block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded mb-4"
              placeholder="Your comment here..."
            ></VeeField>
            <ErrorMessage class="text-red-600" name="comment" />
            <button
              type="submit"
              class="py-1.5 px-3 rounded text-white bg-green-600 block"
              :disabled="comment_in_submission"
            >
              Publish
            </button>
          </VeeForm>
          <!-- Sort Comments -->
          <select
            class="block mt-4 py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
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
        <li class="p-6 border border-slate-500" v-for="comment in comments" :key="comment.docID">
          <!-- Comment Author -->
          <div class="mb-5">
            <div class="font-bold">{{ comment.name }}</div>
            <time>{{ comment.date }}</time>
          </div>

          <p>
            {{ comment.content }}
          </p>
        </li>
      </ul>
    </section>
  </main>

  <AppPlayer />
</template>

<script>
import AppPlayer from '@/components/AppPlayer.vue'
import { songsCollection, auth, commentsCollection } from '@/includes/firebase'
import { mapState } from 'pinia'
import useUserStore from '@/stores/user'

export default {
  name: 'Song',
  components: { AppPlayer },
  data() {
    return {
      song: {},
      comments: [],
      schema: {
        comment: 'required|min:3'
      },
      comment_in_submission: false,
      comment_show_alert: false,
      comment_alert_variant: '',
      comment_progress_variant: 'bg-gradient-to-r from-zinc-900 from-0% to-[#5038a0] to-30%',
      comment_error_variant: 'bg-red-500',
      comment_success_variant: 'bg-[#1ed760]',
      comment_alert_msg: '',
      initial_msg: 'Publishing your comment... ',
      success_msg: 'Your comment has been published.'
    }
  },
  computed: {
    ...mapState(useUserStore, ['userLoggedIn'])
  },
  async created() {
    const docSnapshot = await songsCollection.doc(this.$route.params.id).get()

    if (!docSnapshot.exists) {
      this.$router.push({ name: 'home' })
    }

    this.song = docSnapshot.data()

    this.getComments()
  },
  methods: {
    async publishComment(values, { resetForm }) {
      this.initCommentAlert()

      const comment = {
        content: values.comment,
        date: new Date().toString(),
        songID: this.$route.params.id,
        name: auth.currentUser.displayName,
        uid: auth.currentUser.uid
      }

      await commentsCollection.add(comment)

      this.getComments()

      this.comment_in_submission = false
      this.comment_alert_variant = this.comment_success_variant
      this.comment_alert_msg = this.success_msg

      resetForm()

      setTimeout(() => {
        this.comment_show_alert = false
      }, 1000)
    },
    initCommentAlert() {
      this.comment_show_alert = true
      this.comment_in_submission = true
      this.comment_alert_variant = this.comment_progress_variant
      this.comment_alert_msg = this.initial_msg
    },
    async getComments() {
      const snapshots = await commentsCollection.where('songID', '==', this.$route.params.id).get()
      this.comments = []

      snapshots.forEach((doc) => {
        this.comments.push({
          docID: doc.id,
          ...doc.data()
        })
      })
    }
  }
}
</script>

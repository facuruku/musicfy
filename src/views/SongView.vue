<template>
  <main class="flex flex-col">
    <!-- Music Header -->
    <section class="w-full px-6 pb-10 text-white bg-gradient-1">
      <h1 class="pt-10 pb-10 font-circular-black text-xl sm:text-2xl lg:text-4xl">
        {{ greeting() }}
      </h1>
      <div class="w-full flex items-center">
        <!-- Play/Pause Button -->
        <button @click.prevent="play(song)" type="button">
          <i
            v-icon-secondary="{ icon: 'play-circle', button: true }"
            class="text-[#1ed760] text-5xl sm:text-8xl bg-black rounded-full"
          ></i>
        </button>
        <div class="text-left px-4">
          <!-- Song Info -->
          <h2 class="text-lg font-circular-black">{{ $t('song.viewTitle') }}</h2>
          <div class="text-2xl md:text-4xl lg:text-6xl font-circular-black">
            {{ song.modified_name }}
          </div>
          <div class="text-sm font-circular-black">
            {{ song.artist ?? 'Unknown artist' }}
            <span class="font-circular-thin">{{ song.genre ?? 'Unknown Genre' }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Comments -->
    <section class="flex-1 py-5 font-circular-thin text-white bg-gradient-2" id="comments">
      <!-- Form -->
      <div class="">
        <div class="px-6 pb-5 font-bold border-b border-slate-500">
          <!-- Comment Count -->
          <span class="card-title">{{
            $tc('song.commentCount', { count: song.comment_count })
          }}</span>
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
          <VeeForm :validation-schema="schema" @submit="publishComment">
            <VeeField
              as="textarea"
              name="comment"
              class="block w-full py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded mb-4"
              :placeholder="$t('song.commentPlaceholder')"
            ></VeeField>
            <ErrorMessage class="text-red-600" name="comment" />
            <button
              type="submit"
              class="py-1.5 px-3 rounded text-white bg-green-600 block"
              :disabled="comment_in_submission"
            >
              {{ $t('song.publish') }}
            </button>
          </VeeForm>

          <!-- Sort Comments -->
          <select
            class="block mt-6 py-1.5 px-3 text-white border border-transparent transition duration-500 focus:outline-none focus:border-white rounded"
            v-model="sort"
          >
            <option value="1">{{ $t('song.latest') }}</option>
            <option value="2">{{ $t('song.oldest') }}</option>
          </select>
        </div>
      </div>
      <!-- Comments -->
      <div class="">
        <ul class="px-6 font-circular-thin text-white">
          <li class="p-6 border border-slate-500" v-if="comments.length === 0">
            {{ $t('song.noComments') }}
            <span v-if="!userLoggedIn"> Login or Register to leave a comment.</span>
          </li>
          <li
            class="p-6 border border-slate-500"
            v-for="comment in sortedComments"
            :key="comment.docID"
          >
            <!-- Comment Author -->
            <div class="mb-5">
              <div class="font-bold">{{ comment.name }}</div>
              <time class="text-sm">{{ this.getCommentPublishDate(comment) }}</time>
            </div>

            <p>
              {{ comment.content }}
            </p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<script>
import { songsCollection, auth, commentsCollection } from '@/includes/firebase'
import { mapState, mapActions } from 'pinia'
import useUserStore from '@/stores/user'
import usePlayerStore from '@/stores/player'
import iconSecondary from '@/directives/icon-secondary'
import { greeting, calculateTimeAgo } from '@/includes/helper'

export default {
  name: 'Song',
  directives: {
    'icon-secondary': iconSecondary
  },
  data() {
    return {
      song: {},
      comments: [],
      sort: '1',
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
    ...mapState(useUserStore, ['userLoggedIn']),
    ...mapState(usePlayerStore, ['playing']),
    sortedComments() {
      return this.comments.slice().sort((a, b) => {
        if (this.sort === '1') {
          //latest to oldest
          return new Date(b.date) - new Date(a.date)
        }
        //oldest to latest
        return new Date(a.date) - new Date(b.date)
      })
    }
  },
  async beforeRouteEnter(to, from, next) {
    const docSnapshot = await songsCollection.doc(to.params.id).get()

    next((vm) => {
      if (!docSnapshot.exists) {
        vm.$router.push({ name: 'home' })
        return
      }

      const { sort } = vm.$route.query

      vm.sort = sort === '1' || sort === '2' ? sort : '1'

      vm.song = docSnapshot.data()
    })
  },
  async created() {
    this.getComments()
  },
  methods: {
    ...mapActions(usePlayerStore, ['play', 'toggleAudio']),
    greeting() {
      return greeting()
    },
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

      this.song.comment_count += 1

      await songsCollection.doc(this.$route.params.id).update({
        comment_count: this.song.comment_count
      })

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
    },
    getCommentPublishDate(comment) {
      return calculateTimeAgo(comment.date)
    }
  },
  watch: {
    sort(newVal) {
      if (newVal === this.$route.query.sort) {
        return
      }

      this.$router.push({
        query: {
          sort: newVal
        }
      })
    }
  }
}
</script>

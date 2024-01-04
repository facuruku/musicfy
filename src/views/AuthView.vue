<template>
  <main class="overflow-y-scroll">
    <AuthModal />
  </main>
</template>

<script>
import AuthModal from '@/components/AuthModal.vue'

export default {
  name: 'AuthView',
  components: { AuthModal }
}
</script>

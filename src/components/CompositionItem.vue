<template>
  <div class="border border-gray-200 p-3 mb-4 rounded">
    <div v-show="!showForm">
      <h4 class="inline-block text-2xl font-bold">{{ song.modified_name }}</h4>
      <button class="ml-1 py-1 px-2 text-sm rounded text-white bg-red-600 float-right">
        <i class="fa fa-times"></i>
      </button>
      <button
        class="ml-1 py-1 px-2 text-sm rounded text-white bg-blue-600 float-right"
        @click="showForm = true"
      >
        <i class="fa fa-pencil-alt"></i>
      </button>
    </div>
    <div>
      <form v-show="showForm">
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
        <button type="submit" class="py-1.5 px-3 rounded text-white bg-green-600">Submit</button>
        <button
          type="button"
          class="py-1.5 px-3 rounded text-white bg-gray-600"
          @click="showForm = false"
        >
          Go Back
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompositionItem',
  props: {
    song: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showForm: false
    }
  }
}
</script>

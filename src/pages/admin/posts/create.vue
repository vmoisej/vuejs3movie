<template>
  <div class="mb-4">
    <div class="bg-white border border-gray-200 p-4">
      <div class="mb-4">
        <input v-model="post.title" type="text" class="border border-gray-200 p-4 w-full" placeholder="title">
      </div>
      <div class="mb-4">
        <textarea v-model="post.content"  class="border border-gray-200 p-4 w-full" placeholder="content"/>
      </div>
      <div class="mb-4">
        <a @click.prevent="storePost" href="#" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white">STORE POST</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import axios from "axios";

defineOptions({
  name: 'Create'
})

const post = reactive({
  title: '',
  content: ''
})

const storePost = function() {
  axios.post('http://localhost:3000/posts', post)
      .then(res => {
        console.log(res)
      })
}
</script>

<style scoped>

</style>

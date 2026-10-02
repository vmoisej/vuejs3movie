<template>
  <div class="mb-4">
    <div class="bg-white border border-gray-200 p-4">
      <div class="mb-4">
        <input v-model="postsStore.post.title" type="text" class="border border-gray-200 p-4 w-full" placeholder="title">
      </div>
      <div class="mb-4">
        <textarea v-model="postsStore.post.content"  class="border border-gray-200 p-4 w-full" placeholder="content"/>
      </div>
      <div class="mb-4">
        <a @click.prevent="postsStore.updatePost" href="#" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white">UPDATE POST</a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue";
import {usePostsStore} from "@/stores/posts.js";

defineOptions({
  name: 'Edit'
})

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.getPost()
})

</script>

<style scoped>

</style>

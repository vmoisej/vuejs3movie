<template>
  <div>
    <div class="mb-4">
      <h3>POSTS</h3>
    </div>
  </div>
  <div>
    <div>
      <div class="bg-white border border-gray-200 p-4">
        <h3 class="mb-4 text-lg">{{ postsStore.postTitle }}</h3>
        <p class="text-sm">{{ postsStore.postContent }}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import {onMounted} from "vue"
import {usePostsStore} from "@/stores/posts.js";

defineOptions({
  name: 'Show'
})

const postsStore = usePostsStore()

onMounted(() => {
  postsStore.getPost()
})

</script>

<style scoped>

</style>

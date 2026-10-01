<template>
  <div>
    <div class="mb-4">
      <h3>POSTS</h3>
    </div>
  </div>
  <div>
    <div>
      <div class="bg-white border border-gray-200 p-4">
        <h3 class="mb-4 text-lg">{{ post.title }}</h3>
        <p class="text-sm">{{ post.content }}</p>
      </div>

    </div>
  </div>
</template>

<script setup>
import {onMounted, reactive} from "vue"
import axios from "axios"
import {useRoute} from "vue-router"

defineOptions({
  name: 'Show'
})

const post = reactive({})
const route = useRoute()

onMounted(() => {
  getPost()
})

const getPost = function() {
  axios.get(`http://localhost:3000/posts/${route.params.id}`)
      .then(res => {
        Object.assign(post, res.data)
      })
}

</script>

<style scoped>

</style>

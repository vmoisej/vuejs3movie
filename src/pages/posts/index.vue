<template>
  <div>
    POSTS
  </div>
  <div>
    <div v-for="post in posts">
      {{ post.title }}
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import axios from "axios"

const posts = ref([])

onMounted(() => {
  getPosts()
})

const getPosts = function() {
  axios.get('http://localhost:3000/posts')
      .then(res => {
        posts.value =  res.data
      })
      .catch()
      .finally()
}

</script>

<style scoped>

</style>

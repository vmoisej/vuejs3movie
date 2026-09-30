<template>
  <div>
    ADMIN POSTS
  </div>
  <div>

  </div>
</template>

<script setup>

defineOptions({
  name: 'Index'
})

import {onMounted, ref} from "vue"
import axios from "axios"

const posts = ref([])

onMounted(() => {
  getPosts()
})

const getPosts = function() {
  axios.get('http://localhost:3000/posts')
      .then(res => {
        console.log(res)
        // posts.value =  res.data
      })
}

</script>

<style scoped>

</style>

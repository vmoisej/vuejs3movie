<template>
  <div>
    <div class="mb-4">
      <h3>POSTS</h3>
    </div>
    <div class="mb-4">
      <router-link :to="{name: 'admin.posts.create'}" class="inline-block px-3 py-2 bg-sky-600 border border-sky-700 text-white">CREATE POST</router-link>
    </div>
    <div>
      <div>
        <table class="w-full border border-gray-200">
          <thead>
            <tr>
              <th class="bg-white border-b border-gray-200 text-left p-2">ID</th>
              <th class="bg-white border-b border-gray-200 text-left p-2">TITLE</th>
              <th class="bg-white border-b border-gray-200 text-left p-2">CONTENT</th>
              <th class="bg-white border-b border-gray-200 text-left p-2">ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="post in posts">
              <td class="bg-white border-b border-gray-200 text-left p-2">{{ post.id }}</td>
              <td class="bg-white border-b border-gray-200 text-left p-2 underline text-sky-700">
                <router-link :to="{name: 'admin.posts.show', params: {id: post.id}}">{{ post.title }}</router-link>
              </td>
              <td class="bg-white border-b border-gray-200 text-left p-2">{{ post.content }}</td>
              <td class="bg-white border-b border-gray-200 text-left p-2">
                <div>
                  <router-link :to="{name: 'admin.posts.edit', params: {id: post.id}}" class="inline-block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-4 text-emerald-600 cursor-pointer">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                    </svg>
                  </router-link>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup>
import {onMounted, ref} from "vue"
import axios from "axios"

defineOptions({
  name: 'Index'
})

const posts = ref([])

onMounted(() => {
  getPosts()
})

const getPosts = function() {
  axios.get('http://localhost:3000/posts')
      .then(res => {
        posts.value =  res.data
      })
}

</script>

<style scoped>

</style>

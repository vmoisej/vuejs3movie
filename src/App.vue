<template>
  <h1 class="w-1/2 mx-auto p-4 mb-4 flex items-center">Vue 3 Composition Api</h1>
  <div v-if="isModalOpen" @click="isModalOpen = false" class="modal-shadow">
    <div @click.stop class="modal bg-white border border-gray-200 p-4 mb-4">
      <div class="mb-4">
        <input v-model="editedPost.title" type="text" placeholder="Title" class="p-4 border border-gray-200 w-full">
      </div>
      <div class="mb-4">
        <textarea v-model="editedPost.content" placeholder="Content" class="p-4 border border-gray-200 w-full"></textarea>
      </div>
      <div>
        <a @click="updatePost" gref="#" class="inline block px-3 py-3 bg-sky-600 border border-sky-700 text-white">Save Post</a>
      </div>
    </div>
  </div>
  <div class="w-1/2 mx-auto p-4">
    <div class="bg-white border border-gray-200 p-4 mb-4">
      <div class="mb-4">
        <input v-model="post.title" type="text" placeholder="Title" class="p-4 border border-gray-200 w-full">
      </div>
      <div class="mb-4">
        <input ref="inputImage" type="file" class="p-4 border border-gray-200 w-full">
      </div>
      <div class="mb-4">
        <textarea v-model="post.content" placeholder="Content" class="p-4 border border-gray-200 w-full"></textarea>
      </div>

      <div v-if="errors.length > 0" class="mb-4">
        <div v-for="error in errors" class="text-red-600">
          {{ error }}
        </div>
      </div>

      <div>
        <a @click.prevent="storePost" gref="#" class="inline block px-3 py-3 bg-sky-600 border border-sky-700 text-white">Save Post</a>
      </div>
    </div>
    <div class="flex">
      <div class="w-1/2 mr-4">
        <h3 class="mb-4">Posts</h3>
        <PostItem v-for="post in posts" :post="post" @editpost="editPost"></PostItem>
      </div>
      <div class="w-1/2">
        <h3 class="mb-4">Favorite Posts</h3>
        <PostItem v-for="post in favoritePosts" :post="post" @editpost="editPost"></PostItem>
      </div>
    </div>
   </div>
</template>

<script setup>
import {onMounted, computed, provide, reactive, ref, watch} from "vue"
import PostItem from "@/components/post/PostItem.vue"

onMounted(() => {
  console.log(inputImage.value)
})

const posts = ref([
  {
    title: 'FIRST',
    content: 'First post',
    is_favorite: false
  },
  {
    title: 'SECOND',
    content: 'Second post',
    is_favorite: false
  },
  {
    title: 'THIRD',
    content: 'Third post',
    is_favorite: false
  },
])
const isModalOpen = ref(false)
const errors = ref([])
const inputImage = ref(null)
const post = reactive({
  title: '',
  content: '',
  is_favorite: false
})
let editedPost = reactive({
  title: '',
  content: '',
})

const favoritePosts = computed(() => posts.value.filter(postItem => postItem.is_favorite === true))

provide('posts', posts)

const storePost = function() {

  if (isNotValidated()) return

  posts.value.unshift({
    title: post.title,
    content: post.content
  })
  Object.assign(post, {
    title: '',
    content: '',
  })
  inputImage.value.value = null;
}

const editPost = function(post) {
  // console.log(posts.value.indexOf(post))
  isModalOpen.value = true
  Object.assign(editedPost, {
    index: posts.value.indexOf(post),
    title: post.title,
    content: post.content
  })
}

const updatePost = function() {
  Object.assign(posts.value[editedPost.index], {
    title: editedPost.title,
    content: editedPost.content
  })
  isModalOpen.value = false
}

const isNotValidated = function() {
  errors.value = []
  if (post.title === '') {
    errors.value.push('The title field is required!')
  }
  if (post.content === '') {
    errors.value.push('The content field is required!')
  }

  return errors.value.length > 0
}

watch(post, (newVal, oldVal) => {
  // console.log(newVal)
  // console.log(oldVal)
  errors.value = []
})
</script>

<style>
.modal-shadow{
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
}
.modal{
  width:50%;
}
</style>


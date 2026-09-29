<template>
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
    <div>
      <PostItem v-for="post in posts" :post="post" @deletepost="deletePost" @editpost="editPost"></PostItem>
    </div>
   </div>
</template>

<script setup>
import {reactive, ref, watch} from "vue"
import PostItem from "@/components/post/PostItem.vue"

const posts = ref([
  {
    title: 'first',
    content: 'First post'
  },
  {
    title: 'second',
    content: 'Second post'
  },
  {
    title: 'third',
    content: 'Third post'
  },
])
const isModalOpen = ref(false)
const errors = ref([])
const post = reactive({
  title: '',
  content: '',
})
let editedPost = reactive({
  title: '',
  content: '',
})

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

const deletePost = function(post) {
  posts.value = posts.value.filter( postItem => postItem != post)
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


import { defineStore } from 'pinia'
import axios from "axios";
import {useRoute} from "vue-router"

export const usePostsStore = defineStore('posts', {
    state: () => ({
        posts: [],
        post: {}
    }),

    getters: {
        postTitle: (state) => 'GETTERS:' + state.post.title
    },

    actions: {
        getPosts() {
            axios.get('http://localhost:3000/posts')
                .then(res => {
                    this.posts = res.data
                })
        },
        getPost() {
            axios.get(`http://localhost:3000/posts/${useRoute().params.id}`)
                .then(res => {
                    this.post = res.data
                })
        },
        storePost() {
            axios.post('http://localhost:3000/posts', this.post)
                .then(res => {
                    console.log(res)
                })
        },
        updatePost() {
            axios.patch(`http://localhost:3000/posts/${this.post.id}`, this.post)
                .then(res => {
                    console.log(res)
                })
        },
        deletePost(post) {
            axios.delete(`http://localhost:3000/posts/${post.id}`)
                .then(res => {
                    this.posts.value = this.posts.filter(postItem => postItem !== post)
                })
        }
    },
})

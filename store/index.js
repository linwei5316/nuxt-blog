import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

import axios from 'axios'


export default () => new Store({
  state: {
    posts: []
  },
  getters: {

  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts
    }
  },
  actions: {
    async nuxtServerInit({dispatch}, context){
      console.log('nuxtServerInit executed!')

      await dispatch('getPosts')
    },
    async getPosts({commit}){
      const API = process.env.API + 'posts.json'

      await axios.get(API)
        .then(({data}) => {

          const dataArray = []
          for(let key in data){
            dataArray.push({
              ...data[key],
              id: key
            })
          }
          return dataArray
        })
        .then(data => {
          commit('SET_POSTS', data)
        })
    },
    async addPost({commit}, postData){
      const API = process.env.API + 'posts.json' 

      await axios.post(API, postData)
        .then(({data}) => console.log(data))
    },
    async getPost({commit}, id){
      const API = `${process.env.API}posts/${id}.json`

      return await axios.get(API)
        .then(({data}) => data)
    },
    async editPost({commit}, {post, id}){
      const API = `${process.env.API}posts/${id}.json`

      return await axios.put(API, post)
        .then(({data}) => console.log(data))
    }
  }
})
import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default () => new Store({
  state: {
    posts: []
  },
  getters: {

  },
  mutations: {
    SET_POSTS(state, posts){
      state.posts = posts
    },
    ADD_POST(state, post){
      state.posts.push(post)
    },
    EDIT_POST(state, post){
      const targetIndex = state.posts.findIndex(({id}) => id === post.id)
      
      state.posts[targetIndex] = { ...post }
    }
  },
  actions: {
    async nuxtServerInit({dispatch}, {app: {$axios}}){
      console.log('nuxtServerInit executed!')

      await dispatch('getPosts')
    },
    async getPosts({commit}){
      const API = process.env.API + 'posts.json'

      console.log('axios', this.$axios.get)

      await this.$axios.get(API)
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

      return await this.$axios.post(API, postData)
        .then(({data}) => {

          commit('ADD_POST', {
            ...postData,
            id: data.name
          })
        
        })
    },
    async getPost({commit}, id){
      const API = `${process.env.API}posts/${id}.json`

      return await this.$axios.get(API)
        .then(({data}) => data)
    },
    async editPost({commit}, {post, id}){
      const API = `${process.env.API}posts/${id}.json`

      return await this.$axios.put(API, post)
        .then(({data}) => {
          commit('EDIT_POST', data)
        })
    }
  }
})
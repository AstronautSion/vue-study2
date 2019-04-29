import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList, fetchUserInfo } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    news: [],
    jobs: [],
    asks: [],
    user: {},
  },
  getters: {
    fetchedNews(state){
      return state.news;
    },
    fetchedJobs(state){
      return state.jobs;
    },
    fetchedAsk(state){
      return state.asks;
    },
    fetchedUser(state){
      return state.user;
    }
  },
  mutations: {
    SET_NEWS(state, news){
      state.news = news;
    },
    SET_JOBS(state, jobs){
      state.jobs = jobs;
    },
    SET_ASKS(state, asks){
      state.asks = asks;
    },
    SET_USER(state, user){
      state.user = user;
    }
  },
  actions: {
    FETCH_NEWS({ commit }){
      fetchNewsList()
        .then(({ data }) => {
          commit('SET_NEWS', data);
        })
        .catch(error => {
            console.log(error);
        })
    },
    FETCH_JOBS({ commit }){
      fetchJobsList()
        .then(({ data }) => {
          commit('SET_JOBS', data);
        })
        .catch(error => {
          console.log(error);
        })
    },
    FETCH_ASKS({ commit }){
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASKS', data);
        })
        .catch(error =>{
          console.log(error);
        })
    },
    FETCH_USER({ commit }, name){
      fetchUserInfo(name)
        .then(({ data }) => {
          console.log(data, name)
          commit('SET_USER', data);
        })
        .catch(error =>{
          console.log(error);
        })
    }
  }
});
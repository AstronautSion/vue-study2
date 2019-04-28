import Vue from 'vue';
import Vuex from 'vuex';
import { fetchNewsList, fetchJobsList, fetchAskList } from '../api/index.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state:{
    news: [],
    jobs: [],
    asks: [],
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
  }
});
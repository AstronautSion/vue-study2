<template>
  <div>
    <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
  data(){
    return {
      users : []
    }
  },

  created(){
    const vm = this;
    fetchNewsList()
    .then( response => {
      vm.users = response.data;
    })
    .catch( error => {
      console.log(error);
    });
  }
}
</script>
<style>

</style>

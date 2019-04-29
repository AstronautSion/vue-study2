<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
    <p v-html="userInfo.about "></p>
  </div>
</template>

<script>
//import axios from 'axios';

export default {
  computed:{
    userInfo(){
      return this.$store.state.user;
    }
  },
  created(){
    const userName = this.$route.params.id;
    this.$store.dispatch('FETCH_USER', userName);
  },
  
}
</script>

<style>

</style>

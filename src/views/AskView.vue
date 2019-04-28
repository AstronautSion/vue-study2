<template>
  <div>
     <p v-for="asks in fetchedAsk">
      <a :href="asks.url">{{ asks.title }}</a>
      <small>{{asks.time_ago}} {{asks.user}}</small>
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters([
      'fetchedAsk'
    ]),
  },
  created(){
    this.$store.dispatch('FETCH_ASKS');
  }
}
</script>
<style>
</style> 

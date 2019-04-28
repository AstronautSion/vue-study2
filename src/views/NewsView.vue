<template>
  <div>
    <p v-for="item in fetchedNews">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{item.time_ago}} {{item.user}}</small>
    </p>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'fetchedNews'
    ])
  },
  created(){
    this.$store.dispatch('FETCH_NEWS');
  }
}
</script>
<style>

</style>

<template>
  <div>
    <button v-on:click='shaoqi'>{{count}}Increment +1</button>
  </div>
</template>

<script>

//import { store } from './../vuex/store.js'
import { mapGetters, mapActions } from 'vuex'


export default ({
  computed: {
    count() {
      return this.$store.state.count
    }
  },
  methods: {
    shaoqi() {
      this.$store.commit('increment')
    }
  }
})
</script>
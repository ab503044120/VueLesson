<template>
  <div>
    <button v-on:click='shaoqi'>{{item}}Increment +1</button>
  </div>
</template>

<script>

import { store } from './../vuex/store.js'

export default ({
  data: function () {
    return {
      item: 0
    }
  },
  methods: {
    shaoqi() {
      store.commit('increment')
    }
  }
})
</script>
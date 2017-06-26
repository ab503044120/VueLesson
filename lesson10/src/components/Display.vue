<template>
  <div>
    <h3>Count is {{count}}</h3>
  </div>
</template>

<script>

import { store } from './../vuex/store.js'

export default ({
  
  computed: {
    count() {
      return store.state.count
    }
  }
})
</script>
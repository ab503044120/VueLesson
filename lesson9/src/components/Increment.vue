<template>
  <div>
    <button @click='AddMent'>{{item}}Increment +1</button>
  </div>
</template>

<script>
export default ({

  data: function () {
    return {
      item: 0
    }
  },
  methods: {
    AddMent: function () {
      this.item += 1;
      this.$emit("passData",this.item)
    }
  }
})
</script>
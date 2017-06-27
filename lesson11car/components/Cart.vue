<template>
  <div>
    <h2>
      我是购物车</h2>
    <p v-show="!products.length">
      <i>Please add some products to cart</i>
    </p>
    <ul>
      <li v-for='p in products' :key='p.id'>
        {{p.title}}-{{p.price}} x {{p.quatity}}
      </li>
    </ul>
    <p>Total:{{total}}</p>
    <p>
      <button @click="checkout(products)">CheckOut</button>
    </p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  computed:
  {
    ...mapGetters({
      products: 'carProducts'
    }),
    total() {
      return this.products.reduce((total, p) => {
        return total + p.price * p.quatity
      }, 0)
    },

  }, methods: {
    checkout(products) {
      this.$store.dispatch('checkout', products)
    }
  }

}
</script>
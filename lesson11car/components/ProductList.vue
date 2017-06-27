<template>
    <ul>
        <li v-for="p in products" :key='p.id'>
            {{p.title}}-{{p.price}} 库存 {{p.inventory}}
            <br>
            <button @click="addtoCart(p)">
                Add to cart
            </button>
        </li>
    </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    computed: mapGetters({
        products: "allProducts"
    }),
    methods: mapActions([
        "addtoCart"
    ]),
    created() {
        this.$store.dispatch("getAllProducts")
    }
}


</script>
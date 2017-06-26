<template>
    <div>
        AppItem的值{{item}}
        <dispaly :item='item' </dispaly>
            <Increment @passData='GetData'>
            </Increment>
    </div>
</template>

<script>
import dispaly from './Display.vue'
import Increment from './Increment.vue'
import {store} from './../vuex/store.js'


export default ({
    el: "#test",
    data: function () {
        return {
            item: 0
        }
    },
    components: {
        dispaly,
        Increment
    },
    methods: {
        GetData: function (Item) {
            this.item = Item;
        }
    }
})
</script>
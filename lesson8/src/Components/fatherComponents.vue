<template>
    <div id='father' class='father'>
        我是父组件<p>子控件选中了{{sonSelect}}</p>
        <button v-on:click='FatherClick'>自身的事件点击了{{NumFather}}次</button>
        <son v-bind:fatherData='NumFather' @passData='GetData'></son>


    </div>
</template>

<script>

import son from './sonComponents.vue'

export default ({
    name: 'father',
    components: {
        son
    },
    data: function () {
        return {
            NumFather: 0,
            sonSelect:""
        }
    },
    methods: {
        FatherClick: function () {
            this.NumFather += 1
        },
        GetData:function(sonValue)
        {
            this.sonSelect=sonValue;
        }
    }
})
</script>

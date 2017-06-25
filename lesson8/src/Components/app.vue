<template>
    <div id='app' class='app'>
        <p>我是App</p>
        <button v-on:click='selfClick'>触发自己的事件</button>
        <button>获得子控件的值</button>
        <father></father>
    </div>
</template>
<script>  

import father from './fatherComponents.vue'

export default ({
    el: '#test',
    components:{
        father
    },
    methods: {
        selfClick: function () {
            alert("父组件触发了自己的事件！" + this.NumberAPP)
        }
    }
})

</script>


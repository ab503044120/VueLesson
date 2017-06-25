<template>
    <div>
        我是子控件
        <ul class='test1'>
            <li v-for='item in items' :key="item.id" v-bind:class="{active:item.select}" v-bind:value="item.id" v-on:click='SelectClick(item)'>
                {{item.text}}
            </li>
        </ul>
    
        {{fatherData}} 点击的值{{SelectNum}}
    </div>
</template>
<script>
export default {
    name: 'test1',
    props: [
        'fatherData'
    ],
    data() {
        return {
            items: [
                { id: 1, text: "1", select: false },
                { id: 2, text: "2", select: false },
                { id: 3, text: "3", select: false },
                { id: 4, text: "4", select: false },
            ],
            SelectNum: ""
        }
    },
    methods: {
        SelectClick: function (a) {

            this.SelectNum = a.text;
            for (var i = 0; i < a; i++) {
                //this.$set(this.items[i].select, false)
                this.items[i].select = false;
            }
            //this.$set(this.items[(a.id-1)].select, true)
            a.select = true

            this.$emit('passData',a.text)

        }
    }
} 
</script>
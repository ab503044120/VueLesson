<template>
    <ul class='test1'>
        <li v-for='item in items' :key="item.id">
            {{item.text}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'test1',
    data() {
        return {
            items: [
                { id: 1, text: "1" },
                { id: 2, text: "2" },
                { id: 3, text: "3" },
                { id: 4, text: "4" },
            ]
        }
    }
} 
</script>
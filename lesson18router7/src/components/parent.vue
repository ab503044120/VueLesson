<template>
    <div class="parent">
        <h2>Parent</h2>
        <transition :name="transitionName" duration='3000'>
            <router-view></router-view>
        </transition>
    </div>
</template> 

<script>
export default {
    data() {
        return {
            transitionName: 'slide-left'
        }
    },
    watch: {
        '$route'(to, from) {
            const toDepth = to.path.split('/').length
            const fromDepth = from.path.split('/').length
            this.transitionName = toDepth < fromDepth ? 'slide-right' : 'slide-left'
        }
    }
}
</script>

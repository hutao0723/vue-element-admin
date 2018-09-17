<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'App'
    }
</script>

<style lang='less' scoped>
#app{
    background: #f0f0f0;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>

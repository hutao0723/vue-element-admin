<template>
    <div class="pageContent">
            <router-view :key="key" ></router-view> 
    </div>
</template>

<script>
    export default {
        computed: {
            key() {
                return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
            }
        },       
    }
</script>

<style lang='less'>
    .pageContent{
        //padding: 60px 10px 10px
    }
</style>
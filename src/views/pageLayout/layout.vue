<template>
    <div class="layout" :class="{'takeUp':user.switch_pageSide}">
        <pageSide /> 
        <pageHeader />
        <page-content />
    </div>
</template>

<script>
    import pageSide from './pageSideBar/pageSideBar'
    import pageHeader from './pageHeader/pageHeader'
    import pageContent from './pageContent/pageContent'
    import { mapState } from 'vuex' 
    export default {
        name:'layout',
        components:{
            pageSide,
            pageHeader,
            window,
            pageContent,    
        }, 
        computed:{
            ...mapState(['user',])
        },
        data() {
            return {
                pageSide:false
            }
        },
    }
</script>

<style lang='less' scoped>
    .layout{
        height: 100%;
        width: 100%;
        overflow: hidden;
    }
    
</style>
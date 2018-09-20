<template>
    <div class="pageContent" :class="user.switch_pageSide?'':'isCollapse'">
        <el-scrollbar style="height:100%">
        
                <router-view :key="key" ></router-view> 
            
        </el-scrollbar>
    </div>
</template>

<script>
    import {mapState } from 'vuex'
    export default {
        computed: {
            key() {
                return this.$route.name !== undefined? this.$route.name + +new Date(): this.$route + +new Date()
            },
            ...mapState(['user',])
        },       
    }
</script>

<style lang='less'>
    .pageContent{
        position: absolute;
        top: 60px;
        left: 65px;
        right: 0;
        bottom: 0;
        transition: left .3s ease-in-out;;
        &.isCollapse{
            left: 165px;
        }
        
    }


    .el-scrollbar{
        box-sizing: border-box;
        padding: 15px;
    }
    .el-scrollbar__bar.is-vertical{
        z-index: 1000;
    }
    .el-scrollbar__wrap{
        overflow-x: hidden!important;
        overflow-y: auto!important;
    }
    // 去除el-scrollbar横向滚动条
    .is-horizontal {
        display: none;
    }
</style>
<template>
    <div class="layout" :class="{'takeUp':pageSide}">
        <pageSide /> 
        <pageHeader />
        <el-scrollbar style="height:100%">
            <el-card class="box-card">
                <pageContent />
            </el-card>
        </el-scrollbar>
    </div>
</template>

<script>
    import pageSide from './pageSideBar/pageSideBar'
    import pageHeader from './pageHeader/pageHeader'
    import pageContent from './pageContent/pageContent'
    export default {
        name:'layout',
        components:{
            pageSide,
            pageHeader,
            window,
            pageContent,    
        }, 
        data() {
            return {
                pageSide:false
            }
        },
    }
</script>

<style lang='less'>
    .layout{
        padding:60px 0 0 165px ;
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        position: relative;
        transition: all 0.28s;
        &.takeUp{
            padding-left: 75px;
        }
        .el-scrollbar{
            box-sizing: border-box;
            padding: 15px;
            
        }
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
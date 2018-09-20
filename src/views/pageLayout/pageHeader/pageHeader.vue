<template>
    <div class="header">
        <div class="collapse-btn">
            <i class="iconfont icon-qiehuanyingyong" @click="toggleSide()"></i>
            <span>后台管理系统</span>
        </div>
        <div class="tool">
            <!--全屏-->
            <i class="iconfont icon-webtubiaoku10"></i>
            <!--消息-->
            <el-badge is-dot class="item">
                <i class="iconfont icon-xiaoxi3"></i>
            </el-badge>
            <!--头像-->
            <img :src="userInfo.avatar" class="avatar" >
            <!--下拉-->
            <el-dropdown trigger="click">
                <span class="el-dropdown-link">
                    {{userInfo.name}}<i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>注销</el-dropdown-item>
                    <el-dropdown-item>退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>

        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                userInfo: {
                    name:'admin',
                    avatar:require('./../../../assets/images/avatar.jpg')
                }
            }
        },
        created(){
            
        },  
        methods:{
            toggleSide(){
                this.$store.commit('TOGGLE_PAGESIDE')
            }
        }  
    }
</script>

<style scoped lang='less'>
    .header{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 60px;
        background: #242f42;
        z-index: 100;
        display: flex;
        justify-content: space-between;
        color: #fff;
        line-height: 60px;
        padding: 0 20px;
        font-size: 22px;
        .collapse-btn{
            .iconfont{
                cursor: pointer;
                font-size: 30px;
                vertical-align: middle;
                margin: 0 10px;
            }
        }
        .tool{
            color: #fff;
            font-size: 0;
            display: flex;
            align-items: center;
            .icon-webtubiaoku10{
                margin-right: 15px;
            }
            .iconfont{
                font-size: 18px;
            }
            .el-badge{
                line-height: 30px;
                margin-right: 15px;   
            }
            .el-dropdown{
                color: #fff;
                line-height: 1;
            }
            .avatar{
                display: inline-block;
                width: 40px;
                height: 40px;
                font-size: 0;
                overflow: hidden;
                vertical-align: middle;
                margin-right: 15px;
                border-radius: 50%;    
            }
        }
    }
</style>
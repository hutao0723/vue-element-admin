<template>
    <div class="pageSideBar">
        <el-menu mode="vertical" :default-active="$route.path" :collapse="isCollapse"  background-color="#304156" active-text-color="#409EFF"  text-color="#bfcbd9" class="el-menu-vertical-demo" :show-timeout="200">
            <!--这里限定了侧边栏显示的页面必须有子路由，否则不显示-->
            <template v-for="item in userBasicRouter" v-if="!item.hidden && item.children">
                
                <!--下面只有唯一的儿子的时候-->
                <router-link v-if="hasOneShowingChildren(item.children) && !item.children[0].children&&!item.alwaysShow" :to="item.path+'/'+item.children[0].path"
                :key="item.children[0].name">
                    
                    <el-menu-item :index="item.path+item.children[0].path" >
                        <i class="iconfont" :class="item.meta.icon"></i>
                        <span v-if="item.children[0].meta&&item.children[0].meta.title" slot="title">{{item.children[0].meta.title}}</span>
                    </el-menu-item>

                </router-link>

                <el-submenu v-else :index="item.name||item.path" :key="item.name">
                    <template slot="title">
                         <i :class="item.meta.icon" class="iconfont"></i>
                        <span v-if="item.meta&&item.meta.title" slot="title">{{item.meta.title}}</span>
                    </template>

                    <template v-for="child in item.children" v-if="!child.hidden">

                        <sidebar-item :is-nest="true" class="nest-menu" v-if="child.children&&child.children.length>0" :routes="[child]" :key="child.path"></sidebar-item>

                        <router-link v-else :to="item.path+'/'+child.path" :key="child.name">
                            <el-menu-item :index="item.path+'/'+child.path">
                                <!--图标-->
                                <!-- <i class="el-icon-d-arrow-left"></i> -->
                                <span v-if="child.meta&&child.meta.title" slot="title">{{child.meta.title}}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-submenu>
            </template>
        </el-menu>
    </div>
</template>
<script>
    import {constantRouterMap} from '@/router'
    import { mapGetters } from 'vuex' 
    export default {
        name:'pageSideBar',
        data() {
            return {
                isCollapse:false
            }
        },
        computed:{
           ...mapGetters(['userBasicRouter']),
        },
        created(){
            
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            // 
            hasOneShowingChildren(children) {
                const showingChildren = children.filter(item => {
                    return !item.hidden
                })
                //如果只有一个子路由
                if (showingChildren.length === 1) {
                    return true
                }
                return false
            },
        }

   }
</script>

<style lang='less'>
    .pageSideBar{
        background: rgb(50, 65, 87);;
        position: fixed;
        top: 60px;
        bottom: 0;
        left: 0;
        .iconfont{
            vertical-align: middle;
            margin-right: 5px;
            width: 24px;
            text-align: center;
            font-size: 18px;
        }
    }
    




    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 165px;
    }
    .el-menu-item, .el-submenu__title{
        color:#b3bacc;
    }
    // 侧边栏菜单
    .el-menu{
        background: #333744;
        border: none;
    }
    .el-submenu .el-menu-item{
        min-width: 165px;
    }

</style>
<template>
    <el-card class="box-card">
        <el-row :gutter="20">
            <el-col :span="6">
                <el-input placeholder="请输入内容" v-model="search.name" clearable>
                </el-input>
            </el-col>

            <el-col :span="6">
                <el-button type="primary">查询</el-button>
                <el-button type="primary">新建</el-button>
                
            </el-col>
        </el-row>

        <el-table :data="tableData" border style="box-sizing:border-box">
            <el-table-column prop="id" label="ID" width="180">
            </el-table-column>

            <el-table-column prop="name" label="姓名"  width="180">
            </el-table-column>

            <el-table-column prop="address"  label="地址">
            </el-table-column>

            <el-table-column label="操作" width="100">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
            </el-table-column>
        </el-table>
        <!--分页-->
        
        <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-sizes="[100, 200, 300, 400]" :page-size="100" layout="total, sizes, prev, pager, next, jumper" :total="400">
        </el-pagination>
    
    </el-card>
</template>

<script>
    import API from "@/http/api"
    export default {
        data() {
            return {
                // 搜索数据
                search:{
                    name:''
                },
                // 表格数据
                tableData: [],
                //分页
                currentPage: 4, // 翻至那一页
            }
        },  
        created(){
            this.pageInit();
        },
        methods: {
            pageInit(){
                this.$get(API.tableList).then(res=>{
                    if(res.data.code == 200){
                        this.tableData = res.data.data
                    }
                })
            },
            handleClick(row) {
                
            },
             handleSizeChange(val) {
                console.log(`每页 ${val} 条`);
            },
            handleCurrentChange(val) {
                console.log(`当前页: ${val}`);
            }
        },  
    }
</script>

<style scoped lang='less'>
    .table{
        .el-row{
            margin-bottom: 20px;
        }   
    }
</style>
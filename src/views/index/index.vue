<template>
    <div class="index">
        <el-row :gutter="20" class="warp">
            <el-col :span="6">
                <!--用户信息-->
                <el-card>
                    <div class="userInfo">
                        <img :src="user.avatar" class="avatar">
                        <div class="name">
                            <h6>欢迎{{user.job}}{{user.name}}</h6>
                            <p>今天是星期二，2018年12月11日</p>
                        </div>
                    </div>
                </el-card>
                <!--消息列表-->
                <el-card class="messageList">
                    <div class="item" v-for="el in 10">{{el}}</div>
                </el-card>
            </el-col>
            <el-col :span="18" class="chart">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <div class="tag">
                            <i class="el-icon-error"></i>
                            <div class="text">
                                <h6>1234</h6>
                                <p>用户访问量</p>
                            </div>
                        </div>
                    </el-col> 
                    <el-col :span="6">
                        <div class="tag">
                            <i class="el-icon-error"></i>
                            <div class="text">
                                <h6>1234</h6>
                                <p>用户访问量</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="tag">
                            <i class="el-icon-error"></i>
                            <div class="text">
                                <h6>1234</h6>
                                <p>用户访问量</p>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="6">
                        <div class="tag">
                            <i class="el-icon-error"></i>
                            <div class="text">
                                <h6>1234</h6>
                                <p>用户访问量</p>
                            </div>
                        </div>
                    </el-col>
                </el-row>  
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-card>
                            <div id="columnar" style="height:500px;width:100%;"></div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card>
                            <div id="cake" style="height:500px;width:100%;"></div>
                        </el-card>
                    </el-col>
                </el-row>
            </el-col>
        </el-row> 
    </div>
</template>

<script>
    // 引入 ECharts 主模块
    var echarts = require('echarts/lib/echarts');
    // 引入柱状图
    require('echarts/lib/chart/bar');
    // 引入饼图组件
    let cakeEcharts = require('echarts/lib/chart/pie')
    // 引入提示框和标题组件
    require('echarts/lib/component/tooltip');
    require('echarts/lib/component/title');
    export default {
        name:'index',
        data() {
            return {
                user: {
                    name:'admin',
                    avatar:require('./../../assets/images/avatar.jpg'),
                    job:'管理员',
                }
            }
        },
        mounted() {
            this.drawColumnar();
        }, 
        methods:{
            // 绘制柱状图
            drawColumnar() {
                let myChart = echarts.init(document.getElementById('columnar'))
                // 绘制图表
                myChart.setOption({
                    title: { text: '柱状图' },
                    tooltip: {},
                    xAxis: {
                        data: ["棒球", "羽毛球", "乒乓球", "篮球", "排球", "铅球","台球", "气球", ]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 10, 10, 20]
                    }]
                });
            },
            // 绘制饼状图
            drawCake(){
                let myChart = cakeEcharts.init(document.getElementById('cake'))
                // 绘制图表
               
                let option= {
                    backgroundColor: '#2c343c',

                    title: {
                        text: 'Customized Pie',
                        left: 'center',
                        top: 20,
                        textStyle: {
                            color: '#ccc'
                        }
                    },

                    tooltip : {
                        trigger: 'item',
                        formatter: "{a} <br/>{b} : {c} ({d}%)"
                    },

                    visualMap: {
                        show: false,
                        min: 80,
                        max: 600,
                        inRange: {
                            colorLightness: [0, 1]
                        }
                    },
                    series : [
                        {
                            name:'访问来源',
                            type:'pie',
                            radius : '55%',
                            center: ['50%', '50%'],
                            data:[
                                {value:335, name:'直接访问'},
                                {value:310, name:'邮件营销'},
                                {value:274, name:'联盟广告'},
                                {value:235, name:'视频广告'},
                                {value:400, name:'搜索引擎'}
                            ].sort(function (a, b) { return a.value - b.value; }),
                            roseType: 'radius',
                            label: {
                                normal: {
                                    textStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    }
                                }
                            },
                            labelLine: {
                                normal: {
                                    lineStyle: {
                                        color: 'rgba(255, 255, 255, 0.3)'
                                    },
                                    smooth: 0.2,
                                    length: 10,
                                    length2: 20
                                }
                            },
                            itemStyle: {
                                normal: {
                                    color: '#c23531',
                                    shadowBlur: 200,
                                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                                }
                            },

                            animationType: 'scale',
                            animationEasing: 'elasticOut',
                            animationDelay: function (idx) {
                                return Math.random() * 200;
                            }
                        }
                    ]
                }
                myChart.setOption = option
            }
        }  
    }
</script>

<style scoped lang='less'>
    .index{
        .warp{
            .userInfo{
                display: flex;
                justify-content: space-between;
                .avatar{
                    border-radius: 50%;
                    display: block;
                    width: 100px;
                    height: 100px;
                }
            }
            .tag{
                height: 90px;
                display: flex;
                border-radius: 4px;
                overflow: hidden;
                border: 1px solid #ebeef5;
                background-color: #fff;
                color: #303133;
                transition: .3s;
                box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
                box-sizing: border-box;
                align-items: center;
                i{
                    flex: 0 0 90px;
                    height: 90px;
                    line-height: 90px;
                    text-align: center;
                    background: #2d8cf0;
                    font-size: 50px;
                    color: #fff;
                }
                .text{
                    flex: 1;
                    text-align: center;
                    
                    h6{
                        font-size: 36px;
                        line-height: 1;
                        color: #2d8cf0;
                    }
                    p{
                        font-size: 14px;
                        color: #999;
                        line-height: 1;
                        margin-top: 10px;
                    }
                }
            }
            .messageList{
                margin-top: 15px;
                
            }
            .chart{
                .el-row{
                    margin-bottom: 15px;
                }
            }
        }
    }

</style>
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
                    <dl>
                        <dt>最新消息</dt>
                        <dd v-for=" item in messageList">
                            <p class="title">{{item.title}}</p>
                            <p class="textInfo">
                                <span class="author">发送人：{{item.author}}</span>
                                <span class="time">时间：{{item.time}}</span>
                            </p>
                        </dd>
                    </dl>
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
                            <div id="columnar" style="height:300px;width:100%;"></div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card>
                            <div id="cake" style="height:300px;width:100%;"></div>
                        </el-card>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-card>
                            <div id="line" style="height:300px;width:100%;"></div>
                        </el-card>
                    </el-col>
                    <el-col :span="12">
                        <el-card>
                            <div id="radar" style="height:300px;width:100%;"></div>
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
    require('echarts/lib/chart/pie');
    // 引入折线图
    require("echarts/lib/chart/line");
    // 引入折线图
    require("echarts/lib/chart/radar");

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
                },
                messageList:[
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                    {
                        title:'文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题文字标题',
                        author:'欧阳晓晓',
                        time:'2018-09-07'
                    },
                ]
            }
        },
        mounted() {
            this.drawColumnar();
            this.drawCake();
            this.drawRadar();
            this.drawLine();
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
                // 自适应窗口大小
                window.onresize = myChart.resize
            },
            // 绘制饼状图
            drawCake(){
                let myChart = echarts.init(document.getElementById('cake'))
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
                myChart.setOption(option)
                // 自适应窗口大小
                window.onresize = myChart.resize
            },
            // 绘制折线图
            drawLine(){
                let myChart = echarts.init(document.getElementById('line'))
                let option = {
                    title: {
                        text: '折线图堆叠'
                    },
                    tooltip: {
                        trigger: 'axis'
                    },
                    legend: {
                        data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    toolbox: {
                        feature: {
                            saveAsImage: {}
                        }
                    },
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        data: ['周一','周二','周三','周四','周五','周六','周日']
                    },
                    yAxis: {
                        type: 'value'
                    },
                    series: [
                        {
                            name:'邮件营销',
                            type:'line',
                            stack: '总量',
                            data:[120, 132, 101, 134, 90, 230, 210]
                        },
                        {
                            name:'联盟广告',
                            type:'line',
                            stack: '总量',
                            data:[220, 182, 191, 234, 290, 330, 310]
                        },
                        {
                            name:'视频广告',
                            type:'line',
                            stack: '总量',
                            data:[150, 232, 201, 154, 190, 330, 410]
                        },
                        {
                            name:'直接访问',
                            type:'line',
                            stack: '总量',
                            data:[320, 332, 301, 334, 390, 330, 320]
                        },
                        {
                            name:'搜索引擎',
                            type:'line',
                            stack: '总量',
                            data:[820, 932, 901, 934, 1290, 1330, 1320]
                        }
                    ]
                };
                myChart.setOption(option);
                // 自适应窗口大小
                window.onresize = myChart.resize
            },
            // 绘制雷达图
            drawRadar(){
                let myChart = echarts.init(document.getElementById('radar'))
                let option = {
                    title: {
                        text: '基础雷达图'
                    },
                    tooltip: {},
                    legend: {
                        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
                    },
                    radar: {
                        // shape: 'circle',
                        name: {
                            textStyle: {
                                color: '#fff',
                                backgroundColor: '#999',
                                borderRadius: 3,
                                padding: [3, 5]
                        }
                        },
                        indicator: [
                        { name: '销售', max: 6500},
                        { name: '管理', max: 16000},
                        { name: '信息技术', max: 30000},
                        { name: '客服', max: 38000},
                        { name: '研发', max: 52000},
                        { name: '市场', max: 25000}
                        ]
                    },
                    series: [{
                        name: '预算 vs 开销（Budget vs spending）',
                        type: 'radar',
                        // areaStyle: {normal: {}},
                        data : [
                            {
                                value : [4300, 10000, 28000, 35000, 50000, 19000],
                                name : '预算分配（Allocated Budget）'
                            },
                            {
                                value : [5000, 14000, 28000, 31000, 42000, 21000],
                                name : '实际开销（Actual Spending）'
                            }
                        ]
                    }]
                };
                myChart.setOption(option);
                // 自适应窗口大小
                window.onresize = myChart.resize
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
                align-items: center;
                .avatar{
                    border-radius: 50%;
                    display: block;
                    width: 70px;
                    height: 70px;
                }
                .name{
                    text-align: center;
                    h6{
                        color: #333;
                        font-size: 18px;
                        margin-bottom: 20px;
                    }
                    p{
                        color: #999;
                        font-size: 14px;
                    }
                }
            }
            .messageList{
                dt{
                    border-bottom: 1px solid #ccc;
                    padding-bottom: 10px;
                }
                dd{
                    border-bottom: 1px solid #ccc;
                    padding: 10px 0;
                    .title{
                        color:#999;
                        overflow: hidden;
                        text-overflow:ellipsis;
                        white-space: nowrap;
                        line-height: 1;
                        
                    }
                    .textInfo{
                        line-height: 1;
                        color:#ddd;
                        font-size: 12px;
                        padding-top: 10px;
                        .author{
                            padding-right: 15px;
                        }
                    }
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
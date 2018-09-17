<template>
    <div class="login"> 
        <div class="top"></div>
        <div class="bottom"></div>
        <!---->
        <div class="loginInfo">
            <div class="pic">
                <div class="avavtar"></div>   
                <div class="icon left"></div>
                <div class="icon right"></div>
            </div>

            <el-form :model="loginInfo" :rules="loginInfo_rules" ref="loginInfo">
                <el-form-item prop="userName">
                    <el-input v-model="loginInfo.userName" placeholder="请输入用户名"></el-input>
                </el-form-item>
                <el-form-item prop="passWord">
                    <el-input v-model="loginInfo.passWord" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
            </el-form>

            <div class="handle">
                <div class="forget">忘记密码？</div>
                <div class="login_register">
                    <span class="register">注册</span>
                    <span class="handleLogin" @click="login()" v-loading='loading'>登录</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import API from '@/http/api'
    export default {
        name:'login',
        data(){
            return{
                loading:false,
                loginInfo:{
                    userName:'admin',
                    passWord:'admin',
                },
                loginInfo_rules: {
                    userName: [
                        { required: true, message: '请输入用户名', trigger: 'blur' },
                    ],
                    passWord: [
                        { required: true, message: '请输入密码', trigger: 'blur' },
                    ],
                }
            }
        },
        methods: {
            login() {
                this.$refs.loginInfo.validate((valid) => {
                    if (valid) {
                        let params = {
                            userName:this.loginInfo.userName,
                            passWord:this.loginInfo.passWord,
                        }
                        // 提交方法
                        this.$store.dispatch('userLogin',params).then(()=>{
                            this.loading = false;
                            this.$router.push({path:'/'})
                        })
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            }
        },   
    }
</script>

<style scoped lang='less'>
    .login{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ebebeb;
        .top{
            background: #008ead;
            height: 50%;
            width: 100%;
        }
        .loginInfo{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 400px;
            border:1px solid #e7e7e7;
            background: #fff;
        }
        .pic{
            position: relative;
            .avavtar{
                height: 92px;
                width: 97px;
                background-image: url(./tou.png);
                background-size: 100%;
                position:absolute;
                top: -87px;
                left: 50%;
                transform: translateX(-50%);
            }
            .icon{
                width: 30px;
                height: 20px;
                background-image: url(./hand.png);
                background-size: 100%;
                position: absolute;
                top: -10px;
                &.left{
                    left: 100px;
                }
                &.right{
                    right: 100px;
                }
            }
        }
        .el-form{
            padding: 30px 30px 10px;
        }
        .handle{
            padding: 0 30px;
            border-top: 1px solid #e7e7e7;
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-between;
            height: 50px;
            line-height: 50px;
            color: #ccc;
            font-size: 12px;
            .forget{
                cursor: pointer;
            }
            .login_register{
                span{
                    cursor: pointer;
                    &.handleLogin{
                        padding: 7px 10px;
                        background: #008ead;
                        border: 1px solid #1a7598;
                        border-radius: 5px;
                        margin-left: 10px;
                    }
                }
            }
        }
    }
</style>
<template>
    <div class="login">
        <!-- banner区域开始 -->
        <div class="banner">
        </div>
        <!-- banner区域结束 -->

        <!-- 登录面板区域开始 -->
        <div class="login-pannel">
            <!-- 头部区域开始 -->
            <div class="login-title">
                <a href="javascript:;" class="logo">
                    <img src="@/assets/logo/logo_moka.svg" alt="">
                </a>
                <a href="javascript:;" class="login-switch">
                    猎头登录
                </a>
            </div>
            <!-- 头部区域结束 -->

            <!-- 功能区域开始 -->
            <div class="login-box">
                <div>
                    <!-- 顶部欢迎语句 -->
                    <div class="login-wel">登录到您的账户</div>
                    <!-- 用户输入框 -->
                    <div class="login-input" @click="resetStyle" @keydown.enter="goLogin">
                        <div>
                            <input type="text" placeholder="请输入账号" v-model="uname" :class="{'login-err':isErr}" >
                            <div v-show="isErr" class="login-err"><img src="@/assets/icon/cha.svg">请输入正确的用户名</div>
                        </div>
                        <div>
                            <input type="password" placeholder="请输入密码" v-model="upwd" :class="{'login-err':isErr}">
                            <div v-show="isErr" class="login-err"><img src="@/assets/icon/cha.svg">请输入正确的密码</div>
                        </div>
                    </div>
                    <!-- 登录按钮 -->
                    <div class="login-btn" @click="checkForm">
                        <a href="javascript:;">登录</a>
                    </div>
                    <!-- 其他链接 -->
                    <div class="login-other">
                        <div>
                            <span>查看</span>
                            <a href="javascript:;">《隐私政策》</a>
                        </div>
                        <div>
                            <a href="javascript:;">忘记密码</a>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 功能区域结束 -->
        </div>
        <!-- 登录面板区域结束 -->
    </div>
</template>

<script>
import axios from 'axios';
import {mapMutations} from "vuex"

export default {
    data(){
        return {
            uname:'',
            upwd: '',
            isErr: false
        }
    },
    methods: {
        // 获取vuex中的函数，设置vuex中uname的值
        ...mapMutations(["setUsersState"]),
        // 当重新点击input表单准备输入的时候，重置样式
        resetStyle(){
            this.isErr = false;
        },
        // 检查表单输入内容是否符合格式规范
        checkuname(){
            // 用户名规范，6-15位字符
            let reg = /^\w{6,15}$/;
            let res = reg.test(this.uname);
            return res
        },
        checkupwd(){
            let reg = /^\w{8,15}$/;
            let res = reg.test(this.upwd);
            return res
        },
        goLogin(){
            // 如果账户验证通过，则将用户名和登录状态存入vuex进行保存，作为其他页面判断登录状态的依据
            return new Promise( (resolve,reject)=> {
                axios.post('/users/login', `uname=${this.uname}&upwd=${this.upwd}`)
                     .then( res => {
                        console.log(res.data.data[0].uname)
                        resolve(res.data.data[0].uname);
                     })
            })
        },
        /**
         * 检查登录状态表单提交内容是否合规
         */
        checkForm(){
            if(this.checkuname() && this.checkupwd()){
                // 如果输入符合规范，则发送请求进行账户验证
                this.goLogin()
                    .then(res => {
                        this.setUsersState(res);
                        this.$router.push('/');
                    });
            }else{
                // 如果输入不符合规范，给出提示
                this.isErr = true;
            }
        },
    },
    computed:{
    },
    mounted(){

    }
}

</script>
<style lang="scss">
    @import "@/assets/css/Login.scss";
</style>
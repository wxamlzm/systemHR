<template>
    <div class="login">
        <div class="login-box">
            <!-- 左侧图片banner -->
            <div class="wrap"></div>

            <!-- 右侧登录界面 -->
            <div class="sign-form">
                <el-page-header @back="goBack" content="详情页面" title="登录到您的账户"></el-page-header>
                <!-- 一个头部logo预留地 -->
                <!-- 一个登录的title -->
                <!-- 两个上下层叠的input -->
                <!-- 底部一个按钮 -->
                <!-- 按钮下面有一批链接 -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login'
}
</script>
<style lang="scss">
    @import '@/assets/css/login.scss'
</style>
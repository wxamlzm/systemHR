<template>
    <el-container>
        <el-header>header</el-header>
        <el-container>
            <el-aside>
                <el-menu mode="vertical">
                    <el-menu-item index="button">
                        <i class="el-icon-thumb"></i>
                        Button 按钮
                    </el-menu-item>
                    <el-menu-item index="container">
                        <i class="el-icon-thumb"></i>
                        Container 容器
                    </el-menu-item>
                    <el-menu-item index="border">
                        <i class="el-icon-thumb"></i>
                        Border 边框
                    </el-menu-item>
                    <el-menu-item index="border">
                        <i class="el-icon-thumb"></i>
                        Border 边框
                    </el-menu-item> 
                    <el-menu-item index="border">
                        <i class="el-icon-thumb"></i>
                        Border 边框
                    </el-menu-item>
                    <el-menu-item index="border">
                        <i class="el-icon-thumb"></i>
                        Border 边框
                    </el-menu-item>                   
                </el-menu>
            </el-aside>
            <el-main>main</el-main>
        </el-container>
        <el-footer>footer</el-footer>
    </el-container>
</template>

<script>
import {mapState} from 'vuex'

export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState(["uname"])
    },
    mounted(){
        console.log(`欢迎回来${this.uname}`);
    }
}
</script>

<style lang="scss">
    @import "@/assets/css/Home.scss";
</style>
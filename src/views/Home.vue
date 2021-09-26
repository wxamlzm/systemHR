<template>
    <el-container>
        <el-aside>aside</el-aside>
        <el-main>main</el-main>
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
    @import "@/assets/css/Home.scss"
</style>
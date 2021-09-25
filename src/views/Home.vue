<template>
    <el-container>
        <el-header></el-header>
        <el-main></el-main>
        <el-footer></el-footer>
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
</style>
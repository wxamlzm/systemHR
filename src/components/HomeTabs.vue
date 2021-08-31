<template>
<!-- 实现顶部tab界面，共计8枚，被选中的tab背景色变蓝，字体及图表反白 -->
<!-- tab之间存在1-3px之间的间隙 -->
  <el-tabs v-model = "activetab" class="hometabs">
    <el-tab-pane label = '首页' name = "sy">
      <img src="@/assets/img/icon/home.png" slot="label">
    </el-tab-pane>
    <el-tab-pane label = '商品管理' name = "sp">
      <img src="@/assets/img/icon/sp.png" slot="label">
    </el-tab-pane>
    <el-tab-pane label = '订单管理' name = "dd">
      <img src="@/assets/img/icon/dd.png" slot="label">
    </el-tab-pane>
    <el-tab-pane label = '会员管理' name = "hy">
      <img src="@/assets/img/icon/hy.png" slot="label">
    </el-tab-pane>
    <el-tab-pane label = '活动管理' name = "hd">
      <img src="@/assets/img/icon/hd.png" slot="label">
    </el-tab-pane>
    <el-tab-pane label = '消息中心' name = "xx">
      <img src="@/assets/img/icon/xx.png" slot="label">
    </el-tab-pane>
    <el-tab-pane label = '支付管理' name = "zf">
      <img src="@/assets/img/icon/zf.png" slot="label">
    </el-tab-pane>
    <el-tab-pane label = '更多' name = "more">
      <img src="@/assets/img/icon/more.png" slot="label">
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: "HomeTabs",

  data(){
    return{
      activetab: 'sy'
    }
  }
}
</script>

<style lang="scss">
  @import "@/assets/css/hometabs.scss"
</style>
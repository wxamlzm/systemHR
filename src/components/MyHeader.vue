<template>
  <header class="my-header">
    <div class="header-box clearfix">
      <div class="logo">
        <img src="../assets/img/logo/logo.png" alt="">
      </div>
      <div class="operation">
        <div class="clearfix">
          <a href="javascript:;">
            <img src="" alt="">
            <span>浏览商店</span>
          </a>
          <a href="javascript:;">
            <img src="" alt="">
            <span>系统设置</span>
          </a>
          <a href="javascript:;">
            <img src="" alt="">
            <span>退出</span>
          </a>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
  export default{
    name: 'MyHeader'
  }
</script>

<style lang="scss">
  @import "../assets/css/myheader.scss";
</style>
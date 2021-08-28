<template>
  <div id="app">
    <!-- 页头 -->
    <my-header></my-header>
    <router-view></router-view>
    <!-- 页尾 -->
    <my-footer></my-footer>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader.vue"
import MyFooter from "./components/MyFooter.vue"
  export default({
    components:{
      MyHeader,
      MyFooter
    }
  })
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>

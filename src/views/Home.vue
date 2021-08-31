<template>
  <div class = "home" type = "card">
    <my-header></my-header>
    <home-tabs></home-tabs>
    <my-footer></my-footer>
  </div>
</template>

<script>
// @ is an alias to /src
import MyHeader from '@/components/MyHeader.vue'
import MyFooter from '@/components/MyFooter.vue'
import HomeTabs from '@/components/HomeTabs.vue'

export default {
  name: 'Home',

  components: {
    MyHeader,
    MyFooter,
    HomeTabs
  }

}
</script>
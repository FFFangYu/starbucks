<template>
  <div id="app">
    <router-view></router-view>
    <tabbar></tabbar>
  </div>
</template>

<script>
import Tabbar from '@/components/Tabbar/Tabbar'

export default {
  name: 'App',
  components: {
    Tabbar
  }
}
</script>

<style>
#app{
}
</style>

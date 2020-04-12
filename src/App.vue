<template>
  <div id="app">
    <!-- 只缓存Home -->
    <keep-alive include="Layout">
      <router-view />
    </keep-alive>
    <BackTop />
  </div>
</template>

<style lang="less">

</style>

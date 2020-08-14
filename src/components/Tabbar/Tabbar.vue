<template>

    <nav class="mui-bar mui-bar-tab">
      <router-link class="mui-tab-item" to='/home'>
        <span class="mui-icon mui-icon-star-filled"></span>
        <span class="mui-tab-label">首页</span>
      </router-link>
      <router-link class="mui-tab-item" to="/card">
        <span class="mui-icon-extra mui-icon-extra-card"></span>
        <span class="mui-tab-label">星礼卡</span>
      </router-link>
      <router-link class="mui-tab-item" to="/message">
        <span class="mui-icon mui-icon-email-filled"></span>
        <span class="mui-tab-label">星消息</span>
      </router-link>
      <router-link class="mui-tab-item" to="/user">
        <span class="mui-icon mui-icon-person-filled"></span>
        <span class="mui-tab-label">我</span>
      </router-link>
    </nav>

</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.mui-active{
    color: #0BAC69 !important;
}
</style>

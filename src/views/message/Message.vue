<template>
  <div class="message-container">
    <div class="top">
      <div class="message-title">
        <mt-header fixed title="星消息"></mt-header>
      </div>

      <div class="mui-content" @click.prevent="test">

        <div class="mui-slider">
          <div class="message-indicator">
            <router-link class="mui-control-item" to="/message/news">
              星资讯
            </router-link>
            <router-link class="mui-control-item" to="/message/mymsg">
              我的消息
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <!-- 面板内容 --> 
    <router-view class="card-content"></router-view>
   
  </div>
</template>
<script>
import "@/assets/css/message.css";

export default {
  data() {
    return {
      pageHeight:window.pageYOffset,
      pageWidth:window.pageXOffset
    };
  },
  created() {
    // 编程式导航，跳转到星资讯
    this.init();
  },
  methods: {
    // 编程式导航
    init() {
      if (this.$route.path === "/message") {
        this.$router.push("/message/news");
      }
    },
    test(){
      console.log(window.pageYOffset)
    }
  },
};
</script>
<style lang="less" scoped>
.top {
    height: auto;
    position:fixed;
    top:0;
    left:0;
    right:0;
}
.message-title {
  background-color: white;
}
.mui-control-content {
  min-height: 269px;
}
.card-content {
    margin-top: 73px;
    flex: 1;
  padding: 5px;
}
</style>

<template>
  <div class="card">
    <!-- 卡片图案 -->
    <div class="card-content">
      <img :src="getImgUrl(card.src)" width="100%" />
    </div>
    <!-- 卡片标题 和 时间 -->
    <div v-if="card.title" class="card-title">
      <p class="p_title">{{ card.title }}</p>
      <p class="p_time">{{ card.add_time | dateFormat}}</p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["card"],
  data() {
    return {};
  },
  created() {},
  methods: {
    getImgUrl(id) {
      // 这种方式会报错，找不到模块
      // return require("@/assets/img/home/"+id+".jpg");
      try {
        return require("@/assets/img/home/" + id);
      } catch (e) {
        return require("@/assets/img/home/no.jpg");
      }
    },
  },
  computed: {},
};
</script>
<style lang="less" scoped>
.card {
  margin-bottom: 8px;
  .card-content {
    img {
      display: block;
      box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.1);
    }
  }
  .card-title {
    background-color: white;
    padding: 16px;
    p{
      margin: 0;
    }
    .p_title{
      color: black;
      font-size: 14px;
      margin-bottom: 5px;
    }
  }
}
</style>

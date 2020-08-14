<template>
  <div class="home-container">
    <!--  -->
    <!-- <card-item v-for="(item, index) in panelList" :key="index">
      <p slot="card-p">{{ item.panel_title }}</p>
      <img slot="card-img" :src="getImgUrl(item.src)" alt="" width="100%" />
    </card-item> -->
    <panel v-for="item in panelList" :key='item.id' :title="item.title">
      <card-item slot='card' v-for="card in item.img" :key='card.id' :card='card'></card-item>
    </panel>
  </div>
</template>
<script>
import Panel from "@/views/home/Panel";
import CardItem from "@/views/home/CardItem"
export default {
  data() {
    return {
      panelList: [],
    };
  },
  created() {
    this.getPanels();
  },
  computed: {},
  methods: {
    // 获取首页面板信息
    async getPanels() {
      const { data: res } = await this.$http.get("/queryPanels");
      
      var list = [];
      res.forEach((item) => {
        for (let i = 0; i < list.length; i++) {
          if (item.id === list[i].id) {
            var img = {};
            img.src = item.src;
            img.card_id = item.card_id;
            list[i].img.push(img);
            return;
          }
        }
        list.push({
          id: item.id,
          title: item.panel_title,
          img: [
            {
              src: item.src,
              card_id: item.card_id,
            },
          ],
        });
      });

      this.panelList = list;
    },
  },
  components: {
    Panel,
    CardItem,
  },
};
</script>
<style lang="less" scoped>
.home-container{
  overflow: hidden;
  padding-bottom: 50.4px;
}
</style>

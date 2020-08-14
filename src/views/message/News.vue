<template>
  <div class="news-container">
    <card-item v-for="item in cardList" :key="item.id" :card="item"></card-item>
  </div>
</template>
<script>
import CardItem from '@/views/home/CardItem'
export default {
    data() {
        return {
            cardList:[]
        }
    },
    created() {
        this.getCards()
    },
    methods: {
        // 获取卡片数据
        async getCards(){
            const {data:res} = await this.$http.get('/queryCards')
            this.cardList = res
        },
    },
    components:{
        CardItem
    }
}
</script>
<style lang="less" scoped>
.news-container{
    overflow: hidden;
    padding: 10px;
    padding-bottom: 50.4px;
}
</style>

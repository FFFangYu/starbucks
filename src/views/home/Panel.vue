<template>
  <div class="panel">
    <div class="title">
      <p>{{title}}</p>
    </div>
    <slot name="card"></slot>
  </div>
</template>
<script>
export default {
  props: ["title"],
  data() {
    return {};
  },
};
</script>
<style lang="less" scoped>
.panel {
  font-size: 15px;
  position: relative;
  margin: 10px;
  border-radius: 2px;
  background-color: #efeff4;
  background-clip: padding-box;

  .title{
      font-size: 15px;
    p {
      color: black;
      font-weight: 550;
    }
  }
}
</style>

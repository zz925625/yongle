<template>
  <div class="content">
    <Header>搜索</Header>
    <div class="search">
      <i class="iconfont sousuo">&#xe60f;</i>
      <input type="text" />
      <span>取消</span>
    </div>
    <Foot></Foot>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Foot from "@/components/Foot";
export default {
  data() {
    return {};
  },

  components: { Header, Foot },

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style scoped lang='scss'>
.content {
  display: flex;
  .search {
    flex: 1;
    height: 34px;
    margin: 10px 20px 0;
    position: relative;
    display: flex;
    i {
      position: absolute;

      left: 7px;
      color: #ff3a56;
      top: 7px;
    }
    input {
      caret-color: #ff3a56;
      flex: 1;
      font-size: 13px;
      padding: 0 30px;
      background: #f3f4f5;
      border-radius: 10px;
      height: 34px;
    }

    span {
      width: 45px;
      height: 34px;
      line-height: 34px;
      text-align: center;
      display: block;
      color: #5f646a;
      font-size: 14px;
    }
  }
}
</style>
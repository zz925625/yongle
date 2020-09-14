<template>
  <div class="content">
    <div class="view">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

    <ul class="nav">
      <router-link tag="li" active-class="active" to="/home/first/commend">
        <span class="iconfont">&#xe610;</span>
        首页
      </router-link>
      <router-link tag="li" active-class="active" to="/home/classify">
        <span class="iconfont">&#xe65e;</span>
        分类
      </router-link>
      <router-link tag="li" active-class="active" to="/home/search">
        <span class="iconfont">&#xe60f;</span>
        搜索
      </router-link>
      <router-link tag="li" active-class="active" to="/home/user">
        <span class="iconfont">&#xe602;</span>
        我的
      </router-link>
    </ul>
  </div>
</template>

<script>
import "@/assets/font/iconfont.css";
export default {
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>

<style scoped lang='scss'>
.content {
  overflow: hidden;
  height: 100%;
  display: flex;
  flex-direction: column;
  .view {
    flex: 1;
    overflow: hidden;
    height: 100%;
  }
  .nav {
    display: flex;
    flex-direction: row;
    font-size: 14px;
    color: #333;
    justify-content: space-between;
    height: 50px;
    width: 100%;
    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      align-items: center;
      justify-content: center;
      flex: 1;
      span {
        font-size: 25px;
        margin: 0 auto;
      }
    }
    .active {
      color: #ff2959;
    }
  }
}
</style>